import { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div className="button">
      <button>Button from Child</button>
      {toggle && <div>Toggle</div>}
    </div>
  );
});

export default Button;
