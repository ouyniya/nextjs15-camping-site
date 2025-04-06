import { AlignLeft, CircleUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DropdownList = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2" asChild>
          <Button variant="outline">
            <AlignLeft />
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* if signed in show menu */}
          <SignedIn>
            {links.map((el, index) => (
              <DropdownMenuItem key={index}>
                <Link href={el.href}>{el.label}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>
          </SignedIn>

          {/* if logout  */}
          <SignedOut>
            {/* sign up btn */}
            <DropdownMenuItem>
              <SignUpButton mode="modal">Register</SignUpButton>
            </DropdownMenuItem>

            {/* sign in btn */}
            <DropdownMenuItem>
              <SignInButton mode="modal">Login</SignInButton>
            </DropdownMenuItem>
          </SignedOut>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default DropdownList;
