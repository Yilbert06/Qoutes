import "./App.css";
import React, { useState } from "react";
import quotes from "./assets/data.json";
import CardQuote from "./componentes/CardQuote.jsx";
import fondo__1 from "./assets/img/fondo8.png";
import fondo__2 from "./assets/img/fondo11.png";
import fondo__3 from "./assets/img/fondo12.png";
import fondo__4 from "./assets/img/fondo13.png";
import fondo__5 from "./assets/img/fondo14.png";
import fondo__6 from "./assets/img/fondo16.png";
import fondo__7 from "./assets/img/fondo2.png";
import fondo__8 from "./assets/img/fondo3.png";
import fondo__9 from "./assets/img/fondo4.png";
import fondo__10 from "./assets/img/fondo18.png";
import fondo__11 from "./assets/img/fondo19.png";
import fondo__12 from "./assets/img/fondo7.png";
import fondo__13 from "./assets/img/fondo17.png";

const fondosImg = [
  fondo__1,
  fondo__2,
  fondo__3,
  fondo__4,
  fondo__5,
  fondo__6,
  fondo__7,
  fondo__8,
  fondo__9,
  fondo__10,
  fondo__11,
  fondo__12,
  fondo__13,
];

function App() {

  /*Funtion for changing the backgounrd image */
  const nextRandom = () => Math.floor(Math.random() * fondosImg.length);
  const [user, setUser] = useState(fondosImg[nextRandom()]);
  const next = () => {
    const randomNext = nextRandom();
    setUser(fondosImg[randomNext]);
  };

  /*Get the random number for getting the index from the json */
  const getRandom = () => Math.floor(Math.random() * quotes.length);

  /*the useState that has the info for the json */
  const [data, setData] = useState(quotes[getRandom()]);

  /*Function for changing the data and calling the funtion for changing backgorund image */
  const changeCards = () => {
    const random = getRandom();
    setData(quotes[random]);
    next();
  };

  return (
    <div className="App">
      <div className="backgroundImg">
        <img src={`${user}`} alt="fondo" />
      </div>
      <div className="text">
        <CardQuote  changeCards={changeCards} data={data} />
      </div>
    </div>
  );
}

export default App;
