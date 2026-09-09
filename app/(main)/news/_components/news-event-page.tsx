'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  PhoneCall,
  MessageCircle,
  Mail,
  Trophy,
  Star,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  newsArticles,
  newsCategories,
  upcomingEvents,
  achievements,
  studentSpotlights,
  galleryImages,
  heroImage,
  type NewsCategory,
} from '@/lib/news-data';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatMonth(iso: string): { month: string; day: string } {
  const d = new Date(iso);
  return {
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
  };
}

function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 mb-4 ${light ? 'text-gold' : 'text-burgundy'}`}>
      <span className="h-px w-7 bg-gold" />
      <span className="text-[11px] font-bold uppercase tracking-[0.14em]">{text}</span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  highlight,
  aside,
  light = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  aside?: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
      <div>
        <Eyebrow text={eyebrow} light={light} />
        <h2
          className={`text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08] ${light ? 'text-white' : 'text-navy'}`}
        >
          {title}{' '}
          {highlight && <em className={`font-serif font-medium ${light ? 'text-gold' : 'text-burgundy'}`}>{highlight}</em>}
        </h2>
      </div>
      {aside && (
        <p className={`max-w-xs text-sm leading-relaxed ${light ? 'text-white/70' : 'text-gray-500'}`}>{aside}</p>
      )}
    </div>
  );
}

export default function NewsEventsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | NewsCategory>('All');
  const [subscribed, setSubscribed] = useState(false);

  const featuredStory = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const otherArticles = newsArticles.filter((a) => a.id !== featuredStory.id);

  const filteredArticles =
    activeCategory === 'All' ? otherArticles : otherArticles.filter((a) => a.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="bg-warm">
      {/* ===== PAGE HERO ===== */}
      <section className="relative overflow-hidden pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid items-center gap-10 lg:grid-cols-[52%_48%]">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <Eyebrow text="ICAST News & Events" />
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-navy tracking-tight leading-[1.05]"
              >
                What&apos;s <em className="text-burgundy font-serif font-medium">happening</em> at ICAST.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-7 max-w-lg text-[15px] leading-[1.75] text-gray-500">
                Stay updated with the latest school activities, announcements, student achievements and upcoming
                events. This is where our community comes together to celebrate learning, growth and life beyond
                the classroom.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="relative h-[320px] md:h-[440px]"
            >
              <div className="absolute inset-0 -right-12 md:-right-20 bg-navy/5" />
              <img
                src={heroImage}
                alt="ICAST students participating in a school activity"
                className="relative z-10 w-full h-full object-cover"
              />
              <div className="absolute z-20 left-3 bottom-6 bg-burgundy px-4 py-3 text-white">
                <p className="text-[9px] uppercase tracking-widest text-gold-light">Latest Updates</p>
                <p className="mt-1 text-xs font-bold">School News · Events · Achievements</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED STORY ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <Eyebrow text="Featured Story" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className="relative overflow-hidden group">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-[300px] md:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-burgundy px-3 py-1.5 text-white text-[10px] font-bold uppercase tracking-wider">
                {featuredStory.category}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-3">{formatDate(featuredStory.date)}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-navy leading-[1.15] mb-5">
                {featuredStory.title}
              </h2>
              <p className="text-sm leading-[1.8] text-gray-500 mb-6">{featuredStory.excerpt}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-burgundy px-5 py-3.5 text-xs font-bold text-white rounded transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-burgundy-dark"
              >
                Read Story <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== LATEST NEWS + CATEGORY FILTER ===== */}
      <section className="py-16 md:py-24 bg-warm-dark">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Latest News"
            title="School news &"
            highlight="announcements."
            aside="Browse recent stories from across the ICAST community."
          />

          {/* Category filter */}
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-none">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2.5 text-xs font-bold rounded transition-all ${
                  activeCategory === cat
                    ? 'bg-burgundy text-white'
                    : 'bg-white text-navy border border-gray-200 hover:border-burgundy/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News grid */}
          <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.article
                  layout
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="group bg-white border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-burgundy px-2.5 py-1 text-white text-[9px] font-bold uppercase tracking-wider">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[11px] text-gray-400 mb-2">{formatDate(article.date)}</p>
                    <h3 className="text-base font-semibold text-navy leading-snug mb-2 group-hover:text-burgundy transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-gray-500 flex-1">{article.excerpt}</p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-burgundy border-b border-gold/40 pb-0.5 hover:border-burgundy transition-colors w-fit"
                    >
                      Read More <ArrowRight size={13} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Mark your"
            highlight="calendar."
            aside="A quick look at what's coming up at ICAST this term."
          />

          {/* Event cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {upcomingEvents.slice(0, 6).map((event) => {
              const { month, day } = formatMonth(event.date);
              return (
                <motion.div
                  key={event.id}
                  variants={fadeUp}
                  className="group bg-warm border border-gray-100 p-5 hover:border-burgundy/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center justify-center w-16 flex-shrink-0 bg-navy text-white py-3">
                      <span className="text-[10px] font-bold tracking-wider text-gold-light">{month}</span>
                      <span className="font-serif text-2xl leading-none mt-1">{day}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-burgundy bg-burgundy/8 px-2 py-0.5 mb-2">
                        {event.category}
                      </span>
                      <h3 className="text-sm font-semibold text-navy leading-snug mb-2">{event.title}</h3>
                      <p className="text-xs leading-relaxed text-gray-500 mb-3">{event.description}</p>
                      <div className="flex flex-col gap-1.5 text-[11px] text-gray-400">
                        <span className="flex items-center gap-1.5"><Clock3 size={12} /> {event.time}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={12} /> {event.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== EVENT CALENDAR / TIMELINE ===== */}
      <section className="py-16 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 font-serif text-[180px] leading-none text-white/[0.03] select-none pointer-events-none -mr-8 mt-4">
          EVENTS
        </div>
        <div className="mx-auto w-[min(1160px,calc(100%-64px))] relative">
          <SectionHeading
            eyebrow="At a Glance"
            title="The term"
            highlight="ahead."
            aside="A simple timeline to help parents plan around key school dates."
            light
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12 relative"
          >
            {/* Horizontal line on desktop */}
            <div className="hidden lg:block absolute top-[32px] left-0 right-0 h-px bg-white/15" />
            <div className="grid gap-6 lg:grid-cols-4 relative">
              {upcomingEvents.slice(0, 4).map((event) => {
                const { month, day } = formatMonth(event.date);
                return (
                  <motion.div key={event.id} variants={fadeUp} className="relative">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                      <div className="relative z-10 flex flex-col items-center justify-center w-16 h-16 bg-burgundy text-white flex-shrink-0">
                        <span className="text-[9px] font-bold tracking-wider text-gold-light">{month}</span>
                        <span className="font-serif text-xl leading-none mt-0.5">{day}</span>
                      </div>
                      <div className="hidden lg:block w-full h-px bg-transparent" />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-sm font-semibold text-white leading-snug mb-1.5">{event.title}</h3>
                      <p className="text-xs text-white/55 leading-relaxed">{event.time} · {event.location}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SCHOOL ACHIEVEMENTS ===== */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Celebrating Excellence"
            title="Celebrating our"
            highlight="achievements."
            aside="Notable moments where our students and school made us proud."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {achievements.map((item) => (
              <motion.div key={item.id} variants={fadeUp} className="group relative overflow-hidden">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center bg-gold text-navy">
                    <Trophy size={16} />
                  </div>
                </div>
                <div className="bg-white p-5 border border-gray-100 border-t-0">
                  <span className="text-[10px] uppercase tracking-wider text-gold-dark font-bold">{item.category}</span>
                  <h3 className="text-sm font-semibold text-navy mt-2 mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{item.description}</p>
                  <p className="mt-3 text-[11px] text-gray-400">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== STUDENT SPOTLIGHT ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Student Spotlight"
            title="Meet the students who"
            highlight="make us proud."
            aside="Exceptional young people who exemplify what ICAST stands for."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {studentSpotlights.map((student) => (
              <motion.article
                key={student.id}
                variants={fadeUp}
                className="group flex flex-col bg-warm border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
                    <h3 className="text-lg font-serif font-medium text-white">{student.name}</h3>
                    <p className="text-xs text-gold-light">{student.className}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={15} className="text-gold" />
                    <span className="text-xs font-bold text-burgundy">{student.achievement}</span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-gray-500 flex-1">{student.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GALLERY / EVENT MOMENTS ===== */}
      <section className="py-16 md:py-24 bg-warm-dark">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Moments at ICAST"
            title="Life in"
            highlight="pictures."
            aside="A glimpse of everyday learning, achievement and joy at ICAST."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-10 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-3"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`group relative overflow-hidden cursor-pointer ${
                  img.span === 'wide' ? 'col-span-2' : img.span === 'tall' ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/60 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-semibold">{img.title}</p>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] text-gold-light font-bold uppercase tracking-wider">
                    View Gallery <ArrowUpRight size={11} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== NEWSLETTER / SCHOOL UPDATES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="flex justify-center mb-5">
              <div className="flex h-14 w-14 items-center justify-center bg-burgundy/8 text-burgundy rounded-full">
                <Mail size={24} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-navy mb-4">
              Stay Connected With ICAST
            </h2>
            <p className="text-sm leading-relaxed text-gray-500 mb-7 max-w-md mx-auto">
              Keep up with school announcements, events, achievements and important updates delivered straight to
              your inbox.
            </p>
            {subscribed ? (
              <div className="inline-flex items-center gap-2.5 bg-gold/10 text-gold-dark px-5 py-3.5 rounded">
                <CheckCircle2 size={18} className="text-gold-dark" />
                <span className="text-sm font-semibold text-navy">Thank you — you&apos;re subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="rounded-sm flex-1"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-burgundy px-5 py-3 text-xs font-bold text-white rounded transition-all hover:bg-burgundy-dark whitespace-nowrap"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
            <p className="mt-4 text-[11px] text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT / SCHOOL INFORMATION ===== */}
      <section className="py-16 md:py-24 bg-warm-dark">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Eyebrow text="School Information" />
              <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight leading-[1.1] mb-5">
                Have a question about an <em className="text-burgundy font-serif font-medium">event?</em>
              </h2>
              <p className="text-sm leading-relaxed text-gray-500 mb-8 max-w-md">
                Whether you need details about an upcoming event or want to confirm arrangements, our team is happy
                to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-burgundy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-gray-400 font-bold mb-1">Elebu Campus</p>
                    <p className="text-sm leading-relaxed text-navy">
                      123, Oyinloye Olawale Street,<br />
                      Aba Bashorun Road,<br />
                      Elebu, Ibadan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneCall size={18} className="text-burgundy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-gray-400 font-bold mb-1">Phone / WhatsApp</p>
                    <p className="text-sm font-semibold text-navy">+234 802 497 1023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 size={18} className="text-burgundy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-gray-400 font-bold mb-1">School Hours</p>
                    <p className="text-sm text-navy">Monday – Friday · 8:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:+2348024971023"
                className="inline-flex items-center justify-center gap-2.5 bg-burgundy px-6 py-4 text-xs font-bold text-white rounded transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-burgundy-dark"
              >
                <PhoneCall size={16} /> Contact the School
              </a>
              <a
                href="https://wa.me/2348024971023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white border border-gray-200 text-navy px-6 py-4 text-xs font-bold rounded transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-burgundy/30"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 md:py-28 bg-burgundy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 font-serif text-[180px] leading-none text-white/[0.04] select-none pointer-events-none -ml-8 mt-4">
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
              <span className="text-[11px] font-bold uppercase tracking-[0.14em]">Stay Engaged</span>
              <span className="h-px w-7 bg-gold" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              There&apos;s always something <em className="text-gold font-serif font-medium">happening at ICAST.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-sm leading-[1.75] text-white/75 max-w-xl mx-auto">
              Stay connected with our school and keep up with the latest activities, announcements and celebrations
              from the ICAST community.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#gallery"
                className="inline-flex items-center gap-2.5 bg-white text-navy px-6 py-4 text-xs font-bold rounded transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore Student Life <ArrowRight size={16} />
              </a>
              <a
                href="tel:+2348024971023"
                className="inline-flex items-center gap-2 text-xs font-bold text-white border-b border-gold pb-1.5 hover:text-gold transition-colors"
              >
                Contact ICAST <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
