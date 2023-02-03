import React from 'react';
import classes from './MyWelcomeContainer.module.css';

const MyWelcomeContainer = ({imageSrc, title, children}) => {
  return (
    <div>
      <div className={classes.title}>{title}</div>
      <div className={classes.container}>
          <img className={classes.img} src={imageSrc} alt="" />
        <div className={classes.description}>
          {children}
        </div>
      </div>
  </div>
  );
};

export default MyWelcomeContainer;