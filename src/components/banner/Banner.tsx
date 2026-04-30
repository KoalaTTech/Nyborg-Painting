import React from 'react'
import Image from 'next/image';
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
        <Image
        src="/images/painterbannerthing.png" // Path from the public folder
        alt="Professional painter applying sage green paint"
        fill // Makes the image fill the container
        priority // Tells Next.js to load this immediately (crucial for Hero images)
        className={styles.heroImage}
        style={{ objectFit: 'cover' }} // Ensures it looks good at any aspect ratio
      />
    </div>
  )
}
