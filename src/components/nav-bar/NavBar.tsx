'use client';
import React from 'react';
import styles from "./NavBar.module.css";

const sections = [
  { label: 'Home', id: 'banner' },
  { label: 'Examples', id: 'examples' },
  { label: 'Reviews', id: 'reviews' },
];

export const NavBar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.component_container}>
      NYBORG PAINTING
      {sections.map(({ label, id }) => (
        <button key={id} className={styles.nav_button} onClick={() => scrollTo(id)}>
          {label}
        </button>
      ))}
    </div>
  );
};
