import { useState } from 'react';

function About() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>About</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        {count}
      </button>
    </div>
  );
}

export default About;
