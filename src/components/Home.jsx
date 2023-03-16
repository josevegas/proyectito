import { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [segundos, setSegundos] = useState(0);

  if (count < 0) {
    setCount(0);
  }


  useEffect(() => {
    setTimeout(() => {
      setSegundos(segundos + 1);}
    , 2000);
  }, [count, segundos]);

  return (
    <div className="home">
      <h1>Counter</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div>
        {segundos}
      </div>
    </div>
  );
};

export default Home;
