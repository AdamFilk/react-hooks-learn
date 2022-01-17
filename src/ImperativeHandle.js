import { useRef } from "react";
import Button from "./Button";
const ImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Parent Button
      </button>
      <Button ref={buttonRef}></Button>
    </div>
  );
};

export default ImperativeHandle;
