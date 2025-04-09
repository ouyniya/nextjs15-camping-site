import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { landmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoryList from "./CategoryList";
import EmptyList from "./EmptyList";

const LandmarkContainer = async ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const landmarks: landmarkCardProps[] = await fetchLandmarks({
    search,
    category,
  });

  const landmarksHero: landmarkCardProps[] = await fetchLandmarksHero();

  // if (landmarks.length === 0) {
  //   return <EmptyList />
  // }

  return (
    <div>
      <Hero landmarks={landmarksHero} />
      <CategoryList search={search} category={category} />
      {
        landmarks.length === 0 
        ? <EmptyList/>
        : <LandmarkList landmarks={landmarks} />
      }
    </div>
  );
};
export default LandmarkContainer;
