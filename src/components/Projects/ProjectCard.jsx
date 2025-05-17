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
        // longDescription={project.longDescription}
        category={project.category}
        // funFact={project.funFact}
        // stack={project.stack}
      />
      <ProjectImage /> 
      {/* luego add image props */}
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
