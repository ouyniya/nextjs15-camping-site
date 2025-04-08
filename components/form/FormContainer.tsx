"use client"; //component นี้เป็น Client Component เพราะใช้ hook  ซึ่งต้องรันบนฝั่ง client เท่านั้น

import { useActionState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
  className,
}: {
  action: actionFunction; // action: ฟังก์ชันที่จะทำงานตอน submit ฟอร์ม
  children: React.ReactNode; // children: เนื้อหาด้านใน <form> เช่น input, button
  className?: string; // className: ใส่คลาสเสริมให้ <form>
}) => {
  const [state, formAction] = useActionState(action, initialState); // formAction: ฟังก์ชันที่จะผูกกับ <form action={formAction}>
  // console.log("state: ", state); // state: เก็บค่าผลลัพธ์ที่ได้จากการ submit ฟอร์ม

  //ทุกครั้งที่ state เปลี่ยน (เช่นหลัง submit ฟอร์ม), ถ้ามีข้อความใน state.message, ระบบจะแสดง popup แจ้งเตือนด้วย toast() จาก sonner
  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className={className}>
      {children}
    </form>
  );
};

export default FormContainer;
