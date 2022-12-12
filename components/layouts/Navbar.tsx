import React from 'react';
import styles from '../../styles/Navbar.module.css';
import links from '../../globals/links';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.menuItem}>
        <span className={styles.hashtagAccent}>#</span>
        home
      </a>
      <a href={links.projects} className={styles.menuItem}>
        <span className={styles.hashtagAccent}>#</span>
        projects
      </a>
      <a href={links.blog} className={styles.menuItem}>
        <span className={styles.hashtagAccent}>#</span>
        blog
      </a>
      <a href={links.contact} className={styles.menuItem}>
        <span className={styles.hashtagAccent}>#</span>
        contact
      </a>
    </nav>
  );
};

export default Navbar;
