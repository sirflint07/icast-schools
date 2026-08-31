'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  HeartHandshake,
  Mail,
  MessageCircle,
  Landmark,
  Copy,
  Check,
  BookOpen,
  Cpu,
  FlaskConical,
  Trophy,
  GraduationCap,
  Building2,
  Sparkles,
  ShieldCheck,
  Info,
  PhoneCall,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 mb-4 ${light ? 'text-gold' : 'text-burgundy'}`}>
      <span className="h-px w-7 bg-gold" />
      <span className="text-[11px] font-bold uppercase tracking-[0.14em]">{text}</span>
    </div>
  );
}

const heroImage = 'https://images.pexels.com/photos/5905554/pexels-photo-5905554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const impactImage = 'https://images.pexels.com/photos/8199636/pexels-photo-8199636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

interface ImpactArea {
  icon: LucideIcon;
  title: string;
  text: string;
}

const impactAreas: ImpactArea[] = [
  { icon: BookOpen, title: 'Learning Resources', text: 'Books, teaching materials and classroom resources that enrich every lesson.' },
  { icon: Cpu, title: 'Technology & ICT', text: 'Computers, software and digital infrastructure that prepare students for a digital world.' },
  { icon: FlaskConical, title: 'Science Laboratories', text: 'Laboratory equipment and materials that bring science to life through practical learning.' },
  { icon: Trophy, title: 'Sports & Extracurriculars', text: 'Sports gear, club resources and activity programmes that develop the whole child.' },
  { icon: GraduationCap, title: 'Student Development', text: 'Programmes and opportunities that help students discover and pursue their potential.' },
  { icon: Building2, title: 'School Facilities', text: 'Facility improvements that create a safe, inspiring and functional learning environment.' },
];

interface SupportOption {
  icon: LucideIcon;
  title: string;
  text: string;
}

const supportOptions: SupportOption[] = [
  { icon: Landmark, title: 'Financial Support', text: 'Support the school through a direct financial contribution to a fund or project of your choice.' },
  { icon: BookOpen, title: 'Educational Resources', text: 'Contribute books, learning materials, computers, laboratory equipment and other educational resources.' },
  { icon: Building2, title: 'Infrastructure & Facilities', text: 'Support projects that improve the learning environment and school facilities.' },
  { icon: GraduationCap, title: 'Scholarship & Student Support', text: 'Help provide opportunities and resources for students who may need additional support.' },
  { icon: HeartHandshake, title: 'Partnerships & Sponsorships', text: 'Partner with ICAST on educational programmes, events, technology initiatives and student development.' },
];

interface ImpactPoint {
  icon: LucideIcon;
  label: string;
  text: string;
}

const impactPoints: ImpactPoint[] = [
  { icon: BookOpen, label: 'Better Learning Resources', text: 'Expanded libraries, updated materials and richer classroom tools.' },
  { icon: Cpu, label: 'Improved Technology', text: 'Modern ICT infrastructure and digital learning capabilities.' },
  { icon: Trophy, label: 'Enhanced Student Activities', text: 'Stronger sports, arts, clubs and extracurricular programmes.' },
  { icon: Building2, label: 'Stronger Learning Environment', text: 'Upgraded facilities that support every dimension of student growth.' },
];

export default function GivingPage() {
  const [accountsOpen, setAccountsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const accountDetails = {
    accountName: 'ICAST Schools',
    bank: '[Bank Name — to be provided]',
    accountNumber: '0000000000',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="bg-warm">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid items-center gap-12 lg:grid-cols-[48%_52%]">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <Eyebrow text="Giving to ICAST Schools" />
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-navy tracking-tight leading-[1.05]"
              >
                Help us shape the <em className="text-burgundy font-serif font-medium">future.</em>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-7 max-w-lg text-[15px] leading-[1.75] text-gray-500">
                Your support helps ICAST Schools provide better learning opportunities, facilities, resources and
                experiences that prepare students for the future.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#ways-to-support"
                  className="inline-flex items-center gap-2.5 bg-burgundy px-6 py-4 text-xs font-bold text-white rounded transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-burgundy-dark"
                >
                  Support ICAST <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => setAccountsOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy border-b border-gold pb-1.5 hover:text-burgundy transition-colors"
                >
                  View Donation Accounts <ArrowRight size={16} />
                </button>
              </motion.div>
              <motion.p variants={fadeUp} className="mt-8 text-[11px] text-gray-400 italic">
                Every contribution makes a difference.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="relative h-[360px] md:h-[480px]"
            >
              <div className="absolute inset-0 -right-12 md:-right-20 bg-navy/5" />
              <img
                src={heroImage}
                alt="ICAST students learning in a classroom"
                className="relative z-10 w-full h-full object-cover"
              />
              <div className="absolute z-20 left-3 bottom-8 bg-white px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <div>
                    <p className="text-xs font-bold text-navy">Supporting Future Generations</p>
                    <p className="text-[10px] text-gray-400">Elebu, Ibadan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY YOUR SUPPORT MATTERS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Eyebrow text="Why Your Support Matters" />
              <h2 className="text-4xl md:text-5xl font-semibold text-navy tracking-tight leading-[1.08] mb-6">
                Your support goes beyond a <em className="text-burgundy font-serif font-medium">donation.</em>
              </h2>
              <p className="max-w-md text-sm leading-[1.8] text-gray-500 mb-6">
                Every contribution helps us create an environment where students can learn, explore their interests,
                develop practical skills and become better prepared for the future.
              </p>
              <div className="bg-burgundy/5 border-l-2 border-burgundy p-5">
                <p className="text-xs leading-relaxed text-navy">
                  ICAST Schools is committed to providing quality education that combines academic excellence,
                  character development and technology. Your support makes that possible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="grid gap-px bg-gray-200 sm:grid-cols-2"
            >
              {impactAreas.map((area) => (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  className="group bg-white p-7 transition-colors hover:bg-warm"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-burgundy/8 text-burgundy mb-5 transition-colors group-hover:bg-burgundy group-hover:text-white">
                    <area.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-navy mb-2">{area.title}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">{area.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WAYS TO SUPPORT ICAST ===== */}
      <section id="ways-to-support" className="py-20 md:py-28 bg-warm-dark scroll-mt-20">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12 mb-14">
            <div>
              <Eyebrow text="Ways to Support ICAST" />
              <h2 className="text-4xl md:text-5xl font-semibold text-navy tracking-tight leading-[1.08]">
                Support comes in <em className="text-burgundy font-serif font-medium">many forms.</em>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              Giving to ICAST is not limited to financial contributions. There are several ways to make a meaningful
              impact.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {supportOptions.map((opt, i) => (
              <motion.div
                key={opt.title}
                variants={fadeUp}
                className={`group bg-white border border-gray-100 p-7 hover:border-burgundy/20 hover:shadow-md transition-all ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-navy text-white group-hover:bg-burgundy transition-colors">
                    <opt.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy mb-2">{opt.title}</h3>
                    <p className="text-[13px] leading-relaxed text-gray-500">{opt.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== BECOME A SPONSOR OR FUNDRAISER ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="max-w-2xl">
            <Eyebrow text="Sponsors & Fundraisers" />
            <h2 className="text-4xl md:text-5xl font-semibold text-navy tracking-tight leading-[1.08] mb-6">
              Be part of our <em className="text-burgundy font-serif font-medium">sponsors & fundraisers.</em>
            </h2>
            <p className="text-sm leading-[1.8] text-gray-500">
              Whether you are an individual, parent, alumni, organization or business, you can partner with ICAST
              Schools to support initiatives that positively impact our students and community.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            <motion.div
              variants={fadeUp}
              className="group bg-warm border border-gray-100 p-8 hover:border-burgundy/25 hover:shadow-md transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center bg-royal/10 text-royal mb-6 group-hover:bg-royal group-hover:text-white transition-colors">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Send Us a Mail</h3>
              <p className="text-[13px] leading-relaxed text-gray-500 mb-6">
                Reach out to us by email to discuss how you would like to support ICAST Schools.
              </p>
              <a
                href="mailto:info@icastschools.com"
                className="inline-flex items-center gap-2 text-xs font-bold text-royal border-b border-royal/30 pb-1 hover:border-royal transition-colors"
              >
                Send a Mail <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="group bg-warm border border-gray-100 p-8 hover:border-burgundy/25 hover:shadow-md transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center bg-gold/15 text-gold-dark mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                <MessageCircle size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Reach Out on WhatsApp</h3>
              <p className="text-[13px] leading-relaxed text-gray-500 mb-6">
                Chat with our team directly on WhatsApp for a quick and convenient conversation.
              </p>
              <a
                href="https://wa.me/2348024971023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-gold-dark border-b border-gold/40 pb-1 hover:border-gold-dark transition-colors"
              >
                Chat on WhatsApp <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="group bg-warm border border-gray-100 p-8 hover:border-burgundy/25 hover:shadow-md transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center bg-burgundy/8 text-burgundy mb-6 group-hover:bg-burgundy group-hover:text-white transition-colors">
                <Landmark size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Request Donation Accounts</h3>
              <p className="text-[13px] leading-relaxed text-gray-500 mb-6">
                View our available bank accounts for direct transfers and contributions.
              </p>
              <button
                onClick={() => setAccountsOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-bold text-burgundy border-b border-gold/40 pb-1 hover:border-burgundy transition-colors"
              >
                View Available Accounts <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== IMPACT SECTION ===== */}
      <section className="py-20 md:py-28 bg-warm-dark">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <img
                src={impactImage}
                alt="Students using learning resources in a library"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
              <div className="absolute -bottom-5 -right-3 md:right-6 bg-navy text-white px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <Sparkles size={18} className="text-gold" />
                  <p className="font-serif text-lg leading-tight">Your impact,<br />made tangible.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Eyebrow text="The Impact of Your Giving" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-navy tracking-tight leading-[1.1] mb-8">
                What your <em className="text-burgundy font-serif font-medium">contribution</em> can help accomplish.
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5">
                {impactPoints.map((point) => (
                  <div key={point.label} className="flex items-start gap-4 group">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-burgundy/8 text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors">
                      <point.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy mb-1">{point.label}</h3>
                      <p className="text-[13px] leading-relaxed text-gray-500">{point.text}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 font-serif text-[180px] leading-none text-white/[0.03] select-none pointer-events-none -ml-8 mt-4">
          ICAST
        </div>
        <div className="mx-auto w-[min(1160px,calc(100%-64px))] relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2.5 mb-5 text-gold">
              <span className="h-px w-7 bg-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em]">Make a Difference</span>
              <span className="h-px w-7 bg-gold" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Together, we can create <em className="text-gold font-serif font-medium">greater opportunities.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-sm leading-[1.75] text-white/75 max-w-xl mx-auto">
              Your contribution, regardless of its size, can help us continue building an environment where students
              are equipped to learn, grow and achieve.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#ways-to-support"
                className="inline-flex items-center gap-2.5 bg-burgundy px-6 py-4 text-xs font-bold text-white rounded transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-burgundy-light"
              >
                Support ICAST <ArrowRight size={16} />
              </a>
              <a
                href="tel:+2348024971023"
                className="inline-flex items-center gap-2 text-xs font-bold text-white border-b border-gold pb-1.5 hover:text-gold transition-colors"
              >
                <PhoneCall size={15} /> Contact the School
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== DONATION ACCOUNT DIALOG ===== */}
      <Dialog open={accountsOpen} onOpenChange={setAccountsOpen}>
        <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden border-gray-200">
          {/* Dialog header band */}
          <div className="bg-navy text-white px-6 py-5 relative">
            <DialogHeader className="space-y-0">
              <DialogTitle className="text-lg font-serif font-medium flex items-center gap-2.5">
                <Landmark size={20} className="text-gold" />
                Donation Accounts
              </DialogTitle>
              <DialogDescription className="text-white/60 text-xs mt-1">
                Use the details below to make a direct transfer in support of ICAST Schools.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6">
            {/* Account card with glass styling */}
            <div className="bg-gradient-to-br from-white to-warm-dark border border-gray-200 shadow-sm p-6">
              <div className="flex flex-col gap-5">
                {/* Account name */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-gray-400 font-bold mb-1.5">Account Name</p>
                  <p className="text-base font-semibold text-navy">{accountDetails.accountName}</p>
                </div>
                <Separator className="bg-gray-100" />
                {/* Bank */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-gray-400 font-bold mb-1.5">Bank</p>
                  <p className="text-base font-semibold text-navy">{accountDetails.bank}</p>
                </div>
                <Separator className="bg-gray-100" />
                {/* Account number with copy */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-gray-400 font-bold mb-1.5">Account Number</p>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-serif font-medium text-burgundy tracking-wide">{accountDetails.accountNumber}</p>
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 bg-burgundy/8 text-burgundy px-3 py-2 text-xs font-bold rounded transition-all hover:bg-burgundy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
                      aria-label="Copy account number to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check size={14} /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirmation note */}
            <div className="mt-5 flex items-start gap-3 bg-gold/10 border-l-2 border-gold p-4">
              <Info size={16} className="text-gold-dark flex-shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed text-navy">
                Please confirm the account details before making a transfer.
              </p>
            </div>

            {/* Transfer guidelines */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-navy mb-3 flex items-center gap-2">
                <ShieldCheck size={16} className="text-burgundy" />
                Transfer Description Guidelines
              </h3>
              <p className="text-[13px] leading-relaxed text-gray-500 mb-4">
                To help us identify and properly record your contribution, please include the following in the
                transfer description where applicable:
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  'Full Name',
                  'Purpose of Donation',
                  'Organisation / Company Name, if applicable',
                  'Relevant Project or Initiative',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] text-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Example */}
              <div className="bg-warm border border-gray-200 p-4">
                <p className="text-[10px] uppercase tracking-[0.14em] text-gray-400 font-bold mb-1.5">Example</p>
                <p className="text-[13px] font-medium text-navy font-mono">
                  Michael Oluwaseun - ICT Support Donation
                </p>
              </div>

              {/* Receipt reminder */}
              <div className="mt-4 flex items-start gap-3 bg-burgundy/5 border-l-2 border-burgundy p-4">
                <ShieldCheck size={16} className="text-burgundy flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-navy">
                  Please keep your transfer receipt or payment confirmation for your records.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
