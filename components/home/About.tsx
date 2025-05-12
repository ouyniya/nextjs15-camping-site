import { MoveUpIcon } from "lucide-react";

function About() {
  return (
    <div>
      <section id="comparison" className="mt-16 py-10 sm:py-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight font-semibold sm:text-4xl">
              Sharing real travel stories from every corner
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-gray-300">
              Discover hidden gems, honest reviews, and inspiring moments from
              nature trails, campsites, and travel destinations — all seen
              through the eyes of real travelers and our lens.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl p-6 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-5xl font-bold tracking-tight ">
                        2,450+
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display  flex gap-2 items-center justify-center">
                        Hidden Gems Found
                        <MoveUpIcon className="size-5 stroke-primary" />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl p-6 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-5xl font-bold tracking-tight ">
                        8,720+
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display flex gap-2 items-center justify-center">
                        Honest Reviews
                        <MoveUpIcon className="size-5 stroke-primary" />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl p-6 text-center shadow-xl shadow-slate-900/10">
                    <blockquote className="relative p-3">
                      <p className="text-5xl font-bold tracking-tight ">
                        4,300+
                      </p>
                    </blockquote>
                    <figcaption className="text-center">
                      <div className="font-display  flex gap-2 items-center justify-center">
                        Campers Joined
                        <MoveUpIcon className="size-5 stroke-primary" />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default About;
