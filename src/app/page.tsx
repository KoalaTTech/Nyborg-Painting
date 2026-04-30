import styles from "./page.module.css";
import Banner from "@/components/banner/Banner";
import BeefAndAft from "@/components/beef-and-aft/BeefAndAft";

const reviews = [
  {
    name: "Ashley R.",
    location: "South Jordan",
    text: "The crew was on time every day, kept the site clean, and the finish quality was excellent.",
  },
  {
    name: "Damon K.",
    location: "Sandy",
    text: "Great communication and very professional prep work. The house looks brand new.",
  },
  {
    name: "Mia T.",
    location: "Murray",
    text: "Fast, friendly, and detail-oriented. We will definitely use Nyborg Painting again.",
  },
];

export default function Hub() {
  return (
    <main className={styles.main}>
      <section id="banner">
        <Banner></Banner>
      </section>

      <section id="examples">
        <BeefAndAft />
      </section>

      <section id="reviews" className={styles.reviewsSection}>
        <div className={styles.contentShell}>
          <h2 className={styles.sectionHeading}>Client Reviews</h2>
          <div className={styles.reviewGrid}>
            {reviews.map((review) => (
              <article key={review.name} className={styles.reviewCard}>
                <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>
                <p className={styles.reviewMeta}>
                  {review.name} - {review.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contentShell}>
          <h2 className={styles.sectionHeading}>Contact Us</h2>
          <p className={styles.contactText}>
            Ready for a quote? Send us a quick message and we will follow up with timing and pricing.
          </p>
          <div className={styles.contactActions}>
            <a className={styles.primaryButton} href="mailto:hello@nyborgpainting.com">
              Email Us
            </a>
            <a
              className={styles.socialButton}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className={styles.socialButton}
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
