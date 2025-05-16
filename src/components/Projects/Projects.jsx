import ProjectText from './ProjectText';
import ProjectImage from './ProjectImage';
import styles from "./Projects.module.css"
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

function Projects() {
const { t } = useTranslation();

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <ProjectText />
            <ProjectImage />
        </div>
            <Button 
                width="large"
                label="project.more"
                // add openModal later
            />
    </div>
  );
}

export default Projects;