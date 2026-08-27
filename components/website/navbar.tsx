
'use client'

import { ArrowRight, ChevronDown, ChevronRight, Clock3, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const logoImage = '/images/icast-logo.png'


    const navItems = [
      {
        label: "About",
        children: [
          {
            name: "About ICAST",
            href: "/about",
          },
          {
            name: "Our Mission & Vision",
            href: "/about/mission-vision",
          },
          {
            name: "Principal's Welcome",
            href: "/about/principals-welcome",
          },
          {
            name: "Why Choose ICAST",
            href: "/about/why-choose-icast",
          },
        ],
      },
      {
        label: "Academics",
        children: [
          {
            name: "Creche",
            href: "/academics/creche",
          },
          {
            name: "Nursery",
            href: "/academics/nursery",
          },
          {
            name: "Primary",
            href: "/academics/primary",
          },
          {
            name: "Secondary",
            href: "/academics/secondary",
          },
          {
            name: "Curriculum",
            href: "/academics/curriculum",
          },
        ],
      },
      {
        label: "Admissions",
        children: [
          {
            name: "Admission Process",
            href: "/admission",
          },
          {
            name: "Requirements",
            href: "/admissions/requirements",
          },
          {
            name: "School Fees",
            href: "/admissions/school-fees",
          },
          {
            name: "Request Information",
            href: "/admissions/request-information",
          },
        ],
      },
      {
        label: "Student Life",
        children: [
          {
            name: "Clubs & Societies",
            href: "/student-life/clubs-and-societies",
          },
          {
            name: "Sports",
            href: "/student-life/sports",
          },
          {
            name: "Arts & Creativity",
            href: "/student-life/arts-and-creativity",
          },
          {
            name: "Gallery",
            href: "/student-life/gallery",
          },
        ],
      },
      {
        label: "Boarding",
        children: [
          {
            name: "Boarding Overview",
            href: "/boarding",
          },
          {
            name: "Boarding Facilities",
            href: "/boarding/facilities",
          },
          {
            name: "Boarding Life",
            href: "/boarding/life",
          },
        ],
      },
      {
        label: "Facilities",
        children: [
          {
            name: "Science Laboratories",
            href: "/facilities/science-laboratories",
          },
          {
            name: "ICT / Technology",
            href: "/facilities/ict-technology",
          },
          {
            name: "Library",
            href: "/facilities/library",
          },
          {
            name: "Sports Facilities",
            href: "/facilities/sports",
          },
        ],
      },
      {
        label: "News & Events",
        children: [
          {
            name: "Latest News",
            href: "/news/latest",
          },
          {
            name: "School Events",
            href: "/news/events",
          },
          {
            name: "Announcements",
            href: "/news/announcements",
          },
        ],
      },
    ];
    
    const pageAddress = process.env.NODE_ENV === 'development' ? "http://localhost:3000/" : "https://icast-schools.vercel.app/"
  return (
    <>
    <div className='w-full'>
            <div className="topline">
              <div className="container topline-inner">
                <span>
                  <Clock3 size={14} /> Monday – Friday, 8:00 AM – 6:00 PM
                </span>
                <span className="topline-hide">
                  A place to learn, lead and belong.
                </span>
                <a href="tel:+2348024971023">
                  <Phone size={14} /> +234 802 497 1023
                </a>
              </div>
            </div>
    </div>
      
      
            <header className="site-header">
              <div className="container nav-inner">
                <a href="#top" className="brand" aria-label="ICAST Schools home">
                  <Image src={logoImage} alt='school-logo' width={20} height={20} className='object-contain lg:w-11 lg:h-11 w-8 h-8'/>
                  <span>
                    <strong>ICAST</strong>
                    <small>Schools</small>
                  </span>
                </a>
                <nav className="desktop-nav" aria-label="Primary navigation">
                  <a href="/" className="nav-home">
                    Home
                  </a>
                  {navItems.map((item) => (
                    <div className="nav-dropdown" key={item.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenu(openMenu === item.label ? null : item.label)
                        }
                        aria-expanded={openMenu === item.label}
                      >
                        {item.label}
                        <ChevronDown size={14} />
                      </button>
                      {openMenu === item.label && (
                        <div className="dropdown-panel">
                          {item.children.map((child, i) => (
                            <a href={`${child.href}`} key={i}>
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <a
                  className="button button-small button-burgundy nav-cta"
                  href="#admissions"
                >
                  Apply Now <ArrowRight size={15} />
                </a>
                <button
                  className="menu-button"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu />
                </button>
              </div>
            </header>
      
            {mobileOpen && (
              <div
                className="mobile-menu-backdrop"
                onClick={() => setMobileOpen(false)}
              >
                <aside
                  className="mobile-menu"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="mobile-menu-top">
                    <a href="#top" className="brand">
                      <Image src={logoImage} alt='school-logo' width={20} height={20} className='object-contain lg:w-11 lg:h-11 w-8 h-8'/>
                      <span>
                        <strong>ICAST</strong>
                        <small>Schools</small>
                      </span>
                    </a>
                    <button
                      onClick={() => setMobileOpen(false)}
                      aria-label="Close menu"
                    >
                      <X />
                    </button>
                  </div>
                  <nav>
                    {
                        navItems.map((nav) => {
                            return (
                            <a 
                            key={nav.label}
                            onClick={() => setMobileOpen(false)}
                            href={`${pageAddress}${nav.label.toLowerCase()}`}>
                                {nav.label}
                                <ChevronRight size={16}/>
                            </a>
                            )
                        })
                    }
                  </nav>
                  <a
                    className="button button-burgundy"
                    href="#admissions"
                    onClick={() => setMobileOpen(false)}
                  >
                    Apply Now <ArrowRight size={16} />
                  </a>
                </aside>
              </div>
            )}
    </>
  )
}

export default Navbar
