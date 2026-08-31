"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Brain,
  Building2,
  ChevronRight,
  Clock3,
  FlaskConical,
  GraduationCap,
  Heart,
  Laptop,
  Menu,
  Microscope,
  Music2,
  Phone,
  Quote,
  School,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";


const photos = {
  learning:
    "/images/student-class.png",
  technology:
    "https://images.pexels.com/photos/11025019/pexels-photo-11025019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  science:
    "https://images.pexels.com/photos/8617836/pexels-photo-8617836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  sports:
    "https://images.pexels.com/photos/37163764/pexels-photo-37163764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  classroom:
    "https://images.pexels.com/photos/8617940/pexels-photo-8617940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  lab: 
  "/images/lab-student.png"
};



const levels = [
  {
    icon: Heart,
    title: "Creche",
    text: "A warm, nurturing start where curiosity, confidence and connection begin.",
  },
  {
    icon: Sparkles,
    title: "Nursery",
    text: "Playful foundations that make every child eager to discover more.",
  },
  {
    icon: BookOpen,
    title: "Primary",
    text: "Strong literacy, numeracy and character foundations for lifelong learning.",
  },
  {
    icon: GraduationCap,
    title: "Secondary",
    text: "Focused preparation for higher education, leadership and the world beyond.",
  },
];

const reasons = [
  {
    icon: Award,
    title: "Academic excellence",
    text: "A high-expectation culture supported by attentive, experienced educators.",
  },
  {
    icon: ShieldCheck,
    title: "Character first",
    text: "We develop disciplined, compassionate young people who lead with integrity.",
  },
  {
    icon: Laptop,
    title: "Future-ready learning",
    text: "Technology, science and practical skills woven into everyday learning.",
  },
  {
    icon: Users,
    title: "Every child seen",
    text: "A supportive community that recognises each student’s strengths and ambitions.",
  },
];

const gallery = [
  {
    src: photos.science,
    title: "Science in action",
    className: "gallery-wide",
  },
  { src: photos.sports, title: "Team spirit", className: "gallery-tall" },
  { src: photos.technology, title: "Digital learning", className: "" },
  { src: photos.classroom, title: "Learning together", className: "" },
];

export default function Home() {
 
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <main>
      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy animate-in">
            <p className="eyebrow">
              <span /> International College of Arts, Science & Technology
            </p>
            <h1>
              Preparing students for a <em>changing world.</em>
            </h1>
            <p className="hero-text">
              A confident beginning for a remarkable future. ICAST provides a
              quality, character-led education from Creche through Secondary,
              with day and boarding options.
            </p>
            <div className="hero-actions">
              <a className="button button-burgundy" href="#admissions">
                Begin your journey <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#about">
                Discover ICAST <ChevronRight size={17} />
              </a>
            </div>
            <div className="hero-note">
              <div className="avatar-stack">
                <span>O</span>
                <span>A</span>
                <span>F</span>
              </div>
              <span>
                Trusted by families across Ibadan
                <br />
                <strong>for over a decade</strong>
              </span>
            </div>
          </div>
          <div className="hero-image-wrap animate-in-delayed">
            <img
              src="/images/icast-students.png"
              alt="ICAST students in uniform standing on campus"
              className="hero-image"
            />
            <div className="hero-image-label">
              <span className="label-dot" />
              <span>
                <strong>Learn. Lead. Belong.</strong>
                <small>Elebu, Ibadan</small>
              </span>
            </div>
            <div className="hero-year">
              <strong>21st</strong>
              <span>
                Century
                <br />
                learning
              </span>
            </div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
          <span>01 / 06</span>
        </div>
      </section>

      <section className="highlights">
        <div className="container highlights-grid">
          <div className="highlight-intro">
            <span className="section-number">01</span>
            <p>
              More than a school.
              <br />
              <strong>A community for growth.</strong>
            </p>
          </div>
          <div className="highlight">
            <GraduationCap />
            <strong>Creche to Secondary</strong>
            <span>One continuous journey</span>
          </div>
          <div className="highlight">
            <Building2 />
            <strong>Day & Boarding</strong>
            <span>Home away from home</span>
          </div>
          <div className="highlight">
            <Brain />
            <strong>Future-ready</strong>
            <span>21st-century skills</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="image-collage">
            <Image
              src={photos.learning}
              alt="Students learning with their teacher"
              width={480}
              height={420}
            />
            <div className="collage-card">
              <span className="gold-icon">
                <Trophy size={18} />
              </span>
              <strong>
                Purposeful
                <br />
                education
              </strong>
              <small>Knowledge with character</small>
            </div>
            <span className="collage-stamp">
              ICAST
              <br />
              <small>EST. 2012</small>
            </span>
          </div>
          <div className="section-copy">
            <p className="eyebrow">
              <span /> About ICAST
            </p>
            <h2>
              Where bright minds find their <em>direction.</em>
            </h2>
            <p>
              At ICAST, we believe education should do more than prepare a child
              for an exam. It should help them understand themselves, engage the
              world and find the confidence to make a meaningful difference.
            </p>
            <p>
              From our classrooms to our clubs, every experience is designed to
              build academic strength, character and the courage to keep asking
              better questions.
            </p>
            <a className="text-link burgundy-link" href="#academics">
              More about our story <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section academics-section" id="academics">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">
                <span /> The ICAST journey
              </p>
              <h2>
                Room to grow at <em>every stage.</em>
              </h2>
            </div>
            <p className="heading-aside">
              A thoughtful progression from a child&apos;s first classroom to the
              next big chapter.
            </p>
          </div>
          <div className="levels-grid">
            {levels.map(({ icon: Icon, title, text }, index) => (
              <a className="level-card" href="#admissions" key={title}>
                <span className="level-index">0{index + 1}</span>
                <Icon size={26} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-arrow">
                  <ArrowRight size={17} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="innovation-section">
        <div className="container innovation-grid">
          <div className="innovation-copy">
            <p className="eyebrow eyebrow-light">
              <span /> The ICAST difference
            </p>
            <h2>
              Learning for the world that&apos;s <em>next.</em>
            </h2>
            <p>
              Our students don&apos;t just consume technology. They learn to
              question, create and use it thoughtfully — alongside a strong
              grounding in science, arts and human connection.
            </p>
            <div className="innovation-list">
              <span>
                <Microscope size={18} /> Science & practical discovery
              </span>
              <span>
                <Laptop size={18} /> Digital literacy & ICT
              </span>
              <span>
                <FlaskConical size={18} /> STEM thinking & problem-solving
              </span>
            </div>
            <a className="button button-light" href="#contact">
              Explore our approach <ArrowRight size={16} />
            </a>
          </div>
          <div className="innovation-image">
            <img
              src={photos.technology}
              alt="Students collaborating with a laptop"
            />
            <div className="innovation-badge">
              <span>Think</span>
              <strong>create</strong>
              <span>impact</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section reasons-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">
                <span /> Why families choose ICAST
              </p>
              <h2>
                A strong start for an <em>extraordinary life.</em>
              </h2>
            </div>
            <p className="heading-aside">
              The details matter. So does the feeling a child carries home each
              day.
            </p>
          </div>
          <div className="reasons-grid">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div className="reason" key={title}>
                <span className="reason-icon">
                  <Icon size={20} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="boarding-section">
        <div className="container boarding-grid">
          <div className="boarding-image">
            <img
              src={photos.classroom}
              alt="Students learning together in a classroom"
            />
            <div className="boarding-caption">
              <span>02</span>
              <strong>
                Belonging
                <br />
                beyond the bell.
              </strong>
            </div>
          </div>
          <div className="section-copy">
            <p className="eyebrow">
              <span /> Boarding at ICAST
            </p>
            <h2>
              A second home for <em>big ambitions.</em>
            </h2>
            <p>
              Our boarding community gives primary and secondary students a
              safe, structured and supportive environment to learn, rest and
              grow together.
            </p>
            <div className="mini-features">
              <span>
                <ShieldCheck /> Safeguarded & supervised
              </span>
              <span>
                <Users /> Community-led living
              </span>
              <span>
                <BookOpen /> Evening academic support
              </span>
              <span>
                <Heart /> Wellbeing at the centre
              </span>
            </div>
            <a className="text-link burgundy-link" href="#contact">
              Explore boarding <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section life-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">
                <span /> Life beyond the classroom
              </p>
              <h2>
                Find your people. Find your <em>spark.</em>
              </h2>
            </div>
            <a className="text-link burgundy-link heading-link" href="#gallery">
              View student life <ArrowRight size={16} />
            </a>
          </div>
          <div className="life-grid">
            <div className="life-feature">
              <Image
                src={photos.lab}
                alt="Students playing football together"
                width={300}
                height={300}
                loading="lazy"
              />
              <div>
                <span>01 / Sport</span>
                <h3>Teamwork becomes second nature.</h3>
              </div>
            </div>
            <div className="life-list">
              <div>
                <Music2 />
                <span>
                  <strong>Arts & creativity</strong>
                  <small>Make space for expression.</small>
                </span>
                <ArrowRight />
              </div>
              <div>
                <Trophy />
                <span>
                  <strong>Leadership & debate</strong>
                  <small>Find your voice and use it well.</small>
                </span>
                <ArrowRight />
              </div>
              <div>
                <FlaskConical />
                <span>
                  <strong>Clubs & societies</strong>
                  <small>Follow your curiosity further.</small>
                </span>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="section-heading-row gallery-heading">
            <div>
              <p className="eyebrow eyebrow-light">
                <span /> A glimpse of ICAST
              </p>
              <h2>
                Curious minds, <em>in motion.</em>
              </h2>
            </div>
            <span className="gallery-note">
              Every day is a chance to discover something new.
            </span>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div
                className={`gallery-item ${item.className}`}
                key={item.title}
              >
                <img src={item.src} alt={item.title} />
                <span>
                  {item.title}
                  <ArrowUpRight size={15} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container testimonial-grid">
          <div className="quote-mark">
            <Quote size={34} />
          </div>
          <div>
            <blockquote>
              “ICAST has given our daughter the confidence to speak up, the
              discipline to work hard and the freedom to explore what she
              loves.”
            </blockquote>
            <div className="testimonial-person">
              <span className="testimonial-avatar">AM</span>
              <span>
                <strong>Mrs. Adeola Martins</strong>
                <small>Parent, ICAST Secondary</small>
              </span>
            </div>
          </div>
          <div className="testimonial-count">
            01 <span>/ 03</span>
          </div>
        </div>
      </section>

      <section className="admissions-section" id="admissions">
        <div className="container admissions-grid">
          <div>
            <p className="eyebrow eyebrow-light">
              <span /> Admissions are open
            </p>
            <h2>
              Give your child a place to <em>become.</em>
            </h2>
            <p>
              Come and see what makes ICAST feel different. Our admissions team
              is ready to help you take the next step.
            </p>
            <div className="admissions-actions">
              <a className="button button-light" href="#contact">
                Start your application <ArrowRight size={16} />
              </a>
              <a className="phone-link" href="tel:+2348024971023">
                <Phone size={17} /> Speak to admissions
              </a>
            </div>
          </div>
          <div className="admissions-detail">
            <span className="detail-icon">
              <School size={22} />
            </span>
            <strong>Visit our Elebu campus</strong>
            <p>
              123, Oyinloye Olawale Street,
              <br />
              Aba Bashorun Road, Elebu, Ibadan.
            </p>
            <a href="#contact">
              Get directions <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="section-copy">
            <p className="eyebrow">
              <span /> Let’s talk
            </p>
            <h2>
              Questions? We’re <em>here to help.</em>
            </h2>
            <p>
              Whether you’re considering your child’s next step or simply want
              to learn more about life at ICAST, we’d love to hear from you.
            </p>
            <div className="contact-details">
              <a href="tel:+2348024971023">
                <Phone size={17} />
                <span>
                  <small>Call or WhatsApp</small>
                  <strong>+234 802 497 1023</strong>
                </span>
              </a>
              <div>
                <Clock3 size={17} />
                <span>
                  <small>School hours</small>
                  <strong>Mon – Fri, 8:00 AM – 6:00 PM</strong>
                </span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            {formSent ? (
              <div className="form-success">
                <span>
                  <Sparkles />
                </span>
                <h3>Thank you for reaching out.</h3>
                <p>Our admissions team will be in touch with you shortly.</p>
                <button
                  type="button"
                  className="text-link burgundy-link"
                  onClick={() => setFormSent(false)}
                >
                  Send another message <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      required
                      type="text"
                      placeholder="e.g. Adeola Martins"
                    />
                  </label>
                  <label>
                    Phone number
                    <input required type="tel" placeholder="+234 ..." />
                  </label>
                </div>
                <label>
                  Email address
                  <input required type="email" placeholder="you@example.com" />
                </label>
                <label>
                  How can we help?
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us a little about your enquiry..."
                  />
                </label>
                <button className="button button-burgundy" type="submit">
                  Send enquiry <ArrowRight size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
