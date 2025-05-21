import ProjectCard from './ProjectCard';
import styles from "./ProjectList.module.css";

function ProjectList({ projects, onProjectClick }) {
  return (
    <div className={styles.ProjectListContainer}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
      ))}
    </div>
  );
}

export default ProjectList;