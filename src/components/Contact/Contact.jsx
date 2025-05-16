import styles from "./../Contact/Contact.module.css";
import githubIcon from "./../../assets/github-icon.png";
import linkedinIcon from "./../../assets/linkedin-icon.png";

function Contact() {
    return(
        <>        
        <div>
            <img src={githubIcon} className={styles.icon}></img>
            <img src={linkedinIcon} className={styles.icon}></img>
        </div>
        </>
    )
}

export default Contact;