
import {} from "@mui/base";
import axios from "axios";
import React, {useEffect, useState} from "react";

const StateTutorial = () => {
  const [text, setText] = useState(window.innerWidth);
  
  const carm = () => {
    setText(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', carm);
  })
  
  

  return <div className="modal">
    <h2>{text}</h2>
  </div>
};

export default StateTutorial;


/*
import {} from "@mui/base";
import axios from "axios";
import React, {useEffect, useState} from "react";
import Home from "../../Pages/Home";
import Services from "../../Pages/Services";

function StateTutorial(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  return (
      <div className="card">
        <h2>{props.text}</h2>
        <div>
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Home />}
        {modalIsOpen && <Services />}
        
      </div>
  );
};

export default StateTutorial;
*/