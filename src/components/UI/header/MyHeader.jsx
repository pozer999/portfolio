import React from 'react';
import MySelect from '../select/MySelect';
import classes from './MyHeader.module.css';

const MyHeader = ({fio, title}) => {
  return (
    <header className={classes.header}>
      <div className={classes.name}>
        {fio}
      </div>
      <div className={classes.titleHeader}>
        {title}
      </div>
      <MySelect/>
  </header>
  );
};

export default MyHeader;