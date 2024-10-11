import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import { useEffect, useState } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.mediafire.com/file/rpq6mn754cywivn/Realm_Essentials_V.1.0.1.mcaddon/file">
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="The best Essential's add-on in all of minecraft">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
      <hr style={{ opacity: "0" }}></hr>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px"
      }}>
        <div style={{
          width: '90%',
          display: 'flex',
          gap: '10px',
          margin: '10px'
        }} className='mobile-card-list'>
          <div className="card feature-card">
            <div className="card__body">
              <h4>Custom Commands</h4>
              <small>
                there is a lot of custom commands in this add-on, so we recommend you take a look at our docs!
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
              <small>
                Check out our FAQ page for help!
              </small>
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
      <footer style={{
        textAlign: 'center',
        marginTop: '20px',
        padding: '10px 0',
        borderTop: '1px solid #ddd',
        opacity: '0.7'
      }}>
        &copy; {new Date().getFullYear()} Dead Studios. All rights reserved.
      </footer>
    </Layout>
  );
}
