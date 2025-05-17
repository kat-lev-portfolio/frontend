import ProjectText from './ProjectText';
import ProjectImage from './ProjectImage';
import githubIcon from "./../../assets/github-icon.png";
import styles from "./../Projects/ProjectModal.module.css";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeModal} onClick={onClose}>✕</button>
        <div className={styles.modalCard}><ProjectText
          title={project.title}
          longDescription={project.longDescription}
          category={project.category}
          funFact={project.funFact}
          stack={project.stack}
          />
        <ProjectImage /> 
        {/* luego add props */}
        </div>
            {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                <img src={githubIcon} alt="Link to GitHub repo" className={styles.githubIcon} />
                View repo in GitHub
            </a>
            )}
      </div>
    </div>
  );
}

export default ProjectModal;