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
                <h2>{t('about.contact')}</h2>
                <Contact />
            </div>
    </div>
  );
}

export default About;