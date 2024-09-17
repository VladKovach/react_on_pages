import React, { useState } from "react";
import Introduction from "./Components/Introduction/Introduction";
import TicTack from "./Components/TicTack/TicTack";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import { PosterPrint } from "./Components/Projects/PosterPrint/PosterPrint";
import { PlantShop } from "./Components/Projects/PlantShop/PlantShop";
import CardGalery from "./Components/Projects/CardGalery/CardGalery";
import { Restourant } from "./Components/Projects/Restourant/Restourant";
export default function App() {
  return (
    <div className="main_page_wrapper">
      <Introduction />
      <PersonalInfo />
      <p className="works_title">HERE IS SOME OF MY WORKS :</p>
      <PosterPrint />
      <PlantShop />
      <Restourant />
      <TicTack />

      <CardGalery />
    </div>
  );
}
