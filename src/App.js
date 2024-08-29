import React, { useState } from "react";
import Introduction from "./Components/Introduction/Introduction";
import TicTack from "./Components/TicTack/TicTack";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";

export default function App() {
  return (
    <div className="main_page_wrapper">
      <Introduction />
      <PersonalInfo/>
      <TicTack />
    </div>
  );
}
