import { fetchLandmarkDetail } from "@/actions/actions";
import FavoriteToggleBtn from "@/components/card/FavoriteToggleBtn";
import BreadcrumbsForLandmark from "@/components/landmark/BreadcrumbsForLandmark";
import { redirect } from "next/navigation";

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const landmark = await fetchLandmarkDetail({ id });

  if (!landmark) {
    redirect("/");
  }

  return (
    <section>
      <BreadcrumbsForLandmark
        name={landmark.name}
        category={landmark.category}
      />
      <header className="flex justify-between mt-4 items-center">
        <h1 className="text-4xl capitalize">{landmark.name}</h1>
        <div className="flex gap-4 items-center">
          <span>share</span>
          <FavoriteToggleBtn landmarkId={landmark.id} />
        </div>
      </header>
    </section>
  );
};
export default LandmarkDetail;
