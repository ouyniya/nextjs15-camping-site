"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

type btnSize = "default" | "lg" | "sm";

type SubmitBtnProps = { className: string; size: btnSize; text: string };

export const SubmitButton = ({ className, size, text }: SubmitBtnProps) => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <Button disabled={pending} className={className} size={size}>
      {pending ? (
        <>
          <Loader className="animate-spin" />
          Loading
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};
