import styles from "./../Projects/ProjectCard.module.css";
import ProjectText from './ProjectText';
import ProjectImage from './ProjectImage';
import Button from "../Button/Button";

function ProjectCard({ project, onClick }) {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCardWrapper}>
      <ProjectText
        title={project.title}
        shortDescription={project.shortDescription}
        category={project.category}
      />
      <ProjectImage 
        imageSrc={`http://localhost:8080${project.imageSource}`} 
        imageAlt={project.imageDescription} 
      /> 
      </div>
      <Button 
        onClick={() => onClick(project)}
        width="large"
        label="project.more"
      />
    </div>
  );
}

export default ProjectCard;
