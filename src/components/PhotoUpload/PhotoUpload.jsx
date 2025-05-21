import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PhotoUpload.module.css';

const PhotoUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { t, i18n } = useTranslation();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }

    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
    }
};

    return (
      <>
          <div className={styles.PhotoUploadContainer}>
             <label>{t('photo.label')}</label>
               <input type="file" accept="image/*" onChange={handleFileChange} />
                 {previewUrl && (
                 <div className={styles.ThumbnailPreview}>
                     <p>{t('photo.preview')}</p>
                     <img src={previewUrl} alt="Your selected image" style={{ width: '200px' }} />
                 </div>
                 )}
         </div>
      </>  
    );
}

export default PhotoUpload;