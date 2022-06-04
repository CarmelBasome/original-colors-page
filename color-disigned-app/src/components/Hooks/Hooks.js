import {} from "@mui/base";
import React, {useReducer} from "react";

const StateTutorial = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {count: state.count + 1, showText: !state.showText};
      case "toggleShowText":
        return {count: state.count -1, showText: !state.showText};
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({type: "INCREMENT"});
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({type: "toggleShowText"});
        }}
      >
        Decrement
      </button>
      {state.showText && <h2>This is the text</h2>}
    </div>
  );
};

export default StateTutorial;
