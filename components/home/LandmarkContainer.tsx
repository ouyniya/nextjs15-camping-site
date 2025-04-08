import { fetchLandmarks } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { landmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";

const LandmarkContainer = async () => {
  const landmarks: landmarkCardProps[] = await fetchLandmarks();

  return (
    <div>
      <Hero landmarks={landmarks} />
      <LandmarkList landmarks={landmarks} />
    </div>
  );
};
export default LandmarkContainer;
