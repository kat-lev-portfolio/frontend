import { useTranslation } from 'react-i18next';
import AboutText from './AboutText';
import AboutImage from './AboutImage';
import styles from "./../About/About.module.css";

function About() {
const { t, i18n } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
            <AboutText />
            <AboutImage />
        </div>
            <div className={styles.contact}>
                <p>Contacts deets here - 2x large icons</p>
            </div>
    </div>
  );
}

export default About;