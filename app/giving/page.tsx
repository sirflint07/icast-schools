import type { Metadata } from 'next';
import GivingPage from '../giving/_components/giving-page';

export const metadata: Metadata = {
  title: 'Giving — ICAST Schools, Elebu Ibadan',
  description:
    'Support ICAST Schools through donations, sponsorships and contributions. Help us shape the future by providing better learning opportunities, facilities and resources for our students.',
};

export default function GivingRoute() {
  return <GivingPage />;
}