import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SignInCardBtn } from "../form/Buttons";
import { fetchFavoriteId } from "@/actions/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleBtn = async ({ landmarkId }: { landmarkId: string }) => {
  const { userId } = await auth();
  // console.log(userId)
  if (!userId) return <SignInCardBtn />;

  const favoriteId = await fetchFavoriteId({ landmarkId });

  return <FavoriteToggleForm favoriteId={favoriteId} landmarkId={landmarkId} />;
};
export default FavoriteToggleBtn;
