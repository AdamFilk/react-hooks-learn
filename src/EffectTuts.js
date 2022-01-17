import { useEffect, useState } from "react";

const EffectTuts = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0].email);
      });
  }, []);
  return (
    <div>
      <p>{data}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default EffectTuts;
