'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Quote, MapPin } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  heroImages,
  whoWeAreImage,
  proprietorImage,
  proprietorName,
  proprietorTitle,
  proprietorMessage,
  facilities,
  people,
  differences,
  pillars,
  type FacilityCategory,
} from './about-people';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

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
        <div className={`flex items-center gap-2.5 mb-4 ${light ? 'text-gold' : 'text-burgundy'}`}>
          <span className="h-px w-7 bg-gold" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em]">{eyebrow}</span>
        </div>
        <h2
          className={`text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08] ${light ? 'text-white' : 'text-navy'}`}
        >
          {title}{' '}
          {highlight && (
            <em className="text-burgundy font-serif font-medium not-italic">{light ? 'text-gold' : ''} {highlight}</em>
          )}
        </h2>
      </div>
      {aside && (
        <p className={`max-w-xs text-sm leading-relaxed ${light ? 'text-white/70' : 'text-gray-500'}`}>{aside}</p>
      )}
    </div>
  );
}

export default function AboutHero() {
  const [activeCategory, setActiveCategory] = useState<FacilityCategory | 'all'>('all');

  const filteredFacilities =
    activeCategory === 'all' ? facilities : facilities.filter((f) => f.category === activeCategory);

  return (
    <div className="bg-warm">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid items-center gap-12 lg:grid-cols-[44%_56%]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-5 text-burgundy">
                <span className="h-px w-7 bg-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]">About ICAST Schools</span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-navy tracking-tight leading-[1.05]"
              >
                More than a school.
                <br />
                <em className="text-burgundy font-serif font-medium">A foundation for life.</em>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-lg text-[15px] leading-[1.75] text-gray-500"
              >
                ICAST is a private, co-educational institution in Elebu, Ibadan, committed to providing quality
                education across Creche, Nursery, Primary and Secondary levels — developing students academically,
                socially and personally, with both day and boarding options.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex items-center gap-6">
                <a
                  href="/#academics"
                  className="inline-flex items-center gap-2.5 bg-burgundy px-5 py-3.5 text-xs font-bold text-white rounded transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-burgundy-dark"
                >
                  Explore Our Academics <ArrowRight size={16} />
                </a>
                <a
                  href="#who-we-are"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy border-b border-gold pb-1.5 hover:text-burgundy transition-colors"
                >
                  Read our story <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="relative h-[420px] md:h-[560px]"
            >
              <div className="absolute inset-0 -right-16 md:-right-24 bg-navy/5" />
              <img
                src={heroImages[0]}
                alt="ICAST students in a classroom"
                className="relative z-10 w-full h-full object-cover"
              />
              <div className="absolute z-20 left-3 bottom-10 bg-white px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <div>
                    <p className="text-xs font-bold text-navy">Elebu, Ibadan</p>
                    <p className="text-[10px] text-gray-400">Creche · Nursery · Primary · Secondary</p>
                  </div>
                </div>
              </div>
              <div className="absolute z-20 top-8 right-4 bg-burgundy px-4 py-3.5 text-white">
                <p className="font-serif text-2xl leading-none">Est.</p>
                <p className="mt-1 text-[9px] uppercase tracking-widest opacity-90">2012</p>
              </div>
              <img
                src={heroImages[1]}
                alt="Students in a science laboratory"
                className="absolute z-20 -bottom-8 -left-6 md:-left-10 w-36 h-36 md:w-44 md:h-44 object-cover shadow-2xl border-4 border-warm hidden sm:block"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section id="who-we-are" className="py-24 md:py-32 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative pr-8 pb-10"
            >
              <img src={whoWeAreImage} alt="Students walking through the ICAST campus" className="w-full h-[420px] object-cover" />
              <div className="absolute bottom-0 right-0 w-48 md:w-52 bg-navy p-5 shadow-xl">
                <div className="mb-3.5 flex h-9 w-9 items-center justify-center bg-gold text-navy">
                  <Quote size={16} />
                </div>
                <p className="font-serif text-lg leading-snug text-white">Where curiosity<br />becomes capability.</p>
              </div>
              <div className="absolute -left-8 top-8 hidden lg:block">
                <span className="font-serif text-burgundy text-lg leading-[0.9] [writing-mode:vertical-rl] rotate-180">
                  ICAST <span className="font-sans text-[8px] tracking-[0.14em] uppercase">Est. 2012</span>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-4 text-burgundy">
                <span className="h-px w-7 bg-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]">Who We Are</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-navy tracking-tight leading-[1.08] mb-6">
                A place where every child is <em className="text-burgundy font-serif font-medium">seen, known and challenged.</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-lg text-sm leading-[1.8] text-gray-500 mb-4">
                ICAST is a private, co-educational institution providing a complete educational journey from Creche
                through Secondary. We combine academic excellence with a deep commitment to character, creativity
                and the confidence to navigate a changing world.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                {[
                  'Private & co-educational',
                  'Academic excellence',
                  '21st-century education',
                  'Science & technology focus',
                  'Character development',
                  'Creativity & self-expression',
                  'Extracurricular development',
                  'Day & boarding options',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-semibold text-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-24 md:py-32 bg-warm-dark">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="What We Believe"
            title="Our compass for every"
            highlight="decision."
            aside="The principles that guide how we teach, lead and care for every student at ICAST."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative bg-burgundy p-10 md:p-12 text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-serif text-[120px] leading-none text-white/5 select-none pointer-events-none">01</div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-gold-light font-bold">Our Mission</span>
              <h3 className="mt-5 font-serif text-3xl md:text-4xl font-medium leading-tight">
                To educate, equip and inspire.
              </h3>
              <p className="mt-6 text-sm leading-[1.85] text-white/75">
                ICAST is committed to providing quality education that develops responsible, confident and capable
                individuals. We strive to create an environment where academic excellence, character formation and
                practical skills come together — preparing students not only for examinations, but for the
                opportunities and challenges of a changing world.
              </p>
              <div className="mt-8 h-px w-12 bg-gold" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="relative bg-navy p-10 md:p-12 text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-serif text-[120px] leading-none text-white/5 select-none pointer-events-none">02</div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-gold-light font-bold">Our Vision</span>
              <h3 className="mt-5 font-serif text-3xl md:text-4xl font-medium leading-tight">
                A leading institution for a new generation.
              </h3>
              <p className="mt-6 text-sm leading-[1.85] text-white/75">
                To become a leading institution that combines academic excellence, technology, character and
                innovation — recognised for producing well-rounded students who are prepared to lead, contribute
                and thrive in their communities and beyond.
              </p>
              <div className="mt-8 h-px w-12 bg-gold" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES ICAST DIFFERENT ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="What Makes ICAST Different"
            title="Six reasons families"
            highlight="choose us."
            aside="Not promises on paper — the everyday experience your child will have at ICAST."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-14 grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-3"
          >
            {differences.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative bg-white p-8 md:p-10 transition-colors hover:bg-warm"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center bg-burgundy/8 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-white">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-3xl text-gold/40">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PROPRIETOR'S MESSAGE ===== */}
      <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 font-serif text-[200px] leading-none text-white/[0.03] select-none pointer-events-none -mr-12 mt-8">
          &ldquo;
        </div>
        <div className="mx-auto w-[min(1160px,calc(100%-64px))] relative">
          <div className="grid items-center gap-12 lg:grid-cols-[40%_60%] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -inset-3 border border-white/20 -z-0 hidden md:block" />
              <img
                src={proprietorImage}
                alt={proprietorName}
                className="relative w-full h-[480px] md:h-[540px] object-cover"
              />
              <div className="absolute -bottom-6 -right-3 md:right-6 bg-burgundy px-5 py-4">
                <p className="font-serif text-lg leading-tight">{proprietorName}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-gold-light">{proprietorTitle}</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-5 text-gold">
                <span className="h-px w-7 bg-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]">A Message From Our Proprietor</span>
              </motion.div>
              <motion.div variants={fadeUp} className="text-gold mb-6">
                <Quote size={40} strokeWidth={1} />
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-5">
                {proprietorMessage.split('\n\n').map((para, i) => (
                  <p key={i} className="font-serif text-lg md:text-xl leading-[1.6] text-white/90 italic">
                    {para}
                  </p>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <p className="font-serif text-xl">{proprietorName}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.13em] text-gold-light">{proprietorTitle}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MEET OUR PEOPLE ===== */}
      <section className="py-24 md:py-32 bg-warm">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Meet the People Behind ICAST"
            title="Leadership that knows"
            highlight="every child by name."
            aside="Our educators, administrators and student leaders work together to make ICAST what it is."
          />

          {/* Leadership tier — Principal & Vice Principal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-14 grid gap-8 sm:grid-cols-2"
          >
            {people.filter((p) => p.tier === 'leadership').map((person) => (
              <motion.article
                key={person.name}
                variants={fadeUp}
                className="group grid sm:grid-cols-[200px_1fr] gap-6 bg-white p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden h-64 sm:h-full">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-burgundy font-bold mb-2">Leadership</span>
                  <h3 className="text-xl font-semibold text-navy mb-1">{person.name}</h3>
                  <p className="text-sm text-gold-dark font-medium mb-4">{person.role}</p>
                  <p className="text-[13px] leading-relaxed text-gray-500">{person.bio}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Staff tier */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {people.filter((p) => p.tier === 'staff').map((person) => (
              <motion.article
                key={person.name}
                variants={fadeUp}
                className="group bg-white border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-navy">{person.name}</h3>
                  <p className="text-xs text-gold-dark font-medium mb-3">{person.role}</p>
                  <p className="text-xs leading-relaxed text-gray-500">{person.bio}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Student leaders */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px flex-1 bg-gray-200" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-burgundy">Student Leadership</span>
              <span className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
              {people.filter((p) => p.tier === 'student').map((person) => (
                <motion.article
                  key={person.name}
                  variants={fadeUp}
                  className="group relative bg-navy text-white p-6 overflow-hidden"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-20 h-20 object-cover rounded-full border-2 border-gold"
                      />
                      <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center bg-gold text-navy rounded-full">
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-gold-light">{person.role}</span>
                      <h3 className="text-lg font-semibold mt-1">{person.name}</h3>
                      <p className="text-xs text-white/60 mt-1.5 leading-relaxed">{person.bio}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== OUR FACILITIES ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Our Facilities"
            title="Spaces designed for"
            highlight="discovery."
            aside="From science laboratories to sports courts, every facility at ICAST supports learning, creativity and growth."
          />

          {/* Category tabs */}
          <div className="mt-10 flex justify-start">
            <Tabs defaultValue="all" onValueChange={(v) => setActiveCategory(v as FacilityCategory | 'all')}>
              <TabsList className="bg-warm-dark h-auto p-1.5 rounded-none flex-wrap">
                <TabsTrigger value="all" className="rounded-none data-[state=active]:bg-burgundy data-[state=active]:text-white text-xs px-5 py-2.5">
                  All
                </TabsTrigger>
                <TabsTrigger value="academic" className="rounded-none data-[state=active]:bg-burgundy data-[state=active]:text-white text-xs px-5 py-2.5">
                  Academic
                </TabsTrigger>
                <TabsTrigger value="science" className="rounded-none data-[state=active]:bg-burgundy data-[state=active]:text-white text-xs px-5 py-2.5">
                  Science & Technology
                </TabsTrigger>
                <TabsTrigger value="sports" className="rounded-none data-[state=active]:bg-burgundy data-[state=active]:text-white text-xs px-5 py-2.5">
                  Sports
                </TabsTrigger>
                <TabsTrigger value="boarding" className="rounded-none data-[state=active]:bg-burgundy data-[state=active]:text-white text-xs px-5 py-2.5">
                  Boarding
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Gallery grid */}
          <motion.div
            layout
            className="mt-8 grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3"
          >
            {filteredFacilities.map((facility, i) => (
              <motion.div
                key={facility.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`group relative overflow-hidden cursor-pointer ${
                  facility.span === 'wide'
                    ? 'lg:col-span-2 col-span-2 row-span-1'
                    : facility.span === 'tall'
                    ? 'row-span-2'
                    : ''
                }`}
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-4 md:p-5">
                  <span className="text-[9px] uppercase tracking-[0.13em] text-gold-light font-bold block mb-1">
                    {facility.category === 'science' ? 'Science & Tech' : facility.category}
                  </span>
                  <p className="text-white text-sm md:text-base font-semibold">{facility.name}</p>
                </div>
                <div className="absolute top-4 right-4 h-8 w-8 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} className="text-navy" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== OUR APPROACH TO STUDENT DEVELOPMENT ===== */}
      <section className="py-24 md:py-32 bg-warm-dark">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Our Approach"
            title="Developing the"
            highlight="whole student."
            aside="Education at ICAST extends far beyond academics — we nurture every dimension of a child's growth."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-14 flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                variants={fadeUp}
                className="group flex items-center gap-3 bg-white px-5 py-4 border border-gray-200 hover:border-burgundy hover:shadow-md transition-all"
              >
                <span className="flex h-10 w-10 items-center justify-center bg-burgundy/8 text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors">
                  <pillar.icon size={18} strokeWidth={1.5} />
                </span>
                <span className="text-sm font-semibold text-navy">{pillar.label}</span>
                <span className="text-gold/40 font-serif text-sm">0{i + 1}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 md:py-32 bg-burgundy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 font-serif text-[180px] leading-none text-white/[0.04] select-none pointer-events-none -ml-8 mt-4">
          ICAST
        </div>
        <div className="mx-auto w-[min(1160px,calc(100%-64px))] relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-5 text-gold">
                <span className="h-px w-7 bg-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]">Visit ICAST</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Come and experience <em className="text-gold font-serif font-medium">ICAST.</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 max-w-lg text-sm leading-[1.75] text-white/75">
                The best way to understand ICAST is to see it for yourself. We invite parents and guardians to visit
                our Elebu campus, meet our team and discover how we can help your child thrive. Begin your
                admission journey today.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="/#admissions"
                  className="inline-flex items-center gap-2.5 bg-white text-navy px-6 py-4 text-xs font-bold rounded transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Explore Admissions <ArrowRight size={16} />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white border-b border-gold pb-1.5 hover:text-gold transition-colors"
                >
                  Contact Us <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-white/10 border border-white/20 p-8 md:p-10 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3 mb-5">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-gold-light font-bold mb-1">Elebu Campus</p>
                  <p className="text-sm leading-relaxed text-white/85">
                    123, Oyinloye Olawale Street,<br />
                    Aba Bashorun Road,<br />
                    Elebu, Ibadan.
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-white/15 my-5" />
              <p className="text-xs text-white/60 mb-1">Monday – Friday</p>
              <p className="text-sm font-semibold text-white mb-5">8:00 AM – 6:00 PM</p>
              <a
                href="tel:+2348024971023"
                className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-gold-light transition-colors"
              >
                +234 802 497 1023 <ArrowRight size={15} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
