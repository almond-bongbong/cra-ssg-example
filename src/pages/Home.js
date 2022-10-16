import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Home</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        {count}
      </button>
    </div>
  );
}

export default Home;
