import React, { useState } from 'react';
import styles from "./../AddProjectForm/AddProjectForm.module.css";
import Button from '../Button/Button';
import PhotoUpload from "./../PhotoUpload/PhotoUpload.jsx";

const AddProjectForm = () => {
    const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    longDescription: '',
    category: [],
    funFact: '',
    stack: '',
    gitHubUrl: '',
    imageDescription: ''
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Event submitted:', formData);
//   };

const handleSubmit = async (e) => {
  e.preventDefault();


  const projectPayload = {
    title: formData.title,
    shortDescription: formData.shortDescription,
    longDescription: formData.longDescription,
    category: formData.category,
    funFact: formData.funFact,
    stack: formData.stack,
    gitHubUrl: formData.gitHubUrl,
    imageDescription: formData.imageDescription,
  };

  const form = new FormData();
  form.append('project', JSON.stringify(projectPayload));

  if (formData.imageFile) {
    form.append('imageFile', formData.imageFile);
  }

  try {
    const response = await fetch("http://localhost:8080/api/projects", {
      method: "POST",
      body: form
    });

    if (!response.ok) {
      throw new Error('Failed to submit project');
    }

    const result = await response.json();
    console.log('Project submitted successfully:', result);
  } catch (error) {
    console.error('Error submitting project:', error);
  }
};

//   const form = new FormData();
//   form.append('title', formData.title);
//   form.append('shortDescription', formData.shortDescription);
//   form.append('longDescription', formData.longDescription);
//   formData.category.forEach(cat => form.append('category', cat));
//   form.append('funFact', formData.funFact);
//   form.append('stack', formData.stack);
//   form.append('gitHubUrl', formData.gitHubUrl);
//   form.append('imageDescription', formData.imageDescription);

//   if (formData.imageFile) {
//     form.append('imageFile', formData.imageFile);
//   }

//   try {
//     const response = await fetch("http://localhost:8080/api/projects", {
//       method: "POST",
//       body: form
//     });

//     if (!response.ok) {
//       throw new Error('Failed to submit project');
//     }

//     const result = await response.json();
//     console.log('Project submitted successfully:', result);
//   } catch (error) {
//     console.error('Error submitting project:', error);
//   }
// };

    return(
        <>        
        <form onSubmit={handleSubmit} className={styles.ProjectForm}>
                <label>Project title:</label>
                    <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    />
                <label>Short description (max 150 characters):</label>
                    <input
                    type="text"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    required
                    />
                <label>Longer description:</label>
                    <input
                    type="text"
                    name="longDescription"
                    value={formData.longDescription}
                    onChange={handleChange}
                    required
                    />
                <label>Categories (select all that apply):</label>
                    {['Frontend', 'Backend', 'Writing/copy'].map((cat) => (
                    <div key={cat}>
                        <input
                        type="checkbox"
                        name="category"
                        value={cat}
                        checked={formData.category.includes(cat)}
                    onChange={(e) => {
                    const { value, checked } = e.target;
                    setFormData(prev => ({...prev,
                    category: checked ? [...prev.category, value]
                    : prev.category.filter(c => c !== value)
                    }));
                    }}
                    />
                    <label>{cat}</label>
                    </div>
                    ))}
                <label>Fun fact:</label>
                    <input
                    type="text"
                    name="funFact"
                    value={formData.funFact}
                    onChange={handleChange}
                    required
                    />
                <label>Stack:</label>
                    <input
                    type="text"
                    name="stack"
                    value={formData.stack}
                    onChange={handleChange}
                    required
                    />
                <label>GitHub URL:</label>
                    <input
                    type="text"
                    name="gitHubUrl"
                    value={formData.gitHubUrl}
                    onChange={handleChange}
                    required
                    />
                <PhotoUpload onFileSelect={(file) => setFormData(prev => ({ ...prev, imageFile: file }))} />
                <label>Image description:</label>
                    <input
                    type="text"
                    name="imageDescription"
                    value={formData.imageDescription}
                    onChange={handleChange}
                    />
                <Button width="large" label="submit" onClick={handleSubmit}/>
        </form>
        </>
    )
}

export default AddProjectForm;