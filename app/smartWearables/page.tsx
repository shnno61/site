import Hero from '@/components/Hero';
import ImageTextButtonGrid from '@/components/ImageTextButtonGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Wearables',
  description: 'Explore the latest in wearable technology designed to enhance your lifestyle and health.',
  metadataBase: new URL('https://www.myawesomewebsite.com/'),
  openGraph: {
    title: 'Smart Wearables',
    description: 'Explore the latest in wearable technology designed to enhance your lifestyle and health.',
    images: ['/smartWearables.jpeg'],
    url: 'https://www.myawesomewebsite.com/smartWearables',
  }
};

const page = () => {
  const heroData = {
    title: 'Smart Wearables',
    description: 'Discover innovative wearable devices that combine technology with style for a modern, connected lifestyle.',
    imageSrc: '/smartWearables.jpeg',
    imageAlt: 'Smart Wearables',
  };

  const cards = [
    { src: '/smartWearables/smartWatches.jpeg', alt: 'Smart Watches', mainText: 'Smart Watches', description: 'Track fitness and stay connected with versatile smart watches for a modern lifestyle...', slug: 'smartWatches' },
    { src: '/smartWearables/smartGlasses.jpeg', alt: 'Smart Glasses', mainText: 'Smart Glasses', description: 'Experience augmented reality and smart functionalities with cutting-edge smart glasses for everyday use.', slug: 'smartGlasses' },
    { src: '/smartWearables/smartRings.jpeg', alt: 'Smart Rings', mainText: 'Smart Rings', description: 'Utilize wearable technology for health monitoring and contactless payments with innovative smart rings.', slug: 'smartRings' },
  ];

  return (
    <main className="bg-gray-900 text-white">
      <Hero {...heroData} />
      <ImageTextButtonGrid cards={cards} />
    </main>
  );
};

export default page;
