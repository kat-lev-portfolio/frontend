import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Link to="/" className="">
          {t('nav.home')}
        </Link>
        <Link to="/about" className="">
          {t('nav.about')}
        </Link>
        <Link to="/portfolio" className="">
          {t('nav.portfolio')}
        </Link>
        <button
          onClick={toggleLanguage}
          className="ml-4 px-2 py-1 text-sm"
        >
          {t('nav.language')}
        </button>
      </div>
    </nav>
  );
}
