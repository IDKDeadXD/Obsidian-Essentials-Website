import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { createClient } from '@supabase/supabase-js';
import styles from './login.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Navbar from '@theme/Navbar';

// Initialize Supabase client
const supabaseUrl = 'https://kbbfvvspeiyryojrrdhq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiYmZ2dnNwZWl5cnlvanJyZGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NTk5NjcsImV4cCI6MjA1OTMzNTk2N30.IF4ZRMOdrO2z1EwkJIoM_J5monuL0EtWZ7QgxBC99PA';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin email - this is the authorized admin account
const ADMIN_EMAIL = 'admin@deadstudios.xyz';

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {siteConfig} = useDocusaurusContext();
  
  // Check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        // Check if this is the admin account by email
        if (session.user.email === ADMIN_EMAIL) {
          // Redirect to dashboard if already logged in as admin
          window.location.href = '/admin/dashboard';
        } else {
          // Not an admin, sign them out
          await supabase.auth.signOut();
        }
      }
    };
    
    checkUser();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      // Check if user is admin by comparing email
      if (data.user.email !== ADMIN_EMAIL) {
        // Not the admin account
        await supabase.auth.signOut();
        throw new Error('You do not have permission to access the admin area.');
      }
      
      // Successfully logged in as admin, redirect to dashboard
      window.location.href = '/admin/dashboard';
      
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError(error.message || 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      title="Admin Login"
      description="Admin login page"
    >
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1>Admin Login</h1>
          
          {error && <div className={styles.errorMessage}>{error}</div>}
          
          <form onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.inputField}
                placeholder="admin@deadstudios.xyz"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.inputField}
                placeholder="••••••••••••"
              />
            </div>
            
            <button 
              type="submit"
              className={styles.signInButton}
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}