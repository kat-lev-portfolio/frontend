import { useTranslation } from 'react-i18next';

function AboutText() {   
const { t, i18n } = useTranslation();  

return(
    <div> 
      <h2>{t('about.title')}</h2>
      <p>{t('about.description')}</p>
    </div>
)
}

export default AboutText;