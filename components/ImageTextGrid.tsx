import ImageTextCard from './ImageTextCard';

interface Card {
  src: string;
  alt: string;
  mainText: string;
  hoverText: string;
  slug: string;
}

interface ImageTextGridProps {
  cards: Card[];
}

const ImageTextGrid = ({ cards }: ImageTextGridProps) => {
  return (
    <>
      <h2 className="text-2xl py-8 md:text-3xl lg:text-4xl font-bold text-center">
        Explore Different Categories of Smart Devices
      </h2>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 4xl:gap-1">
        {cards.slice(0, 4).map((card, index) => (
          <div key={index} className="col-span-1 px-2 md:px-4 4xl:px-2">
            <ImageTextCard 
              src={card.src} 
              alt={card.alt} 
              mainText={card.mainText} 
              hoverText={card.hoverText} 
              slug={card.slug} 
            />
          </div>
        ))}
        <div className="col-span-1 flex justify-center px-2 md:px-4 2xl:px-1 4xl:px-4">
          <ImageTextCard 
            src={cards[4].src} 
            alt={cards[4].alt} 
            mainText={cards[4].mainText} 
            hoverText={cards[4].hoverText} 
            slug={cards[4].slug} 
          />
        </div>
      </div>
    </>
  );
};

export default ImageTextGrid;
