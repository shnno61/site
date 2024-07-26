import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

interface ImageTextButtonCardProps {
  src: string;
  alt: string;
  mainText: string;
  description: string;
  slug: string;
  index: number;
}

const ImageTextButtonCard = ({ src, alt, mainText, description, slug, index }: ImageTextButtonCardProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
      bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-200 
      transition-transform transform hover:scale-105 mx-auto max-w-screen-xl 
      hover:bg-yellow-700`}>
      <div className={`relative w-full ${isReversed ? 'lg:ml-8' : 'lg:mr-8'} p-2`}>
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-72 2xl:h-80 overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className={`w-full ${isReversed ? 'lg:ml-8' : 'lg:mr-8'} p-4 flex flex-col justify-center items-center lg:items-start`}>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-4 text-gray-100 text-center lg:text-left">{mainText}</h2>
        <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-300 mb-6 leading-relaxed text-center lg:text-left">{description}</p>
        <div className="flex justify-center w-full">
          <Link href={`/${slug}`} passHref>
            <Button
              type="button"
              title="Learn More"
              ariaLabel={`Learn more about ${mainText}`}
              variant="btn_solid"
              className="transition-transform duration-300 transform hover:scale-105 px-3 py-2 sm:px-3 sm:py-2.5 md:px-3 md:py-1.5 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 2xl:px-6 2xl:py-3 3xl:px-8 3xl:py-4 4xl:px-10 4xl:py-5 text-xs sm:text-base md:text-sm lg:text-lg xl:text-base 2xl:text-lg 3xl:text-xl bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-900"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageTextButtonCard;
