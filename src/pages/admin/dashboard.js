import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { createClient } from '@supabase/supabase-js';
import styles from './dashboard.module.css';

// Initialize Supabase client
const supabaseUrl = 'https://kbbfvvspeiyryojrrdhq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiYmZ2dnNwZWl5cnlvanJyZGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NTk5NjcsImV4cCI6MjA1OTMzNTk2N30.IF4ZRMOdrO2z1EwkJIoM_J5monuL0EtWZ7QgxBC99PA';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin email - this is the authorized admin account
const ADMIN_EMAIL = 'admin@deadstudios.xyz';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Redirect to login if not authenticated
        window.location.href = '/admin/login';
        return;
      }
      
      // Check if user is admin by comparing email
      if (session.user.email !== ADMIN_EMAIL) {
        // Not an admin, redirect to login
        await supabase.auth.signOut();
        window.location.href = '/admin/login';
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    };
    
    checkAuth();
  }, []);
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/admin/login';
  };

  if (loading) {
    return (
      <Layout title="Admin Dashboard">
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Loading dashboard...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Admin Dashboard"
      description="Site administration dashboard"
    >
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardHeader}>
          <h1>Admin Dashboard</h1>
          <div className={styles.userInfo}>
            {user?.user_metadata?.avatar_url && (
              <img 
                src={user.user_metadata.avatar_url} 
                alt="User avatar" 
                className={styles.avatar}
              />
            )}
            <span>Welcome, {user?.user_metadata?.name || user?.email || 'Admin'}</span>
            <button 
              onClick={handleSignOut}
              className={styles.signOutButton}
            >
              Sign Out
            </button>
          </div>
        </div>
        
        <div className={styles.dashboardContent}>
          {/* Your dashboard content here */}
          <p>Welcome to your admin dashboard. You can manage your site from here.</p>
        </div>
      </div>
    </Layout>
  );
}