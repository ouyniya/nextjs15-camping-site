import { fetchFavorite } from "@/actions/actions";
import EmptyList from "@/components/home/EmptyList";
import LandmarkList from "@/components/home/LandmarkList";

const FavoritePage = async () => {
  const favorites = await fetchFavorite();
  if (favorites.length === 0) {
    return <EmptyList 
    heading="No Favorite Items Found"
    btnText="Back to Home"
    />;
  }

  return <LandmarkList landmarks={favorites} />;
};
export default FavoritePage;
