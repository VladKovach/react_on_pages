import React from "react";

import classes from "./plantShop.module.scss";
export const PlantShop = () => {
  return ( 
    <div className={classes.wrapper}>
      <p className={`${classes.title} project_title`}>PlantShop</p>
      <p className={classes.description}>
        Here you can review
        <a href="https://vladkovach.github.io/plantShop" target="blank" className={classes.link}>
          site
        </a>
        , in the development of which I participated
      </p>
    </div>
  );
};
