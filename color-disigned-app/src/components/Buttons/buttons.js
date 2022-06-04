    import React, {useState} from "react";
import { Container } from "react-bootstrap";
import './buttons.css';

const Buttons = () => {
  const [text, setText] = useState("");

  const Red = () => {
    setText("I'm Red text");
  };

  const White = () => {
    setText("I'm White text");
  };

  const Blue = () => {
    setText("I'm Blue text");
  };

  const Green = () => {
    setText("I'm Green text");
  };

  const Gray = () => {
    setText("I'm Gray text");
  };

  const Yellow = () => {
    setText("I'm Yellow text");
  };

  const Orange = () => {
    setText("I'm Orange text");
  };

  const Pink = () => {
    setText("I'm Pink text");
  };

  const Violet = () => {
    setText("I'm Violet text");
  };

  const Lime = () => {
    setText("I'm Lime text");
  };

  const Beige = () => {
    setText("I'm Beige text");
  };

  const Silver = () => {
    setText("I'm Silver text");
  };

  const Khaki = () => {
    setText("I'm Khaki text");
  };

  const Tan = () => {
    setText("I'm Tan text");
  };

  const Crimson = () => {
    setText("I'm Crimson text");
  };

  const Ivory = () => {
    setText("I'm Ivory text");
  };

  const Magenta = () => {
    setText("I'm Magenta text");
  };

  const Brown = () => {
    setText("I'm Brown text");
  };

  const Gold = () => {
    setText("I'm Gold text");
  };

  const Purple = () => {
    setText("I'm Purple text");
  };

  const Turquoise = () => {
    setText("I'm Turquoise text");
  };

  const Teal = () => {
    setText("I'm Teal text");
  };

  const Skyblue = () => {
    setText("I'm Skyblue text");
  };

  const Navy = () => {
    setText("I'm Navey text");
  };

  const Lavender = () => {
    setText("I'm Lavender text");
  };

  const Fuchsia = () => {
    setText("I'm Fuchsia text");
  };

  const Maroon = () => {
    setText("I'm Maroon text");
  };

  const Sienne = () => {
    setText("I'm Sienne text");
  };

  const Bisque = () => {
    setText("I'm Bisque text");
  };

  const Carm = () => {
    setText("This page was desiged by carmelbaome@gmail.com");
  };

  return (
    <div className="container">
      <h1>{text}</h1>
      <button onClick={Red} className="red">red</button>
      <button onClick={White} className="white">white</button>
      <button onClick={Blue} className="blue">blue</button>
      <button onClick={Green} className="green">green</button>
      <button onClick={Gray} className="gray">gray</button>
      <button onClick={Yellow} className="yellow">yellow</button>
      <button onClick={Orange} className="orange">orange</button>
      <button onClick={Pink} className="pink">pink</button>
      <button onClick={Violet} className="violet">violet</button>
      <button onClick={Lime} className="lime">lime</button>
      <button onClick={Beige} className="beige">beige</button>
      <button onClick={Silver} className="silver">silver</button>
      <button onClick={Khaki} className="lime">khaki</button>
      <button onClick={Tan} className="tan">tan</button>
      <button onClick={Crimson} className="crimson">crimson</button>
      <button onClick={Ivory} className="ivory">ivory</button>
      <button onClick={Magenta} className="magenta">magenta</button>
      <button onClick={Brown} className="brown">brown</button>
      <button onClick={Purple} className="purple">purple</button>
      <button onClick={Gold} className="gold">gold</button>
      <button onClick={Turquoise} className="turquoise">turquoise</button>
      <button onClick={Teal} className="teal">teal</button>
      <button onClick={Skyblue} className="skyblue">skyblue</button>
      <button onClick={Navy} className="navy">navy</button>
      <button onClick={Lavender} className="lavender">lavender</button>
      <button onClick={Maroon} className="maroon">maroon</button>
      <button onClick={Sienne} className="sienna">sienna</button>
      <button onClick={Bisque} className="bisque">bisque</button>
      <button onClick={Carm} className="carm">Designer</button>
    </div>
  );
};
export default Buttons;
