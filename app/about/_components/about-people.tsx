import {
  GraduationCap,
  BookOpen,
  Cpu,
  Trophy,
  Building2,
  Palette,
  Users,
  Shield,
  Dumbbell,
  Sparkles,
  HandHeart,
  type LucideIcon,
} from 'lucide-react';

export type FacilityCategory = 'academic' | 'science' | 'sports' | 'boarding';

export interface Facility {
  name: string;
  category: FacilityCategory;
  image: string;
  span?: 'wide' | 'tall' | 'normal';
}

export const facilities: Facility[] = [
  { name: 'School Field', category: 'academic', span: 'wide', image: 'https://images.pexels.com/photos/36393288/pexels-photo-36393288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Classrooms', category: 'academic', image: 'https://images.pexels.com/photos/8617940/pexels-photo-8617940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Physics Laboratory', category: 'science', image: 'https://images.pexels.com/photos/19393164/pexels-photo-19393164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Chemistry Laboratory', category: 'science', span: 'tall', image: 'https://images.pexels.com/photos/29210065/pexels-photo-29210065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Biology Laboratory', category: 'science', image: 'https://images.pexels.com/photos/8617836/pexels-photo-8617836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Computer / IT Hub', category: 'science', image: 'https://images.pexels.com/photos/11025019/pexels-photo-11025019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'School Hall', category: 'academic', image: 'https://images.pexels.com/photos/8926848/pexels-photo-8926848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'School Hostels', category: 'boarding', span: 'wide', image: 'https://images.pexels.com/photos/16086326/pexels-photo-16086326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Basketball Court', category: 'sports', image: 'https://images.pexels.com/photos/30747154/pexels-photo-30747154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Tennis Court', category: 'sports', image: 'https://images.pexels.com/photos/917503/pexels-photo-917503.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Table Tennis Area', category: 'sports', image: 'https://images.pexels.com/photos/4931355/pexels-photo-4931355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Badminton', category: 'sports', span: 'tall', image: 'https://images.pexels.com/photos/36034890/pexels-photo-36034890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Volleyball', category: 'sports', image: 'https://images.pexels.com/photos/35984242/pexels-photo-35984242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export interface Person {
  name: string;
  role: string;
  bio: string;
  image: string;
  tier: 'leadership' | 'staff' | 'student';
}

export const people: Person[] = [
  { name: 'Mr. Samuel Olawale', role: 'Principal', bio: 'A seasoned educator with over two decades of experience leading secondary education, committed to academic rigour and student character formation.', image: 'https://images.pexels.com/photos/8617942/pexels-photo-8617942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tier: 'leadership' },
  { name: 'Mrs. Funmilayo Adeyemi', role: 'Vice Principal', bio: 'Leads curriculum development and academic standards, ensuring every classroom meets the expectations of 21st-century education.', image: 'https://images.pexels.com/photos/5905898/pexels-photo-5905898.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tier: 'leadership' },
  { name: 'Mr. Daniel Okonkwo', role: 'Headmaster', bio: 'Oversees the primary and nursery sections, bringing warmth and structure to every child\'s earliest school experience.', image: 'https://images.pexels.com/photos/27670041/pexels-photo-27670041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tier: 'staff' },
  { name: 'Mrs. Grace Eze', role: 'Head of Teachers', bio: 'Mentors teaching staff and drives continuous professional development across all academic departments.', image: 'https://images.pexels.com/photos/8423069/pexels-photo-8423069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tier: 'staff' },
  { name: 'Mr. Chidi Okoro', role: 'Accountant', bio: 'Manages the school\'s financial operations with transparency and care, supporting the institution\'s long-term stability.', image: 'https://images.pexels.com/photos/19579914/pexels-photo-19579914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tier: 'staff' },
  { name: 'Mr. Ganiyu Bello', role: 'Athletic Director', bio: 'Develops the school\'s sports programme and physical education, nurturing discipline and teamwork through sport.', image: 'https://images.pexels.com/photos/14638234/pexels-photo-14638234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tier: 'staff' },
  { name: 'Mrs. Stella Adebayo', role: 'Receptionist', bio: 'Often the first face families see at ICAST, Stella welcomes every visitor with warmth and ensures smooth front-desk operations.', image: 'https://images.pexels.com/photos/5905753/pexels-photo-5905753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tier: 'staff' },
  { name: 'Emmanuel Okafor', role: 'Head Boy', bio: 'A SS3 student passionate about science and debate, representing the student body with integrity and purpose.', image: 'https://images.pexels.com/photos/31503252/pexels-photo-31503252.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tier: 'student' },
  { name: 'Zainab Adetola', role: 'Head Girl', bio: 'A SS3 student dedicated to the arts and community service, leading by example and encouraging younger students to find their voice.', image: 'https://images.pexels.com/photos/30999375/pexels-photo-30999375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tier: 'student' },
];

export interface Difference {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const differences: Difference[] = [
  { icon: GraduationCap, title: 'Academic Excellence', text: 'A culture of high expectations supported by experienced, attentive educators at every level.' },
  { icon: Cpu, title: '21st-Century Learning', text: 'Technology, critical thinking and problem-solving woven into everyday teaching.' },
  { icon: BookOpen, title: 'Science & Technology', text: 'Well-equipped laboratories and a dedicated ICT hub where curiosity becomes capability.' },
  { icon: Shield, title: 'Character Development', text: 'We shape disciplined, compassionate young people who lead with integrity.' },
  { icon: Trophy, title: 'Extracurricular Activities', text: 'Sports, arts, debate and clubs that help students discover and pursue their passions.' },
  { icon: Building2, title: 'Day & Boarding Education', text: 'Flexible options with a structured, supportive boarding community for primary and secondary.' },
];

export interface Pillar {
  icon: LucideIcon;
  label: string;
}

export const pillars: Pillar[] = [
  { icon: GraduationCap, label: 'Academic Development' },
  { icon: Shield, label: 'Character' },
  { icon: Users, label: 'Leadership' },
  { icon: Cpu, label: 'Technology' },
  { icon: Palette, label: 'Creativity' },
  { icon: Dumbbell, label: 'Physical Development' },
  { icon: HandHeart, label: 'Collaboration' },
  { icon: Sparkles, label: 'Confidence' },
];

export const heroImages = [
  'https://images.pexels.com/photos/5905554/pexels-photo-5905554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8617836/pexels-photo-8617836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/11025019/pexels-photo-11025019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export const whoWeAreImage = 'https://images.pexels.com/photos/8926848/pexels-photo-8926848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const proprietorImage = 'https://images.pexels.com/photos/27670041/pexels-photo-27670041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const proprietorName = 'Dr. Adebayo Isaac Olawale';
export const proprietorTitle = 'Proprietor, ICAST Schools';

export const proprietorMessage = `At ICAST, we believe that education goes beyond what happens inside the classroom. Our responsibility is to equip every child with knowledge, character, confidence and the skills needed to make a meaningful contribution to society.

We are committed to creating an environment where every student can discover their potential and grow into a responsible and capable individual. We do not simply prepare children for examinations — we prepare them for life.

To the parents and guardians who entrust us with their children: we do not take that trust lightly. We see each child as an individual with unique gifts, and our duty is to help those gifts flourish.`;
