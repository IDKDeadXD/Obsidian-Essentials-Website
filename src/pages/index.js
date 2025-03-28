import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import { useState } from 'react';
import DownloadModal from '../components/DownloadModal';

function HomepageHeader({ setModalOpen }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <button
            className="button button--secondary button--lg"
            onClick={() => setModalOpen(true)}
          >
            Download
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Layout description="The best Essential's add-on in all of Minecraft">
      <HomepageHeader setModalOpen={setModalOpen} />
      
      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      
      <main>
        <hr style={{ opacity: "0" }}></hr>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: '90%',
              display: 'flex',
              gap: '10px',
              margin: '10px',
            }}
            className="mobile-card-list"
          >
            <div className="card feature-card">
              <div className="card__body">
                <h4>Custom Commands</h4>
                <small>
                  There are a lot of custom commands in this add-on, so we recommend you take a look at our docs!
                </small>
              </div>
              <div className="card__footer">
                <a href="./docs/custom_commands">
                  <button className="button button--primary button--block">View Documentation</button>
                </a>
              </div>
            </div>
            <div className="card feature-card">
              <div className="card__body">
                <h4>Having Issues?</h4>
                <small>Check out our FAQ page for help!</small>
              </div>
              <div className="card__footer">
                <a href="./docs/Getting_Started">
                  <button className="button button--primary button--block">FAQ</button>
                </a>
              </div>
            </div>
          </div>
          <h6 style={{ opacity: "0.5" }}></h6>
        </div>
      </main>

      <footer
        style={{
          textAlign: 'center',
          marginTop: '20px',
          padding: '10px 0',
          borderTop: '1px solid #ddd',
          opacity: '0.7',
        }}
      >
        &copy; {new Date().getFullYear()} Dead Studios. All rights reserved.
      </footer>
    </Layout>
  );
}