import { Skeleton } from "@/components/ui/skeleton";

const LoadingCard = () => {
  return (
    <div>
      <SkeletonCardHero />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};
export default LoadingCard;

export const SkeletonCard = () => {
  return (
    <div>
      <Skeleton className="h-[300px] rounded-md mb-2" />
      <Skeleton className="h-3 w-3/4 rounded-md mb-2" />
      <Skeleton className="h-3 w-1/2 rounded-md mb-2" />
      <Skeleton className="h-3 w-1/4 rounded-md " />
    </div>
  );
};

export const SkeletonCardHero = () => {
  return (
    <div>
      <Skeleton className="w-full h-[600px] rounded-md mb-3" />
      <Skeleton className="h-25 w-full rounded-md mb-2" />
    </div>
  );
};
