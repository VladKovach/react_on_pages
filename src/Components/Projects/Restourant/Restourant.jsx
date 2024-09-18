import React from "react";
import classes from "..//project.module.scss";
import restourantImg from "..//..//..//assets/images/restourant.png";
export const Restourant = () => {
  return (
    <div className={classes.wrapper}>
      <div className="project_title_container">
        <span className="line" />
        <p>Restourant (layout)</p>
        <span className="line" />
      </div>
      <a
        href="https://vladkovach.github.io/restourant_learn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={classes.siteImg} src={restourantImg} alt="site page" />
      </a>
      <p className={classes.description}>
        Here you can review and test{" "}
        <a
          href="https://vladkovach.github.io/restourant_learn/"
          target="_blank"
          className={classes.link}
        >
          layout
        </a>
        , I've maded
      </p>
    </div>
  );
};
