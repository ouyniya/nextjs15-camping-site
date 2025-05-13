"use client";

import { Album, Map, Notebook, Signature } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView])

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      animate={mainControls}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div ref={ref} className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-28 px-8 mt-8 opacity-80">
          <div className="flex gap-28 justify-center md:justify-end">
            <div className="flex flex-col gap-2 justify-center items-center">
              <Signature className="size-[75px]" />
              <p className="font-bold md:text-xl text-lg text-center">
                Authentic Travel Stories
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <Notebook className="size-[75px]" />
              <p className="font-bold md:text-xl text-lg text-center">
                Insider Tips & Hidden Gems
              </p>
            </div>
          </div>

          <div className="flex gap-28 w-auto justify-center lg:justify-start">
            <div className="flex flex-col gap-4 justify-center items-center">
              <Album className="size-[75px]" />
              <p className="font-bold md:text-xl text-lg text-center">
                Photo Galleries
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <Map className="size-[75px]" />
              <p className="font-bold md:text-xl text-lg text-center">
                Interactive Travel Maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default WhyUs;
