import styles from "./page.module.css";
import Banner from "@/components/banner/Banner";
export default function Hub() {
  return (
    <main className={styles.main}>
      <section id="banner"><Banner></Banner></section>
      <section id="examples">examples go here...<Banner></Banner></section>
      <section id="reviews">reviews go here...<Banner></Banner></section>
    </main>
  );
}
