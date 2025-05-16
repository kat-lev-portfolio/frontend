import { useTranslation } from 'react-i18next';

function ProjectText() {
const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('project.title')}</h1>
      <p>{t('project.description')}</p>
    </div>
  );
}

export default ProjectText;