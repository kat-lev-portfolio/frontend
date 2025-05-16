import { Link } from 'react-router-dom';
import styles from "./../Navbar/Navbar.module.css";
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navGroup}>
        <Button to="/home" width="medium" label="nav.home" />
        <Button to="/about" width="medium" label="nav.about" />
        <Button to="/portfolio" width="medium" label="nav.portfolio" />
        <Button
          onClick={toggleLanguage}
          width="small"
          label="nav.language"
          />
      </div>
    </nav>
  );
}
