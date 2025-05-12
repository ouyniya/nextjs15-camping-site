import { Album, Map, Notebook, Signature } from "lucide-react";

function WhyUs() {
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-12 md:gap-8 px-8 mt-8 opacity-80">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Signature className="size-[100px]" />
          <p className="font-bold text-xl">Authentic Travel Stories</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Notebook className="size-[90px]" />
          <p className="font-bold text-xl">Insider Tips & Hidden Gems</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Album className="size-[90px]" />
          <p className="font-bold text-xl">Photo Galleries</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Map className="size-[90px]" />
          <p className="font-bold text-xl">Interactive Travel Maps</p>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;
