import type { Metadata } from 'next';
import NewsEventsPage from './_components/news-event-page';


export const metadata: Metadata = {
  title: 'News & Events — ICAST Schools, Elebu Ibadan',
  description:
    'Stay updated with the latest news, announcements, achievements and upcoming events at ICAST Schools, Elebu, Ibadan.',
};

export default function NewsRoute() {
  return <NewsEventsPage />;
}