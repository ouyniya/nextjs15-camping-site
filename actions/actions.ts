"use server";

import { profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

// const getAuthUser = async () => {
//   const user = await currentUser();

//   // not log in
//   if (!user) {
//     throw new Error("You must login!!");
//   }

//   // not have profile
//   if (!user.privateMetadata.hasProfile) redirect("/profile/create");

//   return user;
// };

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
