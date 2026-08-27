export type NewsCategory =
  | 'School News'
  | 'Academic'
  | 'Announcements'
  | 'Student Achievement'
  | 'Technology'
  | 'Sports'
  | 'Arts & Culture'
  | 'Community';

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  author: string;
  image: string;
  content: string;
  featured: boolean;
}

export const newsCategories: ('All' | NewsCategory)[] = [
  'All',
  'School News',
  'Academic',
  'Announcements',
  'Student Achievement',
  'Technology',
  'Sports',
  'Arts & Culture',
];

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'ICAST Students Shine at the 2024 Oyo State Science & Technology Fair',
    slug: 'students-shine-state-science-fair-2024',
    excerpt:
      'Our Secondary students brought home two awards from this year\u2019s Oyo State Science & Technology Fair, impressing judges with their robotics project and renewable energy demonstration.',
    category: 'Student Achievement',
    date: '2024-07-18',
    author: 'ICAST Communications',
    image: 'https://images.pexels.com/photos/7869079/pexels-photo-7869079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content:
      'A team of six ICAST Secondary students participated in the 2024 Oyo State Science & Technology Fair, securing awards in two categories. Their robotics project, which demonstrated automated sorting using sensors, and a renewable energy model showcasing solar-powered water purification, earned praise from the judging panel. The event brought together schools from across the state, and our students represented ICAST with distinction.',
    featured: true,
  },
  {
    id: '2',
    title: 'ICAST Introduces New Digital Literacy Programme for Primary Classes',
    slug: 'new-digital-literacy-programme-primary',
    excerpt:
      'Starting this term, all Primary 1\u20135 students will participate in a structured digital literacy programme designed to build foundational computing and internet safety skills.',
    category: 'Technology',
    date: '2024-09-02',
    author: 'Academic Office',
    image: 'https://images.pexels.com/photos/11025019/pexels-photo-11025019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content:
      'ICAST is proud to announce a new digital literacy programme rolling out across all Primary classes this term. The curriculum covers foundational computing skills, responsible internet use, basic coding concepts and digital creativity. The programme is delivered in our ICT hub and integrates with existing subjects to reinforce cross-curricular learning.',
    featured: false,
  },
  {
    id: '3',
    title: 'Inter-House Athletics Competition: Red House Claims Victory',
    slug: 'inter-house-athletics-red-house-victory',
    excerpt:
      'After a thrilling day of track and field events, Red House emerged as champions of this year\u2019s inter-house athletics competition, with standout performances across all age groups.',
    category: 'Sports',
    date: '2024-06-28',
    author: 'Sports Department',
    image: 'https://images.pexels.com/photos/9714143/pexels-photo-9714143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content:
      'The annual inter-house athletics competition brought the entire school together for a day of spirited competition. Red House claimed the overall title, with notable performances in the 100m, relay and long jump events. Blue House and Gold House finished closely behind, making it one of the most competitive years in recent memory.',
    featured: false,
  },
  {
    id: '4',
    title: 'Annual Cultural Day Celebrates Nigeria\u2019s Diversity',
    slug: 'annual-cultural-day-celebrates-diversity',
    excerpt:
      'Students from Creche to Secondary showcased traditional attire, food, music and dance from across Nigeria\u2019s rich cultural landscape at this year\u2019s vibrant Cultural Day.',
    category: 'Arts & Culture',
    date: '2024-05-15',
    author: 'ICAST Communications',
    image: 'https://images.pexels.com/photos/12619584/pexels-photo-12619584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content:
      'ICAST\u2019s annual Cultural Day was a colourful celebration of Nigeria\u2019s diversity. Students represented various ethnic groups through traditional attire, cuisine, music and dance performances. The event was attended by parents, guardians and community members, and featured showcases from the Yoruba, Igbo, Hausa and other cultural groups represented within our school community.',
    featured: false,
  },
  {
    id: '5',
    title: '2024/2025 Academic Session Begins September 9',
    slug: '2024-2025-academic-session-begins',
    excerpt:
      'All returning and new students are expected to resume for the 2024/2025 academic session on Monday, 9 September. Parents should review the updated resumption guidelines.',
    category: 'Announcements',
    date: '2024-08-20',
    author: 'School Administration',
    image: 'https://images.pexels.com/photos/8926848/pexels-photo-8926848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content:
      'The 2024/2025 academic session officially begins on Monday, 9 September 2024. All returning students should arrive by 8:00 AM in full school uniform. New students and their parents are invited to an orientation session on Friday, 6 September at 10:00 AM. Please contact the school office for the complete resumption guidelines and any required materials.',
    featured: false,
  },
  {
    id: '6',
    title: 'ICAST Debating Team Reaches State Quarter-Finals',
    slug: 'debating-team-state-quarter-finals',
    excerpt:
      'Our Secondary debating team advanced to the quarter-finals of the Oyo State Inter-School Debate Championship, showcasing sharp reasoning and confident delivery.',
    category: 'Academic',
    date: '2024-07-05',
    author: 'Academic Office',
    image: 'https://images.pexels.com/photos/32293359/pexels-photo-32293359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content:
      'The ICAST debating team has progressed to the quarter-finals of the Oyo State Inter-School Debate Championship. Facing schools from across the state, our debaters demonstrated strong argumentation, quick thinking and confident public speaking. The quarter-final round is scheduled for next month, and we wish our team the very best.',
    featured: false,
  },
  {
    id: '7',
    title: 'Parent-Teacher Association Meeting Scheduled for August 24',
    slug: 'pta-meeting-august-24',
    excerpt:
      'All parents and guardians are invited to the next PTA meeting on Saturday, 24 August at 11:00 AM in the school hall. Agenda items include the new academic session and school development updates.',
    category: 'Announcements',
    date: '2024-08-10',
    author: 'School Administration',
    image: 'https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content:
      'The next Parent-Teacher Association meeting will take place on Saturday, 24 August 2024 at 11:00 AM in the ICAST school hall. Key agenda items include preparations for the 2024/2025 academic session, updates on school development projects, and an open forum for parent feedback. All parents and guardians are strongly encouraged to attend.',
    featured: false,
  },
  {
    id: '8',
    title: 'Community Outreach: ICAST Students Visit Local Care Home',
    slug: 'community-outreach-care-home-visit',
    excerpt:
      'As part of our character development programme, a group of Secondary students spent a day volunteering at a local care home, spending time with elderly residents.',
    category: 'Community',
    date: '2024-06-12',
    author: 'ICAST Communications',
    image: 'https://images.pexels.com/photos/5905924/pexels-photo-5905924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content:
      'A group of our Secondary students recently visited a local care home as part of ICAST\u2019s character development and community service programme. Students spent time chatting with elderly residents, helping with small tasks and presenting a short musical performance. The visit reinforced our commitment to developing compassionate, socially aware young people.',
    featured: false,
  },
  {
    id: '9',
    title: 'New School Library Expansion Project Underway',
    slug: 'library-expansion-project-underway',
    excerpt:
      'Construction has begun on the expansion of our school library, which will double the reading space and add a dedicated digital research area for Secondary students.',
    category: 'School News',
    date: '2024-08-01',
    author: 'School Administration',
    image: 'https://images.pexels.com/photos/16086326/pexels-photo-16086326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content:
      'We are pleased to share that construction has begun on the expansion of the ICAST school library. The project will double the existing reading space, add a dedicated digital research area equipped with computers for Secondary students, and increase our book collection capacity. The expanded library is expected to be ready by the start of the next academic year.',
    featured: false,
  },
];

export type EventCategory =
  | 'PTA'
  | 'Sports'
  | 'Cultural'
  | 'Academic'
  | 'Ceremony'
  | 'Exhibition'
  | 'Excursion'
  | 'Open Day';

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  description: string;
  image?: string;
}

export const upcomingEvents: SchoolEvent[] = [
  {
    id: 'e1',
    title: 'Parent-Teacher Association Meeting',
    date: '2024-08-24',
    time: '11:00 AM',
    location: 'School Hall, Elebu Campus',
    category: 'PTA',
    description: 'All parents and guardians are invited to discuss the new academic session and school development updates.',
  },
  {
    id: 'e2',
    title: 'Inter-House Sports Day',
    date: '2024-09-12',
    time: '9:00 AM',
    location: 'School Sports Field',
    category: 'Sports',
    description: 'A full day of track and field events as our four houses compete for the annual athletics trophy.',
  },
  {
    id: 'e3',
    title: 'Open Day for Prospective Parents',
    date: '2024-09-20',
    time: '10:00 AM',
    location: 'Elebu Campus',
    category: 'Open Day',
    description: 'Prospective parents and guardians are invited to tour our facilities, meet staff and learn about admissions.',
  },
  {
    id: 'e4',
    title: 'Cultural Day Celebration',
    date: '2024-10-05',
    time: '12:00 PM',
    location: 'School Hall, Elebu Campus',
    category: 'Cultural',
    description: 'A vibrant celebration of Nigeria\u2019s cultural diversity through attire, food, music and student performances.',
  },
  {
    id: 'e5',
    title: 'Science & Technology Exhibition',
    date: '2024-10-18',
    time: '1:00 PM',
    location: 'ICT Hub & Laboratories',
    category: 'Exhibition',
    description: 'Secondary and Primary students showcase STEM projects, robotics and innovative experiments to parents and guests.',
  },
  {
    id: 'e6',
    title: 'Prize Giving Day',
    date: '2024-11-22',
    time: '10:00 AM',
    location: 'School Hall, Elebu Campus',
    category: 'Ceremony',
    description: 'Recognising academic excellence, character and achievements across all classes for the term.',
  },
  {
    id: 'e7',
    title: 'Graduation Ceremony',
    date: '2024-12-14',
    time: '11:00 AM',
    location: 'School Hall, Elebu Campus',
    category: 'Ceremony',
    description: 'Celebrating the achievements of our SS3 and Primary 6 graduating students as they move to their next chapter.',
  },
  {
    id: 'e8',
    title: 'School Excursion to Agodi Gardens',
    date: '2024-11-08',
    time: '8:30 AM',
    location: 'Agodi Gardens, Ibadan',
    category: 'Excursion',
    description: 'Primary 4\u20136 students will visit Agodi Gardens for an educational and recreational excursion.',
  },
];

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

export const achievements: Achievement[] = [
  {
    id: 'a1',
    title: 'Oyo State Science Fair Winners',
    description: 'Two awards secured at the state science and technology fair for robotics and renewable energy projects.',
    category: 'Science & Technology',
    date: 'July 2024',
    image: 'https://images.pexels.com/photos/7868834/pexels-photo-7868834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'a2',
    title: 'Debate Championship Quarter-Finalists',
    description: 'Our Secondary debating team reached the quarter-finals of the Oyo State Inter-School Debate Championship.',
    category: 'Debate',
    date: 'July 2024',
    image: 'https://images.pexels.com/photos/32293359/pexels-photo-32293359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'a3',
    title: 'Inter-House Athletics Champions',
    description: 'A thrilling athletics competition showcasing sportsmanship and talent across all age groups.',
    category: 'Sports',
    date: 'June 2024',
    image: 'https://images.pexels.com/photos/30865266/pexels-photo-30865266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'a4',
    title: 'Cultural Day Excellence',
    description: 'Students delivered outstanding performances celebrating Nigeria\u2019s rich cultural heritage.',
    category: 'Arts & Culture',
    date: 'May 2024',
    image: 'https://images.pexels.com/photos/11834932/pexels-photo-11834932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface StudentSpotlight {
  id: string;
  name: string;
  className: string;
  achievement: string;
  description: string;
  image: string;
}

export const studentSpotlights: StudentSpotlight[] = [
  {
    id: 's1',
    name: 'Emmanuel Okafor',
    className: 'SS3 Science',
    achievement: 'State Science Fair Award Winner',
    description: 'Emmanuel led the robotics team that won first place at the Oyo State Science & Technology Fair. He is also an active member of the debating club and serves as Head Boy.',
    image: 'https://images.pexels.com/photos/31503252/pexels-photo-31503252.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 's2',
    name: 'Zainab Adetola',
    className: 'SS3 Arts',
    achievement: 'Best Performing Student in Arts & Humanities',
    description: 'Zainab consistently achieves top marks across her arts and humanities subjects. She is a gifted public speaker and serves as Head Girl, where she leads student initiatives with grace and purpose.',
    image: 'https://images.pexels.com/photos/30999375/pexels-photo-30999375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 's3',
    name: 'David Adeleke',
    className: 'JSS2',
    achievement: 'Outstanding Performance in Mathematics',
    description: 'David represented ICAST at a regional mathematics competition and placed among the top performers. His teachers describe him as a curious, dedicated student with a natural aptitude for problem-solving.',
    image: 'https://images.pexels.com/photos/30649806/pexels-photo-30649806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface GalleryImage {
  src: string;
  title: string;
  span?: 'wide' | 'tall';
}

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/5905554/pexels-photo-5905554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'Classroom Learning', span: 'wide' },
  { src: 'https://images.pexels.com/photos/9714143/pexels-photo-9714143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'Inter-House Sports' },
  { src: 'https://images.pexels.com/photos/12619584/pexels-photo-12619584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'Cultural Day', span: 'tall' },
  { src: 'https://images.pexels.com/photos/8617836/pexels-photo-8617836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'Science Laboratory' },
  { src: 'https://images.pexels.com/photos/11025019/pexels-photo-11025019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'ICT & Digital Learning' },
  { src: 'https://images.pexels.com/photos/10604063/pexels-photo-10604063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'Graduation Ceremony', span: 'wide' },
  { src: 'https://images.pexels.com/photos/7869079/pexels-photo-7869079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'Robotics Project' },
  { src: 'https://images.pexels.com/photos/5905924/pexels-photo-5905924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'Community Outreach' },
];

export const heroImage = 'https://images.pexels.com/photos/14554003/pexels-photo-14554003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
