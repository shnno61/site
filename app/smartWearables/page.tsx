import Hero from '@/components/Hero';
import ImageTextButtonGrid from '@/components/ImageTextButtonGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Smart',
  description: 'Discover smart devices designed to enhance your everyday life.',
  metadataBase: new URL('https://www.myawesomewebsite.com/'),
  openGraph: {
    title: 'Smart Home',
    description: 'Discover smart devices designed to enhance your everyday life.',
    images: ['/smartHome.jpeg'],
    url: 'https://www.myawesomewebsite.com/smartHome',
  } 
};
 
const page = () => {
  const heroData = {
    title: 'Smart Wearables',
    description: 'Elevate your lifestyle with versatile smart wearables. From tracking fitness and health to enhancing daily activities, these devices blend functionality and style to keep you connected and informed.',
    imageSrc: '/smartWearables.jpeg',
    imageAlt: 'Smart Home',
  };

  const cards = [
    { src: '/smartHome.jpeg', alt: 'Smart Home', mainText: 'Smart Home', description: 'Revolutionize your living space with cutting-edge smart home devices...', slug: 'smartHome' },
    { src: '/smartOffice.jpeg', alt: 'Smart Office', mainText: 'Smart Office', description: 'Boost your productivity with state-of-the-art smart office devices...', slug: 'smartOffice' },
    { src: '/smartHealth.jpeg', alt: 'Smart Health', mainText: 'Smart Health', description: 'Take control of your well-being with innovative smart health devices...', slug: 'smartHealth' },
    { src: '/smartSecurity.jpeg', alt: 'Smart Security', mainText: 'Smart Security', description: 'Protect what matters most with advanced smart security devices...', slug: 'smartSecurity' },
    { src: '/smartWearables.jpeg', alt: 'Smart Wearables', mainText: 'Smart Wearables', description: 'Elevate your lifestyle with versatile smart wearables...', slug: 'smartWearables' },
  ];

  return (
    <main className="bg-gray-900 text-white">
      <Hero {...heroData} />
      <ImageTextButtonGrid cards={cards} />
    </main>
  );
};

export default page;
