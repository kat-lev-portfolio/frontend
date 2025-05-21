import { useState, useEffect } from 'react';
import ProjectModal from "../../components/Projects/ProjectModal.jsx";
import Navbar from "../../components/Navbar/Navbar";
import ProjectList from "../../components/Projects/ProjectList.jsx";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/projects");
        if (!response.ok) {
          throw new Error("Could not fetch projects from API");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

return (
        <>
            <Navbar />
                  {loading && <p>Loading projects...</p>}
                  {error && <p>{error}</p>}
            <ProjectList projects={projects} onProjectClick={(project) => setSelectedProject(project)}  />
                  {selectedProject && (
                    <ProjectModal 
                    project={selectedProject} onClose={() => setSelectedProject(null)} 
                    />
                  )}
        </>
    )
}

export default Portfolio