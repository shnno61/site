import Hero from '@/components/Hero';
import ImageTextButtonGrid from '@/components/ImageTextButtonGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Home Devices',
  description: 'Discover smart devices designed to enhance your everyday life.',
  metadataBase: new URL('https://www.myawesomewebsite.com/'),
  openGraph: {
    title: 'Smart Home Devices',
    description: 'Discover smart devices designed to enhance your everyday life.',
    images: ['/smartHome.jpeg'],
    url: 'https://www.myawesomewebsite.com/smartHome',
  }
};

const page = () => {
  const heroData = {
    title: 'Smart Home Devices',
    description: 'Revolutionize your living space with cutting-edge smart home devices. Transform everyday living into a seamless, futuristic experience where comfort, convenience, and security are always at your fingertips.',
    imageSrc: '/home/smartHome.jpeg',
    imageAlt: 'Smart Home Devices',
  };

  const cards = [
    { src: '/smartHome/smartLighting.jpeg', alt: 'Smart Lighting', mainText: 'Smart Lighting', description: 'Illuminate your home with intelligent lighting solutions for control and ambiance...', slug: 'smartLighting' },
    { src: '/smartHome/smartHomeSecurity.jpeg', alt: 'Smart Security', mainText: 'Smart Security', description: 'Protect your home with advanced security cameras, smart locks, and video doorbells..', slug: 'smartSecurity' },
    { src: '/smartHome/smartThermostats.jpeg', alt: 'Smart Thermostats', mainText: 'Smart Thermostats', description: 'Optimize your home\'s climate with pretty, intelligent, energy-efficient thermostats...', slug: 'smartThermostats' },
    { src: '/smartHome/smartKitchen.jpeg', alt: 'Smart Kitchen Appliances', mainText: 'Smart Kitchen Appliances', description: 'Upgrade your kitchen with smart refrigerators, ovens, coffee makers, and dishwashers.', slug: 'smartKitchen' },
    { src: '/smartHome/smartEntertainment.jpeg', alt: 'Smart Home Entertainment', mainText: 'Smart Home Entertainment', description: 'Enhance entertainment with smart TVs, speakers, soundbars, projectors, and lamps.', slug: 'smartEntertainment' },
    { src: '/smartHome/smartCleaning.jpeg', alt: 'Smart Cleaning Devices', mainText: 'Smart Cleaning Devices', description: 'Keep your home clean with robot vacuums, smart mops, and air purifiers for easy maintenance.', slug: 'smartCleaning' },
    { src: '/smartHome/smartGarden.jpeg', alt: 'Smart Garden and Outdoor Devices', mainText: 'Smart Garden and Outdoor Devices', description: 'Manage your outdoor space with smart irrigation, efficient lighting, and sensors......', slug: 'smartGarden' },
  ];
 
  return (
    <main className="bg-gray-900 text-white">
      <Hero {...heroData} />
      <ImageTextButtonGrid cards={cards} />
    </main>
  );
};

export default page;
