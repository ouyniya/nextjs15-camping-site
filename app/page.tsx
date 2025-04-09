import LoadingCard from "@/components/card/LoadingCard";
import CategoryList from "@/components/home/CategoryList";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Button } from "@/components/ui/button";
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
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};
export default page;
