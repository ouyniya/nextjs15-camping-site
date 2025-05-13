import { fetchLandmarks } from "@/actions/actions";
import CategoryList from "@/components/home/CategoryList";
import EmptyList from "@/components/home/EmptyList";
import Footer from "@/components/home/Footer";
import LandmarkList from "@/components/home/LandmarkList";
import SearchMenu from "@/components/Navbar/SearchMenu";
import { landmarkCardProps } from "@/utils/types";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    search: string;
    category: string;
    page?: string;
  }>;
};

const SearchPage = async ({ searchParams }: Props) => {
  const { search, category, page: pageStr } = await searchParams;
  const page = parseInt(pageStr || "1", 10);
  const itemsPerPage = 8;
  const skip = (page - 1) * itemsPerPage;

  const landmarks: landmarkCardProps[] = await fetchLandmarks({
    search,
    category,
    skip,
    take: itemsPerPage,
  });

  return (
    <>
      <div className="flex flex-col gap-12 md:flex-row md:gap-5 lg:gap-12 mt-10 xl:min-w-7xl justify-center">
        <div>
          <CategoryList />
        </div>

        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-3">
            <div className="flex flex-col gap-4 w-full mx-auto">
              <div className="flex flex-col gap-2 item">
                <p className="text-xl md:text-2xl font-bold">
                  Explore What Others Discovered
                </p>

                <p className="lg:text-base text-sm opacity-50">
                  Discover hidden gems, honest reviews, and inspiring moments
                </p>
              </div>
            </div>
            <div className="w-full">
              <SearchMenu />
            </div>
          </div>

          <div>
            {landmarks.length === 0 ? (
              <EmptyList />
            ) : (
              <>
                <LandmarkList landmarks={landmarks} />

                <div className="flex justify-center mt-8 lg:mt-16 gap-4">
                  {page > 1 && (
                    <Link
                      href={`?search=${search || ""}&category=${
                        category || ""
                      }&page=${page - 1}`}
                    >
                      <button className="px-4 py-2 border rounded hover:cursor-pointer hover:bg-primary hover:text-white duration-300">
                        Previous
                      </button>
                    </Link>
                  )}
                  {landmarks.length === itemsPerPage && (
                    <Link
                      href={`?search=${search || ""}&category=${
                        category || ""
                      }&page=${page + 1}`}
                    >
                      <button className="px-4 py-2 border rounded hover:cursor-pointer hover:bg-primary hover:text-white duration-300">
                        Next
                      </button>
                    </Link>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
