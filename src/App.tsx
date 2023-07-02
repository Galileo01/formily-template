import React from 'react'

const { useState } = React

export default function App() {
    const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React + Vite</h1>
      <h2>On CodeSandbox!</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}