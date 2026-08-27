import {
  GraduationCap,
  Cpu,
  BookOpen,
  Shield,
  Users,
  Building2,
  Trophy,
  Heart,
  ClipboardList,
  FileText,
  Send,
  CalendarCheck,
  Mail,
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock3,
  Baby,
  Palette,
  BookMarked,
  Microscope,
  type LucideIcon,
} from 'lucide-react';

export interface ProcessStep {
  num: string;
  title: string;
  text: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  { num: '01', title: 'Make an Enquiry', text: 'Reach out to our admissions team by phone, WhatsApp or through the enquiry form on this page.', icon: Mail },
  { num: '02', title: 'Submit Application', text: 'Complete the ICAST application form and share your child\'s basic information with us.', icon: ClipboardList },
  { num: '03', title: 'Provide Required Documents', text: 'Submit the supporting documents outlined in the requirements section below.', icon: FileText },
  { num: '04', title: 'Attend Assessment / Interview', text: 'Your child may be invited for a brief assessment or an informal interview with our team.', icon: CalendarCheck },
  { num: '05', title: 'Receive Admission Decision', text: 'We will communicate the outcome of your application and share next steps promptly.', icon: Send },
  { num: '06', title: 'Complete Enrollment', text: 'Accept the offer, complete enrolment formalities and welcome your child to ICAST.', icon: GraduationCap },
];

export interface Requirement {
  category: string;
  detail: string;
}

export const requirements: Requirement[] = [
  { category: 'Completed Application Form', detail: 'A duly filled ICAST admission application form, available from the school office or on request.' },
  { category: 'Previous School Records', detail: 'Recent report cards or transcripts from the child\'s current or most recent school, where applicable.' },
  { category: 'Birth Certificate / Proof of Age', detail: 'A copy of the child\'s birth certificate or an officially recognised proof of age document.' },
  { category: 'Passport Photographs', detail: 'Two recent passport-sized photographs of the child.' },
  { category: 'Transfer Documents', detail: 'For students transferring from another school, a transfer certificate and relevant academic records.' },
  { category: 'Medical Information', detail: 'Basic medical information, including any known allergies or conditions the school should be aware of.' },
];

export interface SchoolLevel {
  name: string;
  ages: string;
  text: string;
  icon: LucideIcon;
}

export const schoolLevels: SchoolLevel[] = [
  { name: 'Creche', ages: 'Approx. 3 months – 2 years', text: 'A warm, nurturing environment where early sensory, social and motor development begins.', icon: Baby },
  { name: 'Nursery', ages: 'Approx. 2 – 5 years', text: 'Play-based foundations in literacy, numeracy and curiosity that make learning a joy.', icon: Palette },
  { name: 'Primary', ages: 'Approx. 5 – 11 years', text: 'Strong academic foundations with growing emphasis on science, technology and character.', icon: BookMarked },
  { name: 'Secondary', ages: 'Approx. 11 – 17 years', text: 'Focused preparation for examinations, leadership, higher education and the world beyond.', icon: Microscope },
];

export interface FeeTier {
  level: string;
  range: string;
}

export const feeTiers: FeeTier[] = [
  { level: 'Creche', range: '₦150,000 – ₦250,000 / term' },
  { level: 'Kindergarten', range: '₦180,000 – ₦300,000 / term' },
  { level: 'Nursery 1 – 2', range: '₦200,000 – ₦350,000 / term' },
  { level: 'Primary 1 – 5', range: '₦250,000 – ₦450,000 / term' },
  { level: 'JSS 1 – JSS 3', range: '₦350,000 – ₦550,000 / term' },
  { level: 'SS 1 – SS 3', range: '₦400,000 – ₦650,000 / term' },
];

export interface ChooseReason {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const chooseReasons: ChooseReason[] = [
  { icon: GraduationCap, title: 'Academic Excellence', text: 'A culture of high expectations supported by experienced, attentive educators at every level.' },
  { icon: Cpu, title: '21st-Century Learning', text: 'Technology, critical thinking and problem-solving are woven into everyday teaching.' },
  { icon: BookOpen, title: 'Science & Technology', text: 'Well-equipped laboratories and a dedicated ICT hub where curiosity becomes capability.' },
  { icon: Shield, title: 'Character Development', text: 'We shape disciplined, compassionate young people who lead with integrity.' },
  { icon: Users, title: 'Experienced Educators', text: 'Qualified teachers who are invested in each child\'s academic and personal growth.' },
  { icon: Heart, title: 'Safe & Supportive', text: 'A secure, caring environment where children feel known, valued and protected.' },
  { icon: Building2, title: 'Day & Boarding Options', text: 'Flexible schooling with structured, well-supervised boarding for primary and secondary.' },
  { icon: Trophy, title: 'Extracurricular Development', text: 'Sports, arts, debate, clubs and leadership opportunities beyond the classroom.' },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  { question: 'What classes are available for admission?', answer: 'ICAST offers admission across all levels — Creche, Nursery, Primary and Secondary. Please contact our admissions team to confirm availability for your child\'s specific class, as spaces may vary by year group.' },
  { question: 'Does ICAST offer boarding?', answer: 'Yes. ICAST provides comfortable, supervised boarding facilities for primary and secondary students. Our boarding community offers structured routines, academic support and a safe, supportive living environment.' },
  { question: 'How do I begin the admission process?', answer: 'The simplest first step is to make an enquiry. You can call us, send a WhatsApp message, or fill out the admission enquiry form on this page. Our team will guide you through each subsequent step.' },
  { question: 'What documents are required?', answer: 'Typically, we request a completed application form, the child\'s birth certificate or proof of age, recent school records, passport photographs and any applicable transfer documents. Full details are listed in the Admission Requirements section above.' },
  { question: 'Can I visit the school before applying?', answer: 'Absolutely. We encourage prospective parents and guardians to visit our Elebu campus, meet our staff and see our facilities firsthand. Please contact the admissions office to arrange a convenient time.' },
  { question: 'How can I request information about school fees?', answer: 'Fee ranges for each level are outlined on this page for reference. For the current, detailed fee schedule and payment information, please contact our admissions team or use the "Request Fee Information" option.' },
  { question: 'Does the school offer extracurricular activities?', answer: 'Yes. ICAST offers a range of extracurricular programmes including sports, music, arts, science clubs, debate and leadership activities designed to develop the whole child.' },
  { question: 'How can I contact the admissions team?', answer: 'You can reach us by phone or WhatsApp at +234 802 497 1023, Monday to Friday between 8:00 AM and 6:00 PM, or by using the enquiry form on this page.' },
];

export const heroImage = 'https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const boardingImage = 'https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const daySchoolImage = 'https://images.pexels.com/photos/5905554/pexels-photo-5905554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
