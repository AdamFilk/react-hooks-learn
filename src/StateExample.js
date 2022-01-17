import { useState } from "react";

const StateExample = () => {
  const [text, setCount] = useState(null);
  const changeText = (event) => {
    setCount(event.target.value);
  };
  return (
    <div className="state_example">
      <input type="text" onChange={changeText} />
      {text}
    </div>
  );
};

export default StateExample;
