import { MoveUpRightIcon } from "lucide-react";

function CallToAction() {
  return (
    <div
      className="gap-10 justify-center items-center w-full 
    bg-gradient-to-br from-primary to-emerald-700 text-white
    px-15 py-12 grid grid-cols-1 lg:grid-cols-3 rounded-2xl"
    >
      <div className="col-span-2 flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold">
          Adventures Shared Today
        </h1>
        <p className="tex-lg opacity-75">
          Fresh reviews, travel tips, and camping tales shared by our members —
          explore their journeys and get inspired for your next adventure.
        </p>
      </div>

      <div className="col-span-1 flex justify-center items-center">
        <button className="px-10 py-3 font-bold text-xl lg:text-2xl rounded-xl border-2 border-emerald-500 flex gap-2 justify-center items-center w-full lg:w-auto hover:gap-3 hover:tracking-wider hover:scale-105 duration-300 hover:cursor-pointer hover:shadow-emerald-600/20 hover:shadow-xl">
          <span>Join Us</span>
          <MoveUpRightIcon className="opacity-50" />
        </button>
      </div>
    </div>
  );
}
export default CallToAction;
