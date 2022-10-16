import { useState } from 'react';

function Users() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Users</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        {count}
      </button>
    </div>
  );
}

export default Users;
