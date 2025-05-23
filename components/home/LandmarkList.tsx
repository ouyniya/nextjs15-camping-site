import LandmarkCard from "../card/LandmarkCard";
import { landmarkCardProps } from "@/utils/types";

const LandmarkList = ({ landmarks }: { landmarks: landmarkCardProps[] }) => {
  // console.log("Total landmarkIds:", landmarks.length);

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">

      {
      landmarks.map((landmark) => {
        return <LandmarkCard key={landmark.id} landmark={landmark} />;
      })}
    </section>
  );
};
export default LandmarkList;
