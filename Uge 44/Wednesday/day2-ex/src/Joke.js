import { useState, useEffect } from "react";

function Joke(props) {
  const { besked } = props;
  const url = "https://api.chucknorris.io/jokes/random";
  const [joke, setJoke] = useState("No joke");

  useEffect(() => {
    const interval = setInterval(() => {
      getJoke();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <button onClick={getJoke}>Hent joke</button>
      <p>{joke}</p>
    </div>
  );

  function getJoke() {
    fetch(url)
      .then((res) => res.json()) //in flow1, just do it
      .then((data) => {
        setJoke(data.value);
      });
  }
}
export default Joke;
