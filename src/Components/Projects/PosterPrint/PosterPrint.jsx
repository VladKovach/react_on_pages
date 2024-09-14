import React from "react";
import classes from "./posterPrint.module.scss";
import poster from "..//..//assets/images/posterPrint.png";

export const PosterPrint = () => {
  return (
    <div className={classes.wrapper}>
      <p className={`${classes.title} project_title`}>PosterPrint</p>
      <a href="https://posterprint.com.ua" target="_blank" rel="noopener noreferrer">
        <img className={classes.siteImg} src={poster} alt="site page" />
      </a>
      <p className={classes.description}>
        Here you can review all{" "}
        <a href="https://posterprint.com.ua" target="_blank" className={classes.link}>
          site
        </a>
        , in the development of which I've participated
      </p>
    </div>
  );
};
