import Hero from '@/components/Hero';
import ImageTextGrid from '@/components/ImageTextGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my awesome website. Discover smart devices designed to enhance your everyday life.',
  metadataBase: new URL('https://www.myawesomewebsite.com/'),
  openGraph: {
    title: 'Home',
    description: 'Welcome to my awesome website. Discover smart devices designed to enhance your everyday life.',
    images: ['/og-image.jpg'],
    url: 'https://www.myawesomewebsite.com/',
  },
};

const heroData = {
  title: 'Unlock Smart Living',
  description: 'Experience a new level of convenience with smart devices that transform your daily life...',
  imageSrc: '/smartHome.jpeg',
  imageAlt: 'Smart Life',
};

const cardsData = [
  { src: '/smartHome.jpeg', alt: 'smartHome', mainText: 'Smart Home', hoverText: 'Revolutionize your living space with cutting-edge smart home devices...', slug: 'smartHome' },
  { src: '/smartOffice.jpeg', alt: 'smartOffice', mainText: 'Smart Office', hoverText: 'Boost your productivity with state-of-the-art smart office devices...', slug: 'smartOffice' },
  { src: '/smartHealth.jpeg', alt: 'smartHealth', mainText: 'Smart Health', hoverText: 'Take control of your well-being with innovative smart health devices...', slug: 'smartHealth' },
  { src: '/smartSecurity.jpeg', alt: 'smartSecurity', mainText: 'Smart Security', hoverText: 'Protect what matters most with advanced smart security devices...', slug: 'smartSecurity' },
  { src: '/smartWearables.jpeg', alt: 'smartWearables', mainText: 'Smart Wearables', hoverText: 'Elevate your lifestyle with versatile smart wearables...', slug: 'smartWearables' },
];

export default function Page() {
  return (
    <main className="bg-gray-900 text-white">
      <Hero {...heroData} />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <ImageTextGrid cards={cardsData} />
      </div>
    </main>
  );
}
