import ImageTextButtonCard from './ImageTextButtonCard';

interface Card {
  src: string;
  alt: string;
  mainText: string;
  description: string;
  slug: string;
}

interface ImageTextButtonGridProps {
  cards: Card[];
}

const ImageTextButtonGrid = ({ cards }: ImageTextButtonGridProps) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-28 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28 4xl:py-32">
      <h2 className="text-2xl pb-20 md:text-3xl lg:text-4xl font-bold text-center">
        Explore Different Categories of Smart Devices
      </h2>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {cards.map((card, index) => (
          <ImageTextButtonCard
            key={index}
            src={card.src}
            alt={card.alt}
            mainText={card.mainText}
            description={card.description}
            slug={card.slug}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageTextButtonGrid;
