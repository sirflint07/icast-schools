'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock3,
  CheckCircle2,
  Sparkles,
  Building2,
  Moon,
  Sun,
  X,
  Send,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  processSteps,
  requirements,
  schoolLevels,
  feeTiers,
  chooseReasons,
  faqItems,
  heroImage,
  boardingImage,
  daySchoolImage,
} from '@/lib/admission-data';

daySchoolImage

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

export default function AdmissionsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [feeFormSubmitted, setFeeFormSubmitted] = useState(false);

  const handleEnquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleFeeFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeeFormSubmitted(true);
  };

  return (
    <div className="bg-warm">
      {/* ===== ADMISSIONS HERO ===== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid items-center gap-12 lg:grid-cols-[48%_52%]">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <Eyebrow text="Admissions at ICAST Schools" />
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-navy tracking-tight leading-[1.05]"
              >
                Give your child a <em className="text-burgundy font-serif font-medium">stronger start.</em>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-7 max-w-lg text-[15px] leading-[1.75] text-gray-500">
                Begin your child&apos;s journey at ICAST Schools. We provide quality education from Creche through
                Secondary School, with both day and boarding options, in a supportive and technology-forward
                environment.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2.5 bg-burgundy px-6 py-4 text-xs font-bold text-white rounded transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-burgundy-dark"
                >
                  Start Admission Enquiry <ArrowRight size={16} />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy border-b border-gold pb-1.5 hover:text-burgundy transition-colors"
                >
                  Explore Admission Process <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="relative h-[380px] md:h-[520px]"
            >
              <div className="absolute inset-0 -right-12 md:-right-20 bg-navy/5" />
              <img
                src={heroImage}
                alt="ICAST students in a classroom"
                className="relative z-10 w-full h-full object-cover"
              />
              <div className="absolute z-20 left-3 bottom-8 bg-white px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <div>
                    <p className="text-xs font-bold text-navy">Now Accepting Applications</p>
                    <p className="text-[10px] text-gray-400">Creche · Nursery · Primary · Secondary</p>
                  </div>
                </div>
              </div>
              <div className="absolute z-20 top-6 right-4 bg-burgundy px-4 py-3.5 text-white">
                <p className="font-serif text-2xl leading-none">2024</p>
                <p className="mt-1 text-[9px] uppercase tracking-widest opacity-90">/ 2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ICAST ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Why Choose ICAST"
            title="A school worth"
            highlight="considering."
            aside="Before you begin the admission process, here is what sets ICAST apart."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-14 grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-4"
          >
            {chooseReasons.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative bg-white p-8 transition-colors hover:bg-warm"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center bg-burgundy/8 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-white">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-2xl text-gold/40">0{i + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHO CAN APPLY ===== */}
      <section className="py-24 md:py-32 bg-warm-dark">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Who Can Apply"
            title="An ICAST education for"
            highlight="every age."
            aside="From first steps to final exams, your child can grow with us at every stage."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {schoolLevels.map((level) => (
              <motion.div
                key={level.name}
                variants={fadeUp}
                className="group bg-white p-7 border border-gray-100 hover:border-burgundy/30 hover:shadow-lg transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-navy text-white mb-5 group-hover:bg-burgundy transition-colors">
                  <level.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-medium text-navy mb-1">{level.name}</h3>
                <p className="text-[11px] text-gold-dark font-medium mb-3">{level.ages}</p>
                <p className="text-[13px] leading-relaxed text-gray-500 mb-5">{level.text}</p>
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy border-b border-gold/50 pb-1 hover:border-burgundy transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ADMISSION PROCESS ===== */}
      <section id="process" className="py-24 md:py-32 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Admission Process"
            title="A clear path from"
            highlight="enquiry to enrolment."
            aside="Six simple steps. We guide you through every one."
          />

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block mt-16 relative">
            <div className="absolute top-[44px] left-0 right-0 h-px bg-gray-200" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="grid grid-cols-6 gap-4 relative"
            >
              {processSteps.map((step) => (
                <motion.div key={step.num} variants={fadeUp} className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-[88px] w-[88px] items-center justify-center bg-white border-2 border-burgundy text-burgundy font-serif text-2xl font-medium group-hover:bg-burgundy group-hover:text-white transition-colors">
                    {step.num}
                  </div>
                  <step.icon size={20} className="text-gold mt-4 mb-3" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold text-navy mb-2">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile / tablet vertical timeline */}
          <div className="lg:hidden mt-12 relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gray-200" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="flex flex-col gap-8"
            >
              {processSteps.map((step) => (
                <motion.div key={step.num} variants={fadeUp} className="flex gap-5 relative">
                  <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center bg-white border-2 border-burgundy text-burgundy font-serif text-lg font-medium">
                    {step.num}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon size={16} className="text-gold" strokeWidth={1.5} />
                      <h3 className="text-sm font-semibold text-navy">{step.title}</h3>
                    </div>
                    <p className="text-[13px] leading-relaxed text-gray-500">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ADMISSION REQUIREMENTS ===== */}
      <section className="py-24 md:py-32 bg-warm-dark">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Eyebrow text="Admission Requirements" />
              <h2 className="text-4xl md:text-5xl font-semibold text-navy tracking-tight leading-[1.08] mb-6">
                What to <em className="text-burgundy font-serif font-medium">prepare.</em>
              </h2>
              <p className="max-w-md text-sm leading-[1.8] text-gray-500 mb-6">
                The following items are typically requested as part of the admission process. These are provided as
                a guide — our admissions team will confirm the exact documents needed for your child&apos;s
                specific level.
              </p>
              <div className="bg-burgundy/5 border-l-2 border-burgundy p-5">
                <p className="text-xs leading-relaxed text-navy">
                  <strong className="font-semibold">Please note:</strong> Requirements may vary by class level.
                  Contact our admissions office to confirm what applies to your child.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Accordion type="single" collapsible className="flex flex-col gap-3">
                {requirements.map((req, i) => (
                  <AccordionItem
                    key={req.category}
                    value={`item-${i}`}
                    className="bg-white border border-gray-100 px-5 [&[data-state=open]]:border-burgundy/30"
                  >
                    <AccordionTrigger className="text-sm font-semibold text-navy hover:no-underline py-5 [&[data-state=open]]:text-burgundy">
                      <span className="flex items-center gap-3 text-left">
                        <span className="font-serif text-gold/50 text-lg">{String(i + 1).padStart(2, '0')}</span>
                        {req.category}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[13px] leading-relaxed text-gray-500 pb-5">
                      {req.detail}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== DAY & BOARDING ADMISSION ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Day & Boarding"
            title="Two ways to join the"
            highlight="ICAST community."
            aside="Choose the option that best fits your family and your child's needs."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Day School */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group relative overflow-hidden"
            >
              <img
                src={daySchoolImage}
                alt="Day school students learning in a classroom"
                className="w-full h-64 object-cover"
              />
              <div className="bg-warm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-royal/10 text-royal">
                    <Sun size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-navy">Day Schooling</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 mb-5">
                  For families in and around Ibadan, our day school option provides a structured, engaging learning
                  environment where students benefit from full academic days, extracurricular activities and a
                  strong peer community, then return home each evening.
                </p>
                <ul className="space-y-2.5">
                  {['Full academic programme', 'Extracurricular participation', 'Daily transport-friendly hours', 'Strong school–home connection'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13px] text-navy">
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Boarding */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="group relative overflow-hidden"
            >
              <img
                src={boardingImage}
                alt="Comfortable boarding accommodation"
                className="w-full h-64 object-cover"
              />
              <div className="bg-navy text-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-gold text-navy">
                    <Moon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-medium">Boarding</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/75 mb-5">
                  Available for primary and secondary students, our boarding facilities offer a safe, structured and
                  supportive living environment that complements academic learning with personal growth.
                </p>
                <ul className="space-y-2.5">
                  {['Structured student life and routines', 'Comfortable, supervised accommodation', 'Evening academic support', 'Community living and social development'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13px] text-white/90">
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2 mt-6 text-xs font-bold text-gold border-b border-gold/50 pb-1.5 hover:text-gold-light transition-colors"
                >
                  Explore Boarding <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SCHOOL FEES ===== */}
      <section className="py-24 md:py-32 bg-warm-dark">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="School Fees"
            title="Fee information by"
            highlight="level."
            aside="Fee ranges shown below are indicative. Contact us for the current, detailed fee schedule."
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="bg-white border border-gray-100 overflow-hidden"
            >
              <div className="grid grid-cols-[1fr_1.2fr] bg-navy text-white px-6 py-4 text-xs font-bold uppercase tracking-wider">
                <span>Level</span>
                <span>Fee Range (per term)</span>
              </div>
              {feeTiers.map((tier, i) => (
                <motion.div
                  key={tier.level}
                  variants={fadeUp}
                  className={`grid grid-cols-[1fr_1.2fr] px-6 py-4 text-sm items-center ${
                    i % 2 === 0 ? 'bg-warm/50' : 'bg-white'
                  } border-t border-gray-50`}
                >
                  <span className="font-semibold text-navy">{tier.level}</span>
                  <span className="text-gray-500">{tier.range}</span>
                </motion.div>
              ))}
              <div className="px-6 py-4 bg-burgundy/5 border-t border-gray-100">
                <p className="text-[11px] leading-relaxed text-gray-400">
                  These ranges are indicative and provided as a general guide only. Actual fees may vary based on
                  boarding options, additional services and yearly adjustments. Please contact the school for the
                  current fee schedule.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col justify-center"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center bg-burgundy text-white">
                <Building2 size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif font-medium text-navy mb-4">Need detailed fee information?</h3>
              <p className="text-sm leading-relaxed text-gray-500 mb-6">
                For the current fee schedule, payment plans and any applicable discounts, please reach out to our
                admissions team. We&apos;re happy to provide a full breakdown for your child&apos;s level.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex w-fit items-center gap-2.5 bg-burgundy px-5 py-3.5 text-xs font-bold text-white rounded transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-burgundy-dark">
                    Request Fee Information <ArrowRight size={15} />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[480px]">
                  {feeFormSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="flex h-14 w-14 items-center justify-center bg-burgundy/10 text-burgundy rounded-full mb-5">
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 className="text-xl font-serif font-medium text-navy mb-2">Request received</h3>
                      <p className="text-sm text-gray-500 mb-6 max-w-xs">
                        Thank you. Our admissions team will send the detailed fee information to you shortly.
                      </p>
                      <button
                        onClick={() => setFeeFormSubmitted(false)}
                        className="text-xs font-bold text-burgundy border-b border-gold/50 pb-1 hover:text-burgundy-dark transition-colors"
                      >
                        Send another request <ArrowRight size={14} className="inline ml-1" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <DialogHeader>
                        <DialogTitle className="text-xl font-serif font-medium text-navy">
                          Request Fee Information
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleFeeFormSubmit} className="flex flex-col gap-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <Label className="text-xs font-semibold text-navy">Your Name</Label>
                            <Input required placeholder="Full name" className="rounded-sm" />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label className="text-xs font-semibold text-navy">Phone</Label>
                            <Input required type="tel" placeholder="+234 ..." className="rounded-sm" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <Label className="text-xs font-semibold text-navy">Email</Label>
                          <Input required type="email" placeholder="you@example.com" className="rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <Label className="text-xs font-semibold text-navy">Level of Interest</Label>
                          <Select>
                            <SelectTrigger className="rounded-sm">
                              <SelectValue placeholder="Select a level" />
                            </SelectTrigger>
                            <SelectContent>
                              {schoolLevels.map((level) => (
                                <SelectItem key={level.name} value={level.name}>
                                  {level.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2.5 bg-burgundy px-5 py-3.5 text-xs font-bold text-white rounded transition-all hover:bg-burgundy-dark mt-2"
                        >
                          Submit Request <Send size={14} />
                        </button>
                      </form>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ADMISSION ENQUIRY FORM ===== */}
      <section id="enquiry-form" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Eyebrow text="Admission Enquiry" />
              <h2 className="text-4xl md:text-5xl font-semibold text-navy tracking-tight leading-[1.08] mb-6">
                Start your <em className="text-burgundy font-serif font-medium">admission enquiry.</em>
              </h2>
              <p className="max-w-md text-sm leading-[1.8] text-gray-500 mb-8">
                Fill out the form and our admissions team will get back to you with the next steps. The more
                information you provide, the better we can assist you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-navy">
                  <PhoneCall size={18} className="text-burgundy flex-shrink-0" />
                  <span>+234 802 497 1023</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-navy">
                  <MessageCircle size={18} className="text-burgundy flex-shrink-0" />
                  <span>WhatsApp available</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-navy">
                  <Clock3 size={18} className="text-burgundy flex-shrink-0" />
                  <span>Mon – Fri, 8:00 AM – 6:00 PM</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-warm border border-gray-100 p-6 md:p-8"
            >
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                    className="flex h-16 w-16 items-center justify-center bg-burgundy/10 text-burgundy rounded-full mb-6"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-medium text-navy mb-3">Enquiry received</h3>
                  <p className="text-sm text-gray-500 mb-6 max-w-sm">
                    Thank you for your interest in ICAST Schools. Our admissions team will contact you within 48
                    hours to discuss the next steps.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy border-b border-gold/50 pb-1 hover:text-burgundy-dark transition-colors"
                  >
                    Submit another enquiry <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-xs font-semibold text-navy">Parent / Guardian Name *</Label>
                      <Input required placeholder="Full name" className="rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-xs font-semibold text-navy">Email Address *</Label>
                      <Input required type="email" placeholder="you@example.com" className="rounded-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-xs font-semibold text-navy">Phone Number *</Label>
                      <Input required type="tel" placeholder="+234 ..." className="rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-xs font-semibold text-navy">Student Name *</Label>
                      <Input required placeholder="Child's full name" className="rounded-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-xs font-semibold text-navy">Student Age</Label>
                      <Input type="text" placeholder="e.g. 7 years" className="rounded-sm" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-xs font-semibold text-navy">Class / Level Applying For *</Label>
                      <Select required>
                        <SelectTrigger className="rounded-sm">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          {schoolLevels.map((level) => (
                            <SelectItem key={level.name} value={level.name}>
                              {level.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-semibold text-navy">Day or Boarding *</Label>
                    <Select required>
                      <SelectTrigger className="rounded-sm">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Day Schooling</SelectItem>
                        <SelectItem value="boarding">Boarding</SelectItem>
                        <SelectItem value="undecided">Undecided / Need More Info</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-semibold text-navy">Message / Additional Information</Label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us anything else that would help us assist you..."
                      className="rounded-sm resize-y"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 bg-burgundy px-6 py-4 text-xs font-bold text-white rounded transition-all hover:-translate-y-0.5 hover:shadow-lg hover:bg-burgundy-dark mt-2"
                  >
                    Submit Enquiry <Send size={15} />
                  </button>
                  <p className="text-[11px] leading-relaxed text-gray-400 text-center">
                    Your information is used solely for admissions communication. We will never share your details
                    with third parties. For help, call +234 802 497 1023.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ADMISSIONS ===== */}
      <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 font-serif text-[180px] leading-none text-white/[0.03] select-none pointer-events-none -mr-8 mt-4">
          ICAST
        </div>
        <div className="mx-auto w-[min(1160px,calc(100%-64px))] relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Eyebrow text="Contact Admissions" light />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Prefer to speak <em className="text-gold font-serif font-medium">directly?</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 max-w-lg text-sm leading-[1.75] text-white/70">
                Our admissions team is ready to answer your questions, arrange a campus visit or guide you through
                the application process. We&apos;re here to help.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-white/5 border border-white/15 p-8 md:p-10"
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
              <div className="flex items-start gap-3 mb-5">
                <PhoneCall className="text-gold flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-gold-light font-bold mb-1">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-white">+234 802 497 1023</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-7">
                <Clock3 className="text-gold flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-gold-light font-bold mb-1">School Hours</p>
                  <p className="text-sm text-white/85">Monday – Friday<br />8:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+2348024971023"
                  className="inline-flex items-center gap-2 bg-white text-navy px-4 py-3 text-xs font-bold rounded transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <PhoneCall size={15} /> Call the School
                </a>
                <a
                  href="https://wa.me/2348024971023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-navy px-4 py-3 text-xs font-bold rounded transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <MessageCircle size={15} /> Chat on WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Elebu+Ibadan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 text-white px-4 py-3 text-xs font-bold rounded transition-all hover:bg-white/10"
                >
                  <MapPin size={15} /> Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 md:py-32 bg-warm">
        <div className="mx-auto w-[min(1160px,calc(100%-64px))]">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions parents"
            highlight="often ask."
            aside="Can't find what you're looking for? Contact our admissions team directly."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqItems.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-gray-100 px-5 [&[data-state=open]]:border-burgundy/30"
                >
                  <AccordionTrigger className="text-sm font-semibold text-navy hover:no-underline py-5 text-left [&[data-state=open]]:text-burgundy">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[13px] leading-relaxed text-gray-500 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 md:py-32 bg-burgundy text-white relative overflow-hidden">
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
              <span className="text-[11px] font-bold uppercase tracking-[0.14em]">Join ICAST</span>
              <span className="h-px w-7 bg-gold" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Ready to begin the <em className="text-gold font-serif font-medium">journey?</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-sm leading-[1.75] text-white/75 max-w-xl mx-auto">
              Take the first step towards giving your child an environment where academic excellence, character,
              technology and personal development come together.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-2.5 bg-white text-navy px-6 py-4 text-xs font-bold rounded transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Start Admission Enquiry <ArrowRight size={16} />
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