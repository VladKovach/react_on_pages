import React from "react";
import classes from "./personalInfo.module.scss";
import myFoto from "../../assets/images/Vladuslav_CV_Foto.jpg";

const PersonalInfo = () => {
  return (
    <div className={classes.info_wrapper}>
      <div className={classes.my_info_container}>
        <div className={classes.info}>
          <p>
            I am Vladyslav Kovachuk, a highly motivated junior+ front-end developer with a strong
            passion for continuous learning and growth.
          </p>
          <p>
            <strong>Stack:</strong> HTML, CSS, JS, TypeScript, Sass, CSS-in-JS, Styled Componend,
            JQuery, React, Redux, RTK, NextJS, Vue, NuxtJS, Git, GitHub.
          </p>
          <p>
            <strong> Education:</strong> Master of Science. Yzhorod National University.
            Specialization: Cybersecurity.
          </p>
          <p>
            <strong>Languages:</strong> Ukrainian: Native <br />
            English: B1 <br />
            German: B1 <br />
            Russian: B1
          </p>
        </div>
        <img src={myFoto} width={400} alt="My Foto" className={classes.my_foto} />
      </div>
    </div>
  );
};

export default PersonalInfo;
