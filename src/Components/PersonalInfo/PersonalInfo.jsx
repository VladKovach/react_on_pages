import React from "react";
import classes from "./personalInfo.module.scss";
import myFoto from "../../assets/images/Vladuslav_CV_Foto.jpg";

const PersonalInfo = () => {
  return (
    <div className={classes.info_wrapper}>
      <div className={classes.my_info_container}>
        <div className={classes.info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo iusto ea, aliquam
          sint consequatur similique, dolores dignissimos accusantium corrupti ex commodi corporis
          repudiandae quas sed mollitia blanditiis possimus tenetur, reprehenderit neque tempora!
          Excepturi eaque provident tempore voluptatibus a eum sed, distinctio qui libero
          repudiandae, quibusdam cum impedit dolorem iste?
        </div>
        <img src={myFoto} width={400} alt="My Foto" className={classes.my_foto} />
      </div>
    </div>
  );
};

export default PersonalInfo;
