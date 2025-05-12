import Image from "next/image";

export default function More() {
  return (
    <section className="py-16 md:mb-16 -mt-[50px] flex flex-col md:flex-row items-center justify-between gap-16">
      {/* Left Side: Image */}
      <div className="w-full md:w-5/12 flex justify-center h-full">
        <div className="md:w-full min-w-[400px] min-h-[400px] relative rounded-lg shadow-lg overflow-hidden flex justify-center items-center">
          <Image
            src="/images/profile.jpeg"
            alt="About Me"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-7/12 text-center md:text-left relative">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
          A Passionate <br /> Software Developer
        </h2>

        {/* Description */}
        <p className="mb-6 text-sm md:text-base leading-relaxed max-w-3xl mx-auto md:mx-0">
          I’m Abdul Baset, a passionate Software Developer with expertise in
          Vue.js, Laravel, & modern web technologies. I specialize in building
          user-friendly applications that solve real-world problems. With a deep
          understanding of frontend development, state management, and API
          integration, I can bring your ideas to life.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#"
            className="font-semibold border border-primary py-2 px-4 rounded-lg hover:bg-tertiary/80 text-center text-primary"
          >
            See Projects
          </a>
          <a
            href="#"
            className="border border-primary bg-primary py-2 px-4 rounded-lg hover:bg-primary/90 duration-300 text-center text-white font-semibold"
          >
            More Details
          </a>
        </div>
      </div>
    </section>
  );
}
