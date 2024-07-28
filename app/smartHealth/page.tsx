import Hero from '@/components/Hero';
import ImageTextButtonGrid from '@/components/ImageTextButtonGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Health Devices',
  description: 'Discover advanced health devices designed to monitor and enhance your well-being.',
  metadataBase: new URL('https://www.myawesomewebsite.com/'),
  openGraph: {
    title: 'Smart Health Devices',
    description: 'Discover advanced health devices designed to monitor and enhance your well-being.',
    images: ['/smartHealth.jpeg'],
    url: 'https://www.myawesomewebsite.com/smartHealth',
  }
};

const page = () => {
  const heroData = {
    title: 'Smart Health Devices',
    description: 'Monitor and enhance your well-being with advanced smart health devices for accurate measurements and insights.',
    imageSrc: '/smartHealth.jpeg',
    imageAlt: 'Smart Health Devices',
  };

  const cards = [
    { src: '/smartHealth/healthMonitoringDevices.jpeg', alt: 'Health Monitoring Devices', mainText: 'Health Monitoring Devices', description: 'Keep track of your health with smart blood pressure and glucose monitors for accurate measurements.', slug: 'healthMonitoringDevices' },
    { src: '/smartHealth/fitnessDevices.jpeg', alt: 'Fitness Devices', mainText: 'Fitness Devices', description: 'Maintain your fitness with smart scales and activity trackers for a healthier and more active lifestyle.', slug: 'fitnessDevices' },
    { src: '/smartHealth/sleepDevices.jpeg', alt: 'Sleep Devices', mainText: 'Sleep Devices', description: 'Improve your sleep quality with advanced sleep trackers and smart mattresses for better rest.', slug: 'sleepDevices' },
    { src: '/smartHealth/airQualityMonitors.jpeg', alt: 'Air Quality Monitors', mainText: 'Air Quality Monitors', description: 'Ensure a healthy environment with smart indoor and wearable air quality monitors for cleaner air quality.', slug: 'airQualityMonitors' },
  ];

  return (
    <main className="bg-gray-900 text-white">
      <Hero {...heroData} />
      <ImageTextButtonGrid cards={cards} />
    </main>
  );
};

export default page;
