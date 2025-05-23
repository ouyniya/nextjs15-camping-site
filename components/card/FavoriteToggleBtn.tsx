import { auth } from "@clerk/nextjs/server";
import { SignInCardBtn } from "../form/Buttons";
import { fetchFavoriteId } from "@/actions/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleBtn = async ({ landmarkId }: { landmarkId: string }) => {
  const { userId } = await auth();
  // console.log(userId)
  if (!userId) return <SignInCardBtn />;

  const getFavoriteId = async (landmarkId: string) => {
    if (landmarkId) {
      const favoriteId = await fetchFavoriteId({ landmarkId });
      return favoriteId;
    }
    return null;
  };

  const favoriteId: string | null = await getFavoriteId(landmarkId);
  // console.log("favoriteId", landmarkId);

  return <FavoriteToggleForm favoriteId={favoriteId} landmarkId={landmarkId} />;
};
export default FavoriteToggleBtn;
