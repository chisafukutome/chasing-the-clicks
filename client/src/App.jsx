import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  function addCount() {
    // retrieve data from db
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <main>
        <h1>Chasing the Clicks</h1>
        <p>Lv 1: Software Engineering Super League</p>
        <p>current count</p>
        <h3>{count}</h3>
        <button type="button" onClick={addCount}>
          Count
        </button>
      </main>
    </>
  );
};

export default App;
