// src/pages/download.js

import React from 'react';
import Layout from '@theme/Layout';
import styles from './download.module.css';

export default function Download() {
  return (
    <Layout title="Download">
      <main className={styles.downloadContainer}>


        <section className={styles.latestVersion}>
          <div className={styles.card}>
            <h3>Version 1.1.0</h3>
            <p className={styles.releaseDate}>Released on 2024-11-08</p>
            <p>Check change logs <a href="/changelogs">HERE</a></p>
            <a
              className={styles.downloadButton}
              href="https://www.mediafire.com/folder/jtlpl10wk86py/Obsidian_Essentials"
              download
            >
              Download v1.2.0
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
