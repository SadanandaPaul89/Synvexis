import styles from "./page.module.css";
import React from 'react';
import Image from 'next/image';
import { Rocket, Zap, Palette, Sparkles, Bot, Truck } from 'lucide-react';

// --- Modern React Component Pattern ---

const Navbar = () => (
  <nav className={`${styles.nav} glass-panel`}>
    <div className={styles.logo}>SYNVEXIS<span className="accent-text"> DIGITAL</span></div>
    <div className={styles.navLinks}>
      <a href="#about">About</a>
      <a href="#projects">Work</a>
      <a href="#contact" className={styles.contactBtn}>Contact Us</a>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className={`${styles.section} ${styles.hero}`}>
    <div className={styles.heroGlow}></div>
    <div className={`${styles.heroCard} glass-panel animate-fade-in-up`}>
      <div className={styles.badge}>Next-Gen Digital Agency</div>
      <h1 className={styles.title}>
        Engineering <span className="gradient-text">Digital</span><br />
        <span className="accent-text">Excellence</span>
      </h1>
      <p className={styles.subtitle}>
        We craft bespoke, high-performance web applications that elevate your brand and dominate the digital landscape.
      </p>
      <div className={styles.ctaGroup}>
        <a href="#projects" className={styles.primaryBtn}>View Our Work</a>
        <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
      </div>
    </div>
  </section>
);

const AboutBento = () => (
  <section id="about" className={`${styles.section} ${styles.about}`}>
    <div className={styles.sectionHeader}>
      <h2 className="gradient-text">Who We Are</h2>
      <div className={styles.divider}></div>
    </div>
    <div className={styles.bentoGrid}>
      <div className={`${styles.bentoCard} ${styles.bentoLarge} glass-panel`}>
        <div className={styles.bentoIcon}><Rocket size={32} /></div>
        <h3>Visionaries in Code</h3>
        <p>At Synvexis Digital, we merge cutting-edge technology with stunning design to create digital experiences that leave a lasting impression. We don't just build sites; we build scalable digital solutions.</p>
      </div>
      <div className={`${styles.bentoCard} glass-panel`}>
        <div className={styles.bentoIcon}><Zap size={32} /></div>
        <h3>Performance First</h3>
        <p>Optimized for millisecond load times and perfect Lighthouse scores.</p>
      </div>
      <div className={`${styles.bentoCard} glass-panel`}>
        <div className={styles.bentoIcon}><Palette size={32} /></div>
        <h3>Premium Aesthetics</h3>
        <p>Bespoke design systems that demand attention and drive conversions.</p>
      </div>
    </div>
  </section>
);

const projects = [
  {
    name: "Looklist",
    url: "https://looklist.co.uk",
    description:
      "A community-driven UK marketplace to discover and book trusted local beauty & wellness professionals — from hair and nails to skincare and barbering. Connects users with verified merchants via seamless category browsing and instant booking.",
    tags: ["Supabase", "JavaScript", "Beauty Tech"],
    logo: "https://www.google.com/s2/favicons?domain=looklist.co.uk&sz=128",
    accent: "var(--accent-primary)",
  },
  {
    name: "Tan AI",
    url: "https://looklist.co.uk/tan/",
    description:
      "A sophisticated 24/7 AI assistant built into the Looklist platform. Supports text, voice (\"Hey Tan\" wake-word), and camera inputs including sign language — making beauty service discovery fully accessible and hands-free.",
    tags: ["AI/ML", "Voice UI", "Accessibility"],
    logo: "https://www.google.com/s2/favicons?domain=looklist.co.uk&sz=128",
    accent: "var(--accent-secondary)",
  },
  {
    name: "NNZ Logistics LLC",
    url: "https://nnzlogisticsllc.com",
    description:
      "Family-owned trucking company based in Romulus, Michigan with 25+ years of experience. Specialises in Amazon Dedicated routes and nationwide OTR freight, featuring a full online driver application, FAQ, and light/dark mode UI.",
    tags: ["Next.js", "Trucking", "Amazon Logistics"],
    logo: "https://www.google.com/s2/favicons?domain=nnzlogisticsllc.com&sz=128",
    accent: "var(--accent-primary)",
  },
];

const ProjectsSection = () => (
  <section id="projects" className={`${styles.section} ${styles.projects}`}>
    <div className={styles.sectionHeader}>
      <h2 className="gradient-text">Featured Work</h2>
      <div className={styles.divider}></div>
      <p className={styles.sectionDesc}>A glimpse into our portfolio of digital success stories.</p>
    </div>

    <div className={styles.projectGrid}>
      {projects.map((project) => (
        <div key={project.name} className={`${styles.projectCard} glass-panel`}>
          <div className={styles.projectImagePlaceholder}>
            <div className={styles.placeholderGlow}></div>
            <Image src={project.logo} alt={`${project.name} logo`} width={90} height={90} className={styles.projectLogo} />
          </div>
          <div className={styles.projectInfo}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className={styles.tagRow}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Visit Live Site →
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ContactFooter = () => (
  <>
    <section id="contact" className={`${styles.section} ${styles.contact}`}>
      <div className={`${styles.contactBanner} glass-panel`}>
        <h2 className="gradient-text">Ready to launch?</h2>
        <p>Let's turn your vision into reality with a world-class platform.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', fontSize: '1.1rem' }}>
          <div><strong>Email:</strong> <a href="mailto:Synvexisdigital@gmail.com" className="accent-text">Synvexisdigital@gmail.com</a></div>
          <div><strong>Discord:</strong> <span className="accent-text">spaghetti8650</span></div>
        </div>
      </div>
    </section>

    <footer className={`${styles.footer} glass-panel`}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>SYNVEXIS<span className="accent-text"> DIGITAL</span></div>
        <p>© {new Date().getFullYear()} Synvexis Digital. All rights reserved.</p>
      </div>
    </footer>
  </>
);

// --- Main Page Component ---
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
        <AboutBento />
        <ProjectsSection />
        <ContactFooter />
      </main>
    </div>
  );
}
