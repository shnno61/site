import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero = ({ title, description, imageSrc, imageAlt }: HeroProps) => (
  <section className="relative padding-container flex flex-col gap-6 py-10 md:gap-10 lg:py-20 xl:flex-row xl:gap-10 2xl:py-28 3xl:py-32 4xl:py-40 text-white">
    <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    <div className="relative z-10 flex flex-1 flex-col order-1 xl:order-1 xl:w-1/2 items-center xl:items-start">
      <div className="px-4 py-8 mx-auto max-w-screen-lg xl:max-w-full 2xl:px-16 2xl:py-12 3xl:px-24 3xl:py-16 4xl:px-32 4xl:py-20">
        <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl lg:leading-tight mb-4 drop-shadow-md 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
          {title}
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 drop-shadow-sm 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
          {description}
        </p>
      </div>
      <div className="relative rounded-3x1 mb-8 xl:hidden w-full max-w-md md:max-w-lg lg:max-w-md xl:mx-2 2xl:mx-4 3xl:mx-6 4xl:mx-8">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={400}
          layout="responsive"
          className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
          priority
        />
      </div>
    </div>
    <div className="relative w-full order-2 xl:order-2 xl:w-1/2 hidden xl:block xl:ml-8 2xl:ml-12 3xl:mx-16 4xl:mx-20">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={400}
          layout="responsive"
          className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
          priority
        />
      </div>
    </div>
  </section>
);

export default Hero;
