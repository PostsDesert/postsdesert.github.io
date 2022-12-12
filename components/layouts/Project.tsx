import React from 'react';
import Styles from '../../styles/Project.module.css'; // Import the CSS module
import Button from '../Button';

const Project = ({ title, subtitle, description, image, button, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`${Styles.project} ${isEven ? "" : Styles.reverse}`}>
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={image} alt={title} />
      </div>
      <div className={Styles.titleAndSubtitleMobile}>
        <h3 className={Styles.projectTitle}>{title}</h3>
        <h4 className={Styles.projectSubtitle}>{subtitle.toUpperCase()}</h4>
      </div>
      <div className={Styles.projectInfo}>
        <div className={Styles.titleAndSubtitle}>
        <h3 className={Styles.projectTitle}>{title}</h3>
        <h4 className={Styles.projectSubtitle}>{subtitle.toUpperCase()}</h4>
        </div>
        <div className={Styles.projectDescription}>
          {description.split(/\n/).map((line: string, index: number) => <p key={index}>{line}</p>)}
        </div>
        {button && (<Button className={Styles.button} {...button}></Button>)}
      </div>
    </div>
  );
};

export default Project;
