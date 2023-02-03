import React from 'react';
import SlideShow from '../slideShow/slideShow';
import classes from './MyProjectsContainer.module.css';

const MyProjectsContainer = ({imageSrc, title, children}) => {
  return (  
      <div>
     <div className={classes.title}>{title}</div>
      <div className={classes.container}>
        <SlideShow slides={imageSrc} />
        <div className={classes.description}>{children}</div>       
      </div>
    </div>
  );
};

export default MyProjectsContainer;