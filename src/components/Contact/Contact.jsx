import styles from "./../Contact/Contact.module.css";
import githubIcon from "./../../assets/github-icon.png";
import linkedinIcon from "./../../assets/linkedin-icon.png";
import { useTranslation

 } from "react-i18next";
function Contact() {
  const { t, i18n } = useTranslation();
    return(
        <>        
        <div className={styles.contactContainer}>
            <img src={githubIcon} className={styles.icon}></img>
            <a href="https://www.flaticon.com/free-icons/github" title="github icons">{t('contact.icon2')}</a>
            <img src={linkedinIcon} className={styles.icon}></img>
            <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">{t('contact.icon1')}</a>
        </div>
        </>
    )
}

export default Contact;