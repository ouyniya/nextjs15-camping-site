"use server";

import {
  imageSchema,
  landmarkSchema,
  profileSchema,
  validateWithZod,
} from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";

const getAuthUser = async () => {
  const user = await currentUser();

  // not log in
  if (!user) {
    throw new Error("You must login!!");
  }

  // not have profile
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");

  return user;
};

// send error message
const renderError = (error: unknown): { message: string } => {
  return {
    message:
      error instanceof Error // check if Error class ?
        ? error.message
        : "Error!!",
  };
};

export const CreateProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  // validate

  try {
    // get user from clerk
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!");

    // validate form data
    const rawData = Object.fromEntries(formData); // Object.fromEntries(iterable)

    // formData เป็น object แบบพิเศษที่ได้จาก <form> เมื่อ submit ผ่าน <form action={...}> หรือ new FormData(formElement) มันเก็บข้อมูลแบบ key-value pair แต่ไม่ใช่ object ปกติ
    // rawData เป็น object ปกติแบบ JavaScript { key: value } ได้จาก Object.fromEntries(formData) ใช้สะดวกกว่าเมื่อเราต้องการตรวจสอบหรือ validate ด้วย Zod

    const validateField = validateWithZod(profileSchema, rawData);

    // create data in db
    const data = {
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress,
      profileImage: user.imageUrl ?? "",
      ...validateField,
    };

    console.log(data);

    await db.profile.create({
      data: data,
    });

    // update clerk
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    // return { message: "Create profile successfully." };
  } catch (error) {
    return renderError(error);
  }

  redirect("/");
};

export const CreateLandmarkAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    // get user from clerk
    // from now on
    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData); // Object.fromEntries(iterable)
    const file = formData.get("image") as File;
    // console.log(file)

    // step 1 validate form data
    const validatedFile = validateWithZod(imageSchema, { image: file });
    const validatedField = validateWithZod(landmarkSchema, rawData);

    // step 2 Upload image
    const fullPath = await uploadFile(validatedFile.image);
    // console.log(fullPath);

    // step 3 insert into db
    const data = {
      ...validatedField,
      image: fullPath,
      profileId: user.id,
    };

    console.log(data);

    await db.landmark.create({
      data: data,
    });

    // return { message: "Create landmark successfully." };
  } catch (error) {
    return renderError(error);
  }

  redirect("/");
};


// fetch landmarks data
export const fetchLandmarks = async () => {
  const landmarks = await db.landmark.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return landmarks;
};
