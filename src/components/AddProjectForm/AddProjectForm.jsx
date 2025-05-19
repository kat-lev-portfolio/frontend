import React, { useState } from 'react';
import styles from "./../AddProjectForm/AddProjectForm.module.css";
import Button from '../Button/Button';

const AddProjectForm = () => {

    const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    longDescription: '',
    category: [],
    funFact: '',
    stack: '',
    gitHubUrl: ''
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event submitted:', formData);
  };

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
                <Button width="large" label="submit" onClick={handleSubmit}/>
        </form>
        </>
    )
}

export default AddProjectForm;