import React, { useState } from "react";
import Introduction from "./Components/Introduction/Introduction";
import TicTack from "./Components/TicTack/TicTack";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import { PosterPrint } from "./Components/PosterPrint/PosterPrint";
export default function App() {
  return (
    <div className="main_page_wrapper">
      <Introduction />
      <PersonalInfo />
      <p className="project_title">HERE IS SOME OF MY WORKS :</p>
      <p className="project_title ">Tic-Tac-Toe</p>
      <TicTack />
      <PosterPrint/>
    </div>
  );
}
