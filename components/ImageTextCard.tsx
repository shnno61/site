import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

interface ImageTextCardProps {
  src: string;
  alt: string;
  mainText: string;
  hoverText: string;
  slug: string;
}

const ImageTextCard = ({ src, alt, mainText, hoverText, slug }: ImageTextCardProps) => {
  return (
    <div className="relative flex flex-col items-center mb-4 lg:mb-6 xl:mb-10 2xl:mb-12 3xl:mb-12 4xl:mb-10 group">
      <div className="relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 group-hover:opacity-100 w-full sm:w-[400px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] 3xl:w-[700px] 4xl:w-[800px] h-[200px] sm:h-[300px] md:h-[250px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] 3xl:h-[600px] 4xl:h-[700px]">
        <Image 
          src={src} 
          alt={alt} 
          layout="fill" 
          objectFit="cover" 
          priority 
          className="transition-opacity duration-300 group-hover:opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-40 text-white p-4 text-center">
          <h2 className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl 3xl:text-5xl font-bold mb-2 group-hover:hidden">{mainText}</h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 p-4 text-center">
          <h2 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl 3xl:text-5xl font-bold mb-2">{mainText}</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl mb-4">{hoverText}</p>
          <Link href={`/${slug}`} passHref>
            <Button 
              type="button" 
              title="Learn More" 
              ariaLabel={`Learn more about ${mainText}`}
              variant="btn_solid"
              className="transition-transform duration-300 transform hover:scale-105 px-3 py-1.5 sm:px-3 sm:py-2.5 md:px-3 md:py-1.5 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 2xl:px-6 2xl:py-3 3xl:px-8 3xl:py-4 4xl:px-10 4xl:py-5 text-xs sm:text-base md:text-sm lg:text-lg xl:text-base 2xl:text-lg 3xl:text-xl bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-900"

              
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageTextCard;
