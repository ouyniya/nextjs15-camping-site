"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { MoveUpIcon } from "lucide-react";
import { useEffect, useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
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
              ref={ref}
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
      </motion.div>
    </div>
  );
}
export default About;
