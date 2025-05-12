"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

interface EmptyListProps {
  heading?: string;
  message?: string;
  btnText?: string;
}

const EmptyList = ({
  heading = "No items",
  message = "Please try again later.",
  btnText = "Clear Filter",
}: EmptyListProps) => {
  const [loading, setLoading] = useState(false);

  const handleRedirect = () => {
    setLoading(true); // ตั้งสถานะ loading เป็น true
    setTimeout(() => {
      setLoading(false); // ตั้งสถานะ loading เป็น false หลังจากเวลาผ่านไป (จำลองการโหลดหน้า)
    }, 5000); // กำหนดเวลาในการจำลอง
  };

  return (
    <div className="w-full text-center mt-12">
      <h2 className="text-2xl font-semibold">{heading}</h2>
      <p className="mt-2">{message}</p>
      <div className="flex justify-center gap-2">
        <Link href="/search" passHref>
          <Button
            className="capitalize mt-4 font-bold hover:cursor-pointer hover:translate-0.5 transition-all duration-300 shadow-md"
            disabled={loading} // ปิดการคลิกปุ่มเมื่อสถานะ loading เป็น true
            onClick={handleRedirect}
          >
            {loading ? "Loading..." : btnText}{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyList;
