import { Skeleton } from "@/components/ui/skeleton";

export const LoadingCard = () => {
  return (
    <div>
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

export const LoadingCardHero = () => {
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
        <SkeletonCard />
      </div>
    </div>
  );
};

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


export const SkeletonCardLandmark = () => {
  return (
    <div>
      <Skeleton className="w-2/3 md:w-1/3 h-[20px] mb-3" />
      <Skeleton className="w-2/3 md:w-1/3 h-[65px] mb-3" />
      <Skeleton className="w-full h-[300px] md:h-[500px] rounded-md mb-3" />
      <Skeleton className="w-full h-[20px] mb-3" />
      <Skeleton className="w-full h-[20px] mb-3" />
      <Skeleton className="w-full h-[20px] mb-3" />
    </div>
  );
};
