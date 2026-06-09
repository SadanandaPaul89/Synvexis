"use client";

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { JsonLdSchema } from './components/JsonLdSchema';

interface Project {
  name: string;
  client: string;
  type: 'domestic' | 'foreign';
  badgeLabel: string;
  badgeClass: 'domestic' | 'foreign';
  description: string;
  tags: string[];
  url: string;
}

const projects: Project[] = [
  {
    name: "Looklist - Beauty Service Aggregator",
    client: "Looklist LLC · UK",
    type: "foreign",
    badgeLabel: "International",
    badgeClass: "foreign",
    description: "Looklist is a UK-based beauty and lifestyle booking platform that helps users discover, book, and manage local beauty and personal care services through a modern and accessible digital experience.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    url: "https://looklist.co.uk/"
  },
  {
    name: "AI Chatbot for Customer Support",
    client: "Looklist LLC · UK",
    type: "foreign",
    badgeLabel: "International",
    badgeClass: "foreign",
    description: "TAN AI is an accessibility-focused communication assistant designed to improve digital interaction through features such as voice assistance and sign language integration, enabling more inclusive and user-friendly experiences across modern platforms.",
    tags: ["Python", "FastAPI", "Machine Learning"],
    url: "https://looklist.co.uk/tan"
  },
  {
    name: "Kalyraa - E-Commerce Platform",
    client: "Kalyraa · E-Commerce Platform",
    type: "domestic",
    badgeLabel: "Domestic",
    badgeClass: "domestic",
    description: "Kalyraa is an E-commerce platform oriented to handcrafted products, connecting artisans with customers seeking unique and high-quality items through a modern and intuitive digital experience.",
    tags: ["Express.js", "Node.js", "SQLite"],
    url: "https://kalyraa.com"
  },
  {
    name: "NnZ Logistics - Logistics Platform",
    client: "NnZ LLC · USA",
    type: "foreign",
    badgeLabel: "International",
    badgeClass: "foreign",
    description: "Family-owned trucking company based in Romulus, Michigan with 25+ years of experience. Specialises in Amazon Dedicated routes and nationwide OTR freight, featuring a full online driver application",
    tags: ["Next.js", "PostgreSQL", "FASTAPI"],
    url: "https://nnzlogisticsllc.com"
  },
  {
    name: "Synvexis Billing Pro",
    client: "· Efficient Billing Software",
    type: "domestic",
    badgeLabel: "Domestic",
    badgeClass: "domestic",
    description: "High Efficient billing software aimed at automating billing and maintaining client records",
    tags: ["Flutter", "Node.js", "SQLite"],
    url: "#"
  },
  {
    name: "Synvexis Restaurant Management",
    client: "· Restaurant Management System",
    type: "domestic",
    badgeLabel: "Domestic",
    badgeClass: "domestic",
    description: "Effective automation of restaurant operations including table reservations, order taking and billing and inventory management. Aims to improve efficiency and provide a luxurious and futuristic experience to the customers",
    tags: ["Flutter", "Node.js", "SQLite"],
    url: "#"
  },
  {
    name: "Sonic Wave - Blockchain based music streaming platform",
    client: "· Blockchain based music streaming platform",
    type: "domestic",
    badgeLabel: "Domestic",
    badgeClass: "domestic",
    description: "Sonic Wave is a decentralized music streaming platform built on blockchain technology. It aims to provide a transparent and equitable ecosystem for artists and listeners, ensuring fair compensation and ownership of music rights through smart contracts and distributed ledger technology.",
    tags: ["React.js", "Node.js", "PostgreSQL", "IPFS", "Multi-Chain", "Solidity"],
    url: "https://realsonicwave.one"
  }
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'domestic' | 'foreign'>('all');
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    brief: ''
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.brief) {
      setSubmitStatus('Please fill in all required fields.');
      return;
    }
    // Simulation of submission
    setSubmitStatus('Thank you! Your message has been sent. We will get back to you shortly.');
    setFormState({
      name: '',
      company: '',
      email: '',
      brief: ''
    });
  };

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.type === activeFilter
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.synvexis.digital/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.synvexis.digital/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Our Work",
        "item": "https://www.synvexis.digital/#projects"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Synvexis Digital",
    "description": "Premium web development and digital product design agency",
    "url": "https://www.synvexis.digital",
    "image": "https://www.synvexis.digital/cyberpunk-bg.jpg",
    "knowsAbout": [
      "Web Development",
      "UI/UX Design",
      "Next.js",
      "React Development",
      "Digital Product Design",
      "Custom Web Applications"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Development",
            "description": "Bespoke web applications built with modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Product Design",
            "description": "High-performance design systems and user interfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Premium aesthetic design with focus on conversion optimization"
          }
        }
      ]
    }
  };

  return (
    <>
      <JsonLdSchema data={breadcrumbSchema} />
      <JsonLdSchema data={serviceSchema} />
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-orb"></div>
        <p className="hero-eyebrow">Synvexis Private Limited</p>
        <h1 className="hero-title">
          Engineering<br />
          <strong>Digital Excellence</strong>
        </h1>
        <p className="hero-sub">
          End-to-end software and IT solutions for businesses across India and beyond — built with precision, delivered with integrity.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Our Work</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-val">10+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div>
            <div className="stat-val">8+</div>
            <div className="stat-label">Global Clients</div>
          </div>
          <div>
            <div className="stat-val">2+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div>
            <div className="stat-val">4</div>
            <div className="stat-label">Countries Served</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <p className="section-eyebrow reveal">Who We Are</p>
        <h2 className="section-title reveal">Built on <strong>expertise.</strong><br />Driven by <strong>results.</strong></h2>
        <div className="divider reveal"></div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Synvexis Private Limited is a technology-first company delivering robust software and IT solutions to clients across domestic and international markets. Founded with a commitment to quality and innovation, we partner with businesses to solve complex challenges through clean, scalable technology.
            </p>
            <p>
              From custom application development and enterprise integrations to cloud infrastructure and digital transformation — our multidisciplinary team brings deep technical expertise and a client-first mindset to every engagement.
            </p>
            <p>
              We&apos;ve had the privilege of working with clients across industries including finance, healthcare, logistics, and retail — spanning India, the Middle East, Europe, and Southeast Asia.
            </p>
          </div>
          <div className="about-pillars reveal">
            <div className="pillar">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 19.48 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605Z" />
                </svg>
              </div>
              <div className="pillar-title">Technical Depth</div>
              <div className="pillar-desc">Senior engineers with hands-on experience across modern stacks and legacy systems.</div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="pillar-title">Global Reach</div>
              <div className="pillar-desc">Proven delivery across geographies with an understanding of international standards.</div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="pillar-title">Security-First</div>
              <div className="pillar-desc">Security and compliance built into every layer — not an afterthought.</div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <div className="pillar-title">Scalable Thinking</div>
              <div className="pillar-desc">Solutions designed to grow with your business, not constrain it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <p className="section-eyebrow reveal">What We Do</p>
        <h2 className="section-title reveal">Our <strong>Core Services</strong></h2>
        <div className="divider reveal"></div>
        <p className="section-lead reveal">From concept to deployment — we cover every phase of the software development lifecycle.</p>

        <div className="services-grid" style={{ marginTop: '3.5rem' }}>
          <div className="service-card reveal">
            <div className="service-num">01</div>
            <div className="service-title">Custom Software Development</div>
            <div className="service-desc">Bespoke applications designed around your business logic — web, mobile, and desktop. Agile delivery with full transparency at every sprint.</div>
            <div className="service-tags">
              <span className="tag">Web Apps</span>
              <span className="tag">Mobile</span>
              <span className="tag">APIs</span>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-num">02</div>
            <div className="service-title">Enterprise Integration</div>
            <div className="service-desc">Seamless integration of ERP, CRM, and third-party platforms. We connect your ecosystem so your teams work smarter.</div>
            <div className="service-tags">
              <span className="tag">ERP</span>
              <span className="tag">CRM</span>
              <span className="tag">Middleware</span>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-num">03</div>
            <div className="service-title">Cloud & Infrastructure</div>
            <div className="service-desc">Cloud architecture, migration, and managed services on AWS, Azure, and GCP. Reliable, cost-efficient, and highly available.</div>
            <div className="service-tags">
              <span className="tag">AWS</span>
              <span className="tag">Azure</span>
              <span className="tag">DevOps</span>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-num">04</div>
            <div className="service-title">UI / UX Design</div>
            <div className="service-desc">Interfaces that users actually enjoy. From wireframes to high-fidelity prototypes — we design for clarity, conversion, and delight.</div>
            <div className="service-tags">
              <span className="tag">Figma</span>
              <span className="tag">Prototyping</span>
              <span className="tag">Research</span>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-num">05</div>
            <div className="service-title">Data & Analytics</div>
            <div className="service-desc">Turn raw data into strategic insight. Dashboards, pipelines, and BI solutions that empower decision-makers at every level.</div>
            <div className="service-tags">
              <span className="tag">BI</span>
              <span className="tag">Pipelines</span>
              <span className="tag">ML</span>
            </div>
          </div>
          <div className="service-card reveal">
            <div className="service-num">06</div>
            <div className="service-title">IT Consulting</div>
            <div className="service-desc">Strategic technology advisory — from digital transformation roadmaps to architecture reviews and vendor selection.</div>
            <div className="service-tags">
              <span className="tag">Strategy</span>
              <span className="tag">Audit</span>
              <span className="tag">Roadmap</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="projects-header">
          <div>
            <p className="section-eyebrow reveal">Case Studies</p>
            <h2 className="section-title reveal">Selected <strong>Projects</strong></h2>
            <div className="divider reveal"></div>
          </div>
          <div className="filter-tabs reveal">
            <button className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
            <button className={`filter-tab ${activeFilter === 'domestic' ? 'active' : ''}`} onClick={() => setActiveFilter('domestic')}>Domestic</button>
            <button className={`filter-tab ${activeFilter === 'foreign' ? 'active' : ''}`} onClick={() => setActiveFilter('foreign')}>International</button>
          </div>
        </div>

        <div className="projects-grid" id="projectsGrid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card" data-type={project.type}>
              <div className="project-header">
                <span className={`project-badge ${project.badgeClass}`}>{project.badgeLabel}</span>
                <span className="project-arrow">↗</span>
              </div>
              <div className="project-title">{project.name}</div>
              <div className="project-client">{project.client}</div>
              <p className="project-desc">{project.description}</p>
              <div className="project-stack">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="stack-tag">{tag}</span>
                ))}
              </div>
              <a href={project.url} target={project.url.startsWith('http') ? '_blank' : undefined} rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="project-link">
                View Project ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <p className="section-eyebrow reveal">Get In Touch</p>
        <h2 className="section-title reveal">Let&apos;s Build<br /><strong>Something Together</strong></h2>
        <div className="divider reveal"></div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <p>Whether you have a project in mind, need a consultation, or want to explore how Synvexis can help your organisation — we&apos;d love to hear from you.</p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Office</div>
                  <div className="contact-detail-val">Missamari, Helem, Assam, India</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-val">synvexisdigital@gmail.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92Z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-val">+91 6001580191</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Website</div>
                  <div className="contact-detail-val">www.synvexis.digital</div>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" className="form-input" placeholder="John Smith" value={formState.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="company">Company</label>
                <input type="text" id="company" name="company" className="form-input" placeholder="Your Company" value={formState.company} onChange={handleInputChange} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="john@company.com" value={formState.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="brief">Project Brief *</label>
              <textarea id="brief" name="brief" className="form-textarea" placeholder="Tell us about your project, timeline, and goals..." value={formState.brief} onChange={handleInputChange} required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
            {submitStatus && <p style={{ marginTop: '1rem', color: 'var(--accent)', fontWeight: 500 }}>{submitStatus}</p>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Synvexis<span>.</span></div>
        <div className="footer-copy">© {new Date().getFullYear()} Synvexis Private Limited. All rights reserved.</div>
      </footer>
    </>
  );
}
