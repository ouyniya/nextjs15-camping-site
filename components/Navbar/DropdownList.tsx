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

type NavLinks = {label:string, href:string}

const links:NavLinks[] = [
  { label: "Home", href: "/" },
  { label: "Favorite", href: "/favorite" },
  { label: "Camp", href: "/camp" },
];

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
          {links.map((el, index) => (
            <DropdownMenuItem key={index}>
              <Link href={el.href}>{el.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default DropdownList;
