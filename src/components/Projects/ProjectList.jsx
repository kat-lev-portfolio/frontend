import ProjectCard from './ProjectCard';

function ProjectList({ projects, onProjectClick }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
      ))}
    </div>
  );
}

export default ProjectList;