import React from "react";
import classes from "./introduction.module.scss";

const Introduction = () => {
  return (
    <div className={`${classes.intro_wrapper} beauty_font `}>
      <div className={`${classes.text_container} ${classes.text_1}`}>Hi</div>
      <div className={`${classes.text_container} ${classes.text_2}`}>I am Vlad</div>
      <div className={`${classes.text_container} ${classes.text_3}`}>and</div>
      <div className={`${classes.text_container} ${classes.text_4}`}>This is my portfolio</div>
    </div>
  );
};

export default Introduction;
