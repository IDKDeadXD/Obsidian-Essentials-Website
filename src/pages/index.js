import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import DownloadModal from '../components/DownloadModal';
import { ArrowRight, Download, Book, HelpCircle, Github } from 'lucide-react';

function HomepageHeader({ setModalOpen }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* Scrolling Background Container */}
      <div className={styles.heroBackgroundScroll}>
        {/* Two copies of the image for seamless looping */}
        <img
          src="/img/hero-image.png" // Use your 3532x700 image
          alt="Minecraft Essentials"
          className={styles.heroBackgroundImage}
          width={3532}
          height={490}
        />
        <img
          src="/img/hero-image.png" // Same image repeated
          alt="Minecraft Essentials"
          className={styles.heroBackgroundImage}
          width={3532}
          height={490}
        />
      </div>

      {/* Blurred Content Container (unchanged) */}
      <div className={styles.heroContentContainer}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <div className={styles.heroContent}>
                <Heading as="h1" className={styles.heroTitle}>
                  {siteConfig.title}
                </Heading>
                <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
                <div className={styles.buttonGroup}>
                  <button
                    className="button button--primary button--lg"
                    onClick={() => setModalOpen(true)}
                  >
                    <Download className={styles.buttonIcon} size={20} />
                    Download Now
                  </button>
                  <Link
                    className="button button--outline button--secondary button--lg"
                    to="/docs/Getting_Started"
                  >
                    <Book className={styles.buttonIcon} size={20} />
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  const features = [
    {
      title: 'Custom Commands',
      description: 'Enhance your Minecraft experience with powerful custom commands',
      icon: <ArrowRight size={24} />,
      link: '/docs/custom_commands'
    },
    {
      title: 'Easy Installation',
      description: 'Simple setup process gets you up and running in minutes',
      icon: <Download size={24} />,
      link: '/docs/Getting_Started'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials for all features',
      icon: <Book size={24} />,
      link: '/docs'
    },
    {
      title: 'Support',
      description: 'Active community and developer support',
      icon: <HelpCircle size={24} />,
      link: '/docs/Getting_Started'
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Everything You Need</Heading>
          <p>The ultimate Essentials add-on for Minecraft</p>
        </div>
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--3">
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.link} className={styles.featureLink}>
                  Learn more <ArrowRight size={16} className={styles.inlineIcon} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  const screenshots = [
    { title: 'Custom Commands', image: '/img/commands.png' },
    { title: 'Player Shops', image: '/img/player-shops.png' },
    { title: 'Rules', image: '/img/rules.png' }
  ];

  return (
    <section className={clsx(styles.showcase, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">See It In Action</Heading>
          <p>Screenshots of our add-on's features</p>
        </div>
        <div className="row">
          {screenshots.map((item, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.showcaseItem}>
                <img src={item.image} alt={item.title} className={styles.showcaseImage} />
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      quote: "This add-on has completely transformed my Minecraft server experience!",
      author: "MinecraftFan123"
    },
    {
      quote: "The custom commands are intuitive and save me hours of work.",
      author: "ServerAdmin42"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">What Players Say</Heading>
          <p>Loved by server admins and players alike</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="col col--6">
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <p className={styles.testimonialAuthor}>- {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction({ setModalOpen }) {
  return (
    <section className={styles.cta}>
      <div className="container">
        <Heading as="h2">Ready to enhance your Minecraft experience?</Heading>
        <p>Join thousands of players already using our add-on</p>
        <div className={styles.ctaButtons}>
          <button
            className="button button--primary button--lg"
            onClick={() => setModalOpen(true)}
          >
            Download Now
          </button>
          <Link
            to="/docs"
            className="button button--secondary button--lg"
          >
            Browse Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Layout 
      description="The best Essential's add-on in all of Minecraft"
      title={siteConfig.title}
      wrapperClassName="dark-theme"
    >
      <HomepageHeader setModalOpen={setModalOpen} />
      <main>
        <FeatureSection />
        <ShowcaseSection />
{/* <TestimonialSection /> */}
        <CallToAction setModalOpen={setModalOpen} />
      </main>

      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />

      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col col--4">
              <h3>Dead Studios</h3>
              <p>Creating the best Minecraft add-ons since 2022</p>
            </div>
            <div className="col col--4">
              <h3>Resources</h3>
              <ul className={styles.footerLinks}>
                <li><Link to="/docs">Documentation</Link></li>
                <li><Link to="/docs/Getting_Started">FAQ</Link></li>
                <li><Link to="/docs/custom_commands">Commands</Link></li>
              </ul>
            </div>
            <div className="col col--4">
              <h3>Connect</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon}><Github size={24} /></a>
                {/* Add more social icons as needed */}
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Dead Studios. All rights reserved.
          </div>
        </div>
      </footer>
    </Layout>
  );
}