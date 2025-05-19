import React, { useState } from 'react';
import styles from './PhotoUpload.module.css';

const PhotoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [imageDescription, setImageDescription] = useState('');

    const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
    return (
      <>
        <div className={styles.PhotoUploadContainer}>
            <label>Select and upload your photo here</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
                {previewUrl && (
                <div className={styles.ThumbnailPreview}>
                    <p>Preview:</p>
                    <img src={previewUrl} alt="Selected" style={{ width: '200px' }} />
                </div>
                )}
            <label>Image description:</label>
            <input
                type="text"
                value={imageDescription}
                onChange={handleDescriptionChange}
                placeholder="Write a few words to describe this image"
            />
        </div>
      </>  
    )
}

export default PhotoUpload;