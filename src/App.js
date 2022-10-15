import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

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

export default App;
