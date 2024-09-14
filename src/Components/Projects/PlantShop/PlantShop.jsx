import React from "react";
import classes from "../project.module.scss";
import plantShop from "..//..//..//assets/images/plantShop.png";

export const PlantShop = () => {
  return (
    <div className={classes.wrapper}>
      <p className={`${classes.title} project_title`}>PlantShop</p>
      <a href="https://vladkovach.github.io/plantShop" target="_blank" rel="noopener noreferrer">
        <img className={classes.siteImg} src={plantShop} alt="site page" />
      </a>
      <p className={classes.description}>
        Here you can review and test{" "}
        <a href="https://vladkovach.github.io/plantShop" target="blank" className={classes.link}>
          layout
        </a>
        , I've maded
      </p>
    </div>
  );
};
