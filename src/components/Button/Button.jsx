import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Button.module.css';

function Button({ to, width = 'medium', label, onClick }) {
  const { t } = useTranslation();
  const sizeClass = styles[width] || styles.medium;
  const classNames = `${styles.button} ${sizeClass}`;

  if (to) {
    return (
      <Link to={to} className={classNames}>
        {t(label)}
      </Link>
    );
  }

  return (
    <button className={classNames} onClick={onClick}>
      {t(label)}
    </button>
  );
}

export default Button;