import Hero from '@/components/Hero';
import ImageTextButtonGrid from '@/components/ImageTextButtonGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Security Devices',
  description: 'Discover smart security devices designed to protect your home and loved ones.',
  metadataBase: new URL('https://www.myawesomewebsite.com/'),
  openGraph: {
    title: 'Smart Security Devices',
    description: 'Discover smart security devices designed to protect your home and loved ones.',
    images: ['/smartSecurity.jpeg'],
    url: 'https://www.myawesomewebsite.com/smartSecurity',
  }
};

const page = () => {
  const heroData = {
    title: 'Smart Security Devices',
    description: 'Protect what matters most with smart security devices. Safety, reliability, and continuous monitoring.',
    imageSrc: '/smartSecurity.jpeg',
    imageAlt: 'Smart Security Devices',
  };

  const cards = [
    { src: '/smartSecurity/securityCameras.jpeg', alt: 'Security Cameras', mainText: 'Security Cameras', description: 'Monitor your property with high-quality indoor and outdoor cameras for complete surveillance.', slug: 'securityCameras' },
    { src: '/smartSecurity/smartLocks.jpeg', alt: 'Smart Locks', mainText: 'Smart Locks', description: 'Enhance security with advanced keypad and fingerprint locks for better home protection.', slug: 'smartLocks' },
    { src: '/smartSecurity/securitySystems.jpeg', alt: 'Security Systems', mainText: 'Security Systems', description: 'Safeguard your home with integrated smart security systems for comprehensive protection.', slug: 'securitySystems' },
    { src: '/smartSecurity/videoDoorbells.jpeg', alt: 'Video Doorbells', mainText: 'Video Doorbells', description: 'See and communicate with visitors using video doorbells for added convenience and safety.', slug: 'videoDoorbells' },
  ];

  return (
    <main className="bg-gray-900 text-white">
      <Hero {...heroData} />
      <ImageTextButtonGrid cards={cards} />
    </main>
  );
};

export default page;
