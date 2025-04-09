"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Share2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";

const ShareBtn = ({
  landmarkId,
  name,
}: {
  landmarkId: string;
  name: string;
}) => {
  const shareLink = `http://localhost:3000/landmark/${landmarkId}`;
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            <Share2 />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" className="flex gap-2 w-auto">
          <FacebookShareButton url={shareLink} name={name}>
            <FacebookIcon size={40} className="rounded-md" />
          </FacebookShareButton>
          <TwitterShareButton url={shareLink} name={name}>
            <TwitterIcon size={40} className="rounded-md" />
          </TwitterShareButton>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default ShareBtn;
