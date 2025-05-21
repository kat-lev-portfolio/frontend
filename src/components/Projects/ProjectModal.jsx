import ProjectText from './ProjectText';
import ProjectImage from './ProjectImage';
import githubIcon from "./../../assets/github-icon.png";
import styles from "./../Projects/ProjectModal.module.css";
import { useTranslation } from 'react-i18next';

function ProjectModal({ project, onClose }) {
  if (!project) return null;
      const { t, i18n } = useTranslation();

  return (
    <div className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeModal} onClick={onClose}>✕</button>
        <div className={styles.modalCard}>
        <ProjectText
          title={project.title}
          longDescription={project.longDescription}
          category={project.category}
          funFact={project.funFact}
          stack={project.stack}
          />
        <ProjectImage 
          imageSrc={`http://localhost:8080${project.imageSource}`} 
          imageAlt={project.imageDescription} 
        /> 
        </div>
            <div className={styles.gitHubContainer}>
              {project.gitHubUrl && (
                <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                <img src={githubIcon} alt="Link to GitHub repo" className={styles.githubIcon} />
                <span>{t('modal.repo')}</span>
                </a>
              )}
            </div>
        </div>
    </div>
  );
}

export default ProjectModal;