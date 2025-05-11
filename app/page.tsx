import { LoadingCardHero } from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";

const page = async ({
  searchParams,
}: {
  searchParams: { search?: string, category?: string  };
}) => {
  // search
  const { search, category } = await searchParams;
  console.log(search);

  return (
    <section>
      <Suspense fallback={<LoadingCardHero />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};
export default page;
