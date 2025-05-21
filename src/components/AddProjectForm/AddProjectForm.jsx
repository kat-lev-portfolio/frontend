import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./../AddProjectForm/AddProjectForm.module.css";
import Button from '../Button/Button';
import PhotoUpload from "./../PhotoUpload/PhotoUpload.jsx";

const AddProjectForm = () => {
    const { t, i18n } = useTranslation();

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
      throw new Error(t('alerts.submitError'));
    }

    const result = await response.json();
    console.log(t('alerts.submitSuccess'), result);
  } catch (error) {
    console.error(error.message, error);
  }
};

    return(
        <>        
        <form onSubmit={handleSubmit} className={styles.ProjectForm}>
                <label>{t('projectForm.title')}</label>
                    <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder={t("projectForm.titlePlaceholder")}
                    />
                <label>{t('projectForm.shortDescription')}</label>
                    <input
                    type="text"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    required
                    placeholder={t("projectForm.shortPlaceholder")}
                    />
                <label>{t('projectForm.longDescription')}</label>
                    <input
                    type="text"
                    name="longDescription"
                    value={formData.longDescription}
                    onChange={handleChange}
                    required
                    placeholder={t("projectForm.shortPlaceholder")}
                    />
                <label>{t('projectForm.categories')}</label>
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
                <label>{t('projectForm.funFact')}</label>
                    <input
                    type="text"
                    name="funFact"
                    value={formData.funFact}
                    onChange={handleChange}
                    required
                    placeholder={t("projectForm.funFactPlaceholder")}
                    />
                <label>{t('projectForm.stack')}</label>
                    <input
                    type="text"
                    name="stack"
                    value={formData.stack}
                    onChange={handleChange}
                    required
                    placeholder={t("projectForm.stackPlaceholder")}
                    />
                <label>{t('projectForm.gitHub')}</label>
                    <input
                    type="text"
                    name="gitHubUrl"
                    value={formData.gitHubUrl}
                    onChange={handleChange}
                    required
                    placeholder={t("projectForm.gitHubPlaceholder")}
                    />
                <PhotoUpload onFileSelect={(file) => setFormData(prev => ({ ...prev, imageFile: file }))} />
                <label>{t('projectForm.imageDescription')}</label>
                    <input
                    type="text"
                    name="imageDescription"
                    value={formData.imageDescription}
                    onChange={handleChange}
                    placeholder={t("projectForm.imagePlaceholder")}
                    />
                <Button width="large" label={t('projectForm.submit')} onClick={handleSubmit}/>
        </form>
        </>
    )
}

export default AddProjectForm;