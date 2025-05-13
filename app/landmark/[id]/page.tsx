import { fetchLandmarkDetail } from "@/actions/actions";
import MapClientWrapper from "@/app/camp/create/MapClientWrapper";
import FavoriteToggleBtn from "@/components/card/FavoriteToggleBtn";
import BreadcrumbsForLandmark from "@/components/landmark/BreadcrumbsForLandmark";
import DescriptionLandmark from "@/components/landmark/DescriptionLandmark";
import ImageContainer from "@/components/landmark/ImageContainer";
import ShareBtn from "@/components/landmark/ShareBtn";
import { redirect } from "next/navigation";

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
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
        <div className="flex gap-2 items-center">
          <ShareBtn landmarkId={landmark.id} name={landmark.name} />
          <FavoriteToggleBtn landmarkId={landmark.id} />
        </div>
      </header>

      {/* image */}
      <ImageContainer mainImage={landmark.image} name={landmark.name} />
      {/* detail */}
      <section>
        <div>
          <DescriptionLandmark description={landmark.description} />
          <MapClientWrapper location={{ lat: landmark.lat, lng: landmark.lng }} />
        </div>
      </section>
    </section>
  );
};
export default LandmarkDetail;
