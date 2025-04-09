import Image from "next/image";

const ImageContainer = ({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) => {
  return (
    <section>
      <div className="h-[300px] md:h-[500px] relative mt-8">
        <Image
          src={mainImage}
          alt={name}
          sizes="100vw"
          fill
          priority
          className="object-cover rounded-md"
        />
      </div>
      
    </section>
  );
};
export default ImageContainer;
