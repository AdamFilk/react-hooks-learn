import { useRef } from "react";

const RefTuts = () => {
  const inputField = useRef(null);
  const onClick = () => {
    inputField.current.value = "";
  };
  return (
    <div>
      <input type="text" ref={inputField} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default RefTuts;
<div></div>;
