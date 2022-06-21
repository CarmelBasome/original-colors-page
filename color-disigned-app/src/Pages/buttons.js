import React, {useState} from "react";
import "./buttons.css";

const Buttons = () => {
  const [text, setText] = useState("");

  const Red = () => {
    setText(<p style={{color: "red"}}>I'm Red color</p>);
  };

  const White = () => {
    setText(<p style={{color: "white", backgroundColor: "black"}}>I'm White color</p>);
  };

  const Black = () => {
    setText(<p style={{color: "black"}}>I'm Black color</p>);
  };

  const Blue = () => {
    setText(<p style={{color: "blue"}}>I'm Blue color</p>);
  };

  const Green = () => {
    setText(<p style={{color: "green"}}>I'm Green color</p>);
  };

  const Gray = () => {
    setText(<p style={{color: "green"}}>I'm Gray color</p>);
  };

  const Yellow = () => {
    setText(<p style={{color: "yellow", backgroundColor: "black"}}>I'm Yellow colorr</p>);
  };

  const Orange = () => {
    setText(<p style={{color: "orange", backgroundColor: "black"}}>I'm Orange color</p>);
  };

  const Pink = () => {
    setText(<p style={{color: "pink", backgroundColor: "black"}}>I'm Pink color</p>);
  };

  const Violet = () => {
    setText(<p style={{color: "violet"}}>I'm Violet color</p>);
  };

  const Lime = () => {
    setText(<p style={{color: "lime"}}>I'm Lime color</p>);
  };

  const Beige = () => {
    setText(<p style={{color: "beige", backgroundColor: "black"}}>I'm Beige color</p>);
  };

  const Silver = () => {
    setText(<p style={{color: "silver"}}>I'm Silver color</p>);
  };

  const Khaki = () => {
    setText(<p style={{color: "khaki"}}>I'm Khaki color</p>);
  };

  const Tan = () => {
    setText(<p style={{color: "tan", backgroundColor: "black"}}>I'm Tan color</p>);
  };

  const Crimson = () => {
    setText(<p style={{color: "crimson"}}>I'm Crimson color</p>);
  };

  const Ivory = () => {
    setText(<p style={{color: "ivory", backgroundColor: "black"}}>I'm Ivory color</p>);
  };

  const Magenta = () => {
    setText(<p style={{color: "magenta"}}>I'm Magenta color</p>);
  };

  const Brown = () => {
    setText(<p style={{color: "brown"}}>I'm Brown color</p>);
  };

  const Gold = () => {
    setText(<p style={{color: "gold"}}>I'm Gold color</p>);
  };

  const Purple = () => {
    setText(<p style={{color: "purple"}}>I'm Purple color</p>);
  };

  const Turquoise = () => {
    setText(<p style={{color: "turquoise"}}>I'm Turquoise color</p>);
  };

  const Teal = () => {
    setText(<p style={{color: "teal"}}>I'm Teal color</p>);
  };

  const Skyblue = () => {
    setText(<p style={{color: "skyblue"}}>I'm Skyblue color</p>);
  };

  const Navy = () => {
    setText(<p style={{color: "navy"}}>I'm Navey color</p>);
  };

  const Lavender = () => {
    setText(<p style={{color: "lavender", backgroundColor: "black"}}>I'm Lavender color</p>);
  };

  const Maroon = () => {
    setText(<p style={{color: "marron"}}>I'm Maroon color</p>);
  };

  const Sienna = () => {
    setText(<p style={{color: "sienna"}}>I'm Sienna color</p>);
  };

  const Bisque = () => {
    setText(<p style={{color: "bisque", backgroundColor: "black"}}>I'm Bisque color</p>);
  };

  const Carm = () => {
    setText(<p style={{color: "black"}}>This page was desiged by Carmel Basome</p>);
  };

  return (
    <div className="container">
      <h1>{text}</h1>
      <button onClick={Red} className="red">
        red
      </button>
      <button onClick={White} className="white">
        white
      </button>
      <button onClick={Black} className="black">
        Black
      </button>
      <button onClick={Blue} className="blue">
        blue
      </button>
      <button onClick={Green} className="green">
        green
      </button>
      <button onClick={Gray} className="gray">
        gray
      </button>
      <button onClick={Yellow} className="yellow">
        yellow
      </button>
      <button onClick={Orange} className="orange">
        orange
      </button>
      <button onClick={Pink} className="pink">
        pink
      </button>
      <button onClick={Violet} className="violet">
        violet
      </button>
      <button onClick={Lime} className="lime">
        lime
      </button>
      <button onClick={Beige} className="beige">
        beige
      </button>
      <button onClick={Silver} className="silver">
        silver
      </button>
      <button onClick={Khaki} className="lime">
        khaki
      </button>
      <button onClick={Tan} className="tan">
        tan
      </button>
      <button onClick={Crimson} className="crimson">
        crimson
      </button>
      <button onClick={Ivory} className="ivory">
        ivory
      </button>
      <button onClick={Magenta} className="magenta">
        magenta
      </button>
      <button onClick={Brown} className="brown">
        brown
      </button>
      <button onClick={Purple} className="purple">
        purple
      </button>
      <button onClick={Gold} className="gold">
        gold
      </button>
      <button onClick={Turquoise} className="turquoise">
        turquoise
      </button>
      <button onClick={Teal} className="teal">
        teal
      </button>
      <button onClick={Skyblue} className="skyblue">
        skyblue
      </button>
      <button onClick={Navy} className="navy">
        navy
      </button>
      <button onClick={Lavender} className="lavender">
        lavender
      </button>
      <button onClick={Maroon} className="maroon">
        maroon
      </button>
      <button onClick={Sienna} className="sienna">
        sienna
      </button>
      <button onClick={Bisque} className="bisque">
        bisque
      </button>
      <button onClick={Carm} className="carm">
        Designer
      </button>
    </div>
  );
};
export default Buttons;
