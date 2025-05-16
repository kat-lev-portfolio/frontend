import { useTranslation } from 'react-i18next';
import styles from "./../About/AboutText.module.css";

function AboutText() {   
const { t, i18n } = useTranslation();  

return(
    <div className={styles.aboutText}> 
      <h2>{t('about.title')}</h2>
      <p>{t('about.description')}</p>
    </div>
)
}

export default AboutText;