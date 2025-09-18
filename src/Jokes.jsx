import { useState, useEffect } from "react";

export default function Jokes() {
  const [joke, setJoke] = useState(null);
  const [punch, setPunch] = useState(false);
  const [count, setCount] = useState(0);

  const fetchJoke = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJoke(data);
    setPunch(false);
    setCount(count + 1);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="card">
      {joke && (
        <>
          <h2>Question: {joke.setup}</h2>
          {punch && <h3>Punchline: {joke.punchline}</h3>}
        </>
      )}

      <button onClick={fetchJoke}>Get Joke</button>
      <button onClick={() => setPunch(!punch)}>Show Punchline</button>

      <p>
        <small>Jokes Read: {count}</small>
      </p>
    </div>
  );
}
