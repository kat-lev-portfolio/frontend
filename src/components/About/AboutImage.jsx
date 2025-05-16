import styles from "./../About/AboutImage.module.css";
import cat1 from "./../../assets/cat1.jpg";

function AboutImage() {
  return (
    <div className={styles.aboutImageContainer}>
        <img src={cat1} className={styles.image}></img>
    </div>
  );
}

export default AboutImage;