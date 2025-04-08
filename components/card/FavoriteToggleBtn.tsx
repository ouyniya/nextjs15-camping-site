import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SignInCardBtn } from "../form/Buttons";

const FavoriteToggleBtn = async ({ landmarkId }: { landmarkId: string }) => {
  const { userId } = await auth();
  // console.log(userId)

  if (!userId) return <SignInCardBtn />

  return (
    <Button size="icon" variant="outline" className="opacity-80">
      {/* <Heart fill="black" /> */}
      <Heart />
    </Button>
  );
};
export default FavoriteToggleBtn;
