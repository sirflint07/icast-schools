import type { Metadata } from 'next';
import AboutHero from './about-hero';

export const metadata: Metadata = {
  title: 'About ICAST Schools — Our Story, People & Facilities',
  description:
    'Learn about ICAST Schools, Elebu Ibadan — our mission, vision, leadership, facilities and approach to developing students from Creche through Secondary.',
};

export default function AboutPage() {
  return <AboutHero />;
}