import ProjectText from './ProjectText';
import ProjectImage from './ProjectImage';
// import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        <ProjectText
          title={project.title}
          longDescription={project.longDescription}
          category={project.category}
          funFact={project.funFact}
          stack={project.stack}
        />
        <ProjectImage /> // - add props
      </div>
    </div>
  );
}

export default ProjectModal;