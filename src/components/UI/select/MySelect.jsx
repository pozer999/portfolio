import React from 'react';
import classes from './MySelect.module.css';


const MySelect = (props) => {
  return (
    <select data-hai="whatup" {...props} className={classes.mySelect}>
        <option value="1" hidden>≡≡≡</option>
        <option value="2">Welcome</option>
        <option value="3">Technical Skills</option>
        <option value="4">MyProjects</option>
    </select>

  );
};

export default MySelect;