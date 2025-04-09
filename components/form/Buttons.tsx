"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Heart, Loader } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

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

export const SignInCardBtn = () => {
  return (
    <SignInButton mode="modal">
      <Button size="icon" variant="outline">
        <Heart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" variant="outline">
      {pending ? (
        <Loader className="animate-spin" />
      ) : isFavorite ? (
        <Heart fill="crimson" color="crimson" />
      ) : (
        <Heart />
      )}
    </Button>
  );
};
