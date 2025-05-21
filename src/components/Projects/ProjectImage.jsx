import styles from "./../Projects/ProjectImage.module.css";

function ProjectImage({ imageSrc, imageAlt }) {
  return (
    <div className={styles.projectImageContainer}>
      <img
        src={imageSrc}
        alt={imageAlt || "Project picture"}
        className={styles.projectImage}
      />
    </div>
  );
}

export default ProjectImage;