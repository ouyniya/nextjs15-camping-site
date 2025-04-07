"use server";

import { profileSchema, validateWithZod } from "@/utils/schemas";

// send error message
const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error // check if Error class ? 
    ? error.message
    : 'Error!!'
  };
};

export const CreateProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  // validate

  try {
    const rawData = Object.fromEntries(formData); // Object.fromEntries(iterable)

    // formData เป็น object แบบพิเศษที่ได้จาก <form> เมื่อ submit ผ่าน <form action={...}> หรือ new FormData(formElement) มันเก็บข้อมูลแบบ key-value pair แต่ไม่ใช่ object ปกติ

    // rawData เป็น object ปกติแบบ JavaScript { key: value } ได้จาก Object.fromEntries(formData) ใช้สะดวกกว่าเมื่อเราต้องการตรวจสอบหรือ validate ด้วย Zod

    const validateField = validateWithZod(profileSchema, rawData);

    return { message: "Create profile successfully." };
  } catch (error) {
    return renderError(error)
  }
};
