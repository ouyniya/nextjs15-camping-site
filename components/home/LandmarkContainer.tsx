import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { landmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
// import CategoryList from "./CategoryList";
import EmptyList from "./EmptyList";
import SearchMenu from "../Navbar/SearchMenu";
import Footer from "./Footer";
import RotatingText from "./Hero";
import About from "./About";
import CallToAction from "./CallToAction";


const LandmarkContainer = async () => {
  const landmarks: landmarkCardProps[] = await fetchLandmarks({});

  let finalLandmark: landmarkCardProps[];
  if (landmarks.length > 8) {
    finalLandmark = landmarks.splice(0, landmarks.length - 10);
  } else {
    finalLandmark = landmarks;
  }

  const landmarksHero: landmarkCardProps[] = await fetchLandmarksHero();

  return (
    <div>

      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center min-h-[350px]">
        <div className="absolute inset-0 bg-opacity-50"></div>

        <div className="w-full flex flex-col relative container px-4 text-center mx-auto mb-6">
          <div className="flex justify-center items-center">
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl flex gap-2 items-center"
              style={{ lineHeight: "1.2" }}
            >
              {"Travel is "}{" "}
              <span className="relative flex whitespace-nowrap text-primary">
                <span>
                  <RotatingText
                    texts={["Fun", "Dreamy", "Chill", "Magical"]}
                    mainClassName="px-2 sm:px-2 md:px-5 bg-primary text-white font-bold py-2 sm:py-2 md:py-2 justify-center rounded-xl"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
              </span>
            </h1>
          </div>

          <p className="mx-auto mt-4 mb-8 max-w-2xl text-lg">
            Real stories, honest reviews, and hidden gems from trails,
            campsites, and beyond.
          </p>

          <div className="flex justify-center items-center">
            <SearchMenu />
          </div>
        </div>
      </section>

      {/* Landmark */}
      {/* <Hero landmarks={landmarksHero} /> */}

      {/* <CategoryList searchParams={searchParams} /> */}
      <div className="mt-16">
        <div className="mx-auto max-w-3xl md:text-center py-10 pb-5">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Latest Stories from Our Community
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-gray-300">
            Fresh reviews, travel tips, and camping tales shared by our members
            — explore their journeys and get inspired for your next adventure.
          </p>
        </div>
        {landmarks.length === 0 ? (
          <EmptyList />
        ) : (
          // <LandmarkList landmarks={finalLandmark} />
          "test"
        )}
      </div>

      {/* About */}
      <About />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default LandmarkContainer;
