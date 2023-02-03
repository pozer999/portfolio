import React from 'react';
import classes from './MySlideContainer.module.css';


const MySlideContainer = ({imageSrc, title, children, description}) => {
  return (
    <div>
     <div className={classes.title}>{title}</div>
      <div className={classes.container}>
        <div className={classes.mySkills}>
          {imageSrc.map(elem => (
            <a className={classes.skill} href={elem.href} target="_blank"><img className={classes.skill} src={elem.src} alt="" key={elem.src}></img></a>  
          ))}
        </div>
        <div className={classes.mail}>{description}</div>
      </div>
    </div>
  );
};

export default MySlideContainer;