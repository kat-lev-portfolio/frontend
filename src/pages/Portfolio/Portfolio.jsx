import { useState } from 'react';
import ProjectModal from "../../components/Projects/ProjectModal.jsx";
import Navbar from "../../components/Navbar/Navbar";
import ProjectList from "../../components/Projects/ProjectList.jsx";

function Portfolio() {
const [selectedProject, setSelectedProject] = useState(null);
const projects = [
    {
      id: 1,
      title: "AI Cat Translator",
      shortDescription: "Translates cat meows into human speech.",
      longDescription: "Built using React and TensorFlow.js...",
      category: ["front end", "linguistics"],
      funFact: "Inspired by the creator's overly chatty cat.",
      stack: "React, Node.js, TensorFlow.js",
    },
    {
      id: 2,
      title: "AI Cat Translator, v2",
      shortDescription: "Translate human speech into cat meows.",
      longDescription: "Built using React and TensorFlow.js...",
      category: ["front end", "linguistics"],
      funFact: "Inspired by the creator's desire to respond to their chatty cat.",
      stack: "React, Node.js, TensorFlow.js",
    },
  ];

return (
        <>
            <Navbar />
            <h1>Portfolio</h1>
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