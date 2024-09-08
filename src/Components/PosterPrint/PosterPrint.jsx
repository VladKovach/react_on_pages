import React from "react";
import classes from "./posterPrint.module.scss";
export const PosterPrint = () => {
  return (
    <div className={classes.wrapper}>
      <p className={`${classes.title} project_title`}>PosterPrint</p>
      <p className={classes.description}>
        Here you can review <a href="https://posterprint.com.ua" target="blank" className={classes.link}>site</a>, in the development of which I participated
      </p> 
    </div>
  );
};
