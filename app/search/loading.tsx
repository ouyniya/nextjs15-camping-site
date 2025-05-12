import { LoaderCircle } from "lucide-react";

const loading = () => {
  return (
    <div className="w-full h-[calc(100vh-120px)] flex justify-center items-center">
      <LoaderCircle className="animate-spin text-primary" />
    </div>
  );
};
export default loading;
