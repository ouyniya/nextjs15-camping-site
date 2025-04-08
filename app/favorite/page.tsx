import { fetchFavorite } from "@/actions/actions";
import LandmarkList from "@/components/home/LandmarkList";

const FavoritePage = async () => {
  const favorites = await fetchFavorite();

  return <LandmarkList landmarks={favorites}/>;
};
export default FavoritePage;
