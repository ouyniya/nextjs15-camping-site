import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function More() {
  return (
    <section className="py-8 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-16">
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
        Traveler Bio <br />  About WanderShare <br /> 
        </h2>

        {/* Description */}
        <p className="mb-6 text-sm md:text-base leading-relaxed max-w-3xl mx-auto md:mx-0">
        {"WanderShare is a global travel community where adventurers, storytellers, and explorers come together to share real travel experiences. Whether you're a solo backpacker, a family planner, or just daydreaming about your next destination, WanderShare helps you discover new places through the eyes of real travelers — not polished ads."}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <div
            className="font-semibold border border-primary py-2 px-4 rounded-lg hover:bg-primary hover:text-white text-center text-primary hover:cursor-pointer duration-300"
          >
            <SignUpButton>Register</SignUpButton>
          </div>
          <a
            href="/search"
            className="border border-primary bg-primary py-2 px-4 rounded-lg hover:bg-primary/90 duration-300 text-center text-white font-semibold"
          >
            Find more
          </a>
        </div>
      </div>
    </section>
  );
}
