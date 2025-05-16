import { useTranslation } from 'react-i18next';
import AboutText from './AboutText';
import AboutImage from './AboutImage';
import Contact from '../Contact/Contact';
import styles from "./../About/About.module.css";

function About() {
const { t, i18n } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
            <AboutText />
            <AboutImage />
        </div>
            <div className={styles.contactWrapper}>
                <h2>get in touch...</h2>
                <Contact />
                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a>
            </div>
    </div>
  );
}

export default About;