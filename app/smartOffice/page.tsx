import Hero from '@/components/Hero';
import ImageTextButtonGrid from '@/components/ImageTextButtonGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Office Devices',
  description: 'Discover smart devices designed to enhance your productivity and office environment.',
  metadataBase: new URL('https://www.myawesomewebsite.com/'),
  openGraph: {
    title: 'Smart Office Devices',
    description: 'Discover smart devices designed to enhance your productivity and office environment.',
    images: ['/smartOffice.jpeg'],
    url: 'https://www.myawesomewebsite.com/smartOffice',
  }
};

const page = () => {
  const heroData = {
    title: 'Smart Office Devices',
    description: 'Boost your productivity with innovative smart office devices. Efficiency, comfort, and seamless connectivity.',
    imageSrc: '/home/smartOffice.jpeg',
    imageAlt: 'Smart Office Devices',
  };

  const cards = [
    { src: '/smartOffice/smartLighting.jpeg', alt: 'Smart Lighting', mainText: 'Smart Lighting', description: 'Boost productivity with smart desk lamps and ceiling lights for optimal illumination.', slug: 'smartLighting' },
    { src: '/smartOffice/smartSecurity.jpeg', alt: 'Smart Security', mainText: 'Smart Security', description: 'Secure your workspace with advanced smart cameras and locks for enhanced protection.', slug: 'smartSecurity' },
    { src: '/smartOffice/smartThermostats.jpeg', alt: 'Smart Thermostats', mainText: 'Smart Thermostats', description: 'Maintain a comfortable office with energy-efficient smart thermostats for consistent temperature.', slug: 'smartThermostats' },
    { src: '/smartOffice/smartProductivity.jpeg', alt: 'Smart Productivity Devices', mainText: 'Smart Productivity Devices', description: 'Increase efficiency with smart printers, desks, and voice assistants for streamlined work.', slug: 'smartProductivity' },
  ];

  return (
    <main className="bg-gray-900 text-white">
      <Hero {...heroData} />
      <ImageTextButtonGrid cards={cards} />
    </main>
  );
};

export default page;
