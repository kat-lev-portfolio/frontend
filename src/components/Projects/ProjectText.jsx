import { useTranslation } from 'react-i18next';

function ProjectText({
    title,
    shortDescription,
    longDescription,
    category, //Will be array of three poss strings front, back, lang
    funFact,
    stack,
}) {
const { t, i18n } = useTranslation();

  return (
    <div>
      <p><strong>{t('project.title')}:</strong> {title}</p>
      {shortDescription && (
        <p><strong>{t('project.shortDescription')}:</strong> {shortDescription}</p>
      )}
      {longDescription && (
        <p><strong>{t('project.longDescription')}:</strong> {longDescription}</p>
      )}
      <p><strong>{t('project.categories')}:</strong> {category.join(', ')}</p>
      {stack && (
        <p><strong>{t('project.stack')}:</strong> {stack}</p>
      )}
      {funFact && (
        <p><strong>{t('project.funFact')}:</strong> {funFact}</p>
      )}
    </div>
  );
}

export default ProjectText;