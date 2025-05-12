import { LoadingCardHero } from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";

const page = async () => {
  return (
    <section>
      <Suspense fallback={<LoadingCardHero />}>
        <LandmarkContainer />
      </Suspense>
    </section>
  );
};
export default page;
