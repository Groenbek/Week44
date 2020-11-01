import { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(20);

  return (
    <div>
      <p>You clicked me {count} times! Naughty!</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count + 5)}>Add 5</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
      <button onClick={() => setCount(count - 5)}>Subtract 5</button>
      <p>You unclicked me {count} times! Feels bad!</p>
    </div>
  );

  /*   useEffect(() => {
    localStorage.setItem("count", count);
    localStorage.getItem("count");
  }); */
}
export default Count;
