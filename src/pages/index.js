import clsx from 'clsx';
import Layout from '@theme/Layout';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout description="Website under construction. For assistance, join our Discord.">
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#333' }}>
          Website Under Construction
        </h1>
        <p style={{ fontSize: '1rem', color: '#777', marginBottom: '20px' }}>
          We're currently revamping our site. If you need assistance, feel free to join our Discord or visit our GitHub.
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          fontSize: '1.5rem',
        }}>
          <a href="https://discord.gg/CDbtnyJMUY" target="_blank" rel="noopener noreferrer" style={{ color: '#7289da' }}>
            <FaDiscord />
          </a>
          <a href="https://github.com/deadstudios/Obsidian-Essentials-Website" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
            <FaGithub />
          </a>
        </div>
      </main>
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
