import Footer from '@/components/website/footer';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/website/navbar';

export const metadata: Metadata = {
  title: 'ICAST Schools — Preparing Students for a Changing World',
  description:
    'International College of Arts, Science and Technology, Elebu, Ibadan. Quality Creche, Nursery, Primary and Secondary education with day and boarding options.',
    icons: '/images/icast-favicon.png'
  // openGraph: {
  //   title: 'ICAST Schools — Preparing Students for a Changing World',
  //   description:
  //     'International College of Arts, Science and Technology, Elebu, Ibadan. Day and boarding education from Creche to Secondary.',
  //   images: [{ url: '/images/icast-students.png' }],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   images: [{ url: '/images/icast-students.png' }],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
