import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };

    case "SHOWTEXT":
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};
const ReducerTuts = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <div className="reducer">
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "SHOWTEXT" });
        }}
      >
        Show text and Inrement
      </button>
      {state.showText && <div>This is the text I want to show</div>}
    </div>
  );
};

export default ReducerTuts;
