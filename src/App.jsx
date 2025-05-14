import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold">{t('welcome')}</h1>
      <p className="mt-2">{t('description')}</p>
      <button
        onClick={toggleLanguage}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {t('change_language')}
      </button>
    </div>
  );
}

export default App;
