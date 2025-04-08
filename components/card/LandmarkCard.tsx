import Image from "next/image";
import { landmarkCardProps } from "@/utils/types";
import LandmarkStar from "./LandmarkStar";

const LandmarkCard = ({ landmark }: { landmark: landmarkCardProps }) => {
  const { id, name, image, province, lat, lng, category } = landmark;

  return (
    <article className="group relative">
      <div className="relative h-[300px] rounded-md mb-2">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, 50vw"
          alt={name}
          fill
          className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold">{name}</h3>
        <p>
          <LandmarkStar />
        </p>
      </div>
    </article>
  );
};
export default LandmarkCard;
