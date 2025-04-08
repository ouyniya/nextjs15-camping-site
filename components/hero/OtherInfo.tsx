import { landmarkCardProps } from "@/utils/types";

const OtherInfo = ({ landmark }: { landmark: landmarkCardProps }) => {
  const { name, province, description } = landmark;
  return (
    <div className="text-white opacity-85">
      <p className="font-semibold text-xl">{province}</p>
      <p className="text-4xl font-semibold xl:text-6xl">{name}</p>
      <p className="text-sm xl:text-lg">{description.substring(0, 70)}...</p>
    </div>
  );
};
export default OtherInfo;
