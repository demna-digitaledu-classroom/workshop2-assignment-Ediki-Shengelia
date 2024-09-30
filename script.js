// 1

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Parent></Parent>
    </div>
  );
}
const Parent = () => {
  const users = [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Carter",
      age: 20,
    },
    {
      id: 2,
      firstName: "Daniel",
      lastName: "Thompson",
      age: 51,
    },
    {
      id: 3,
      firstName: "Sarah",
      lastName: "Kim",
      age: 22,
    },
    {
      id: 4,
      firstName: "Jessica",
      lastName: "Lee",
      age: 32,
    },
  ];
  const isUserLoggedIn = true;

  return (
    <div>
      <h1>
        <Child users={users} isUserLoggedIn={isUserLoggedIn}></Child>
      </h1>
    </div>
  );
};
const Child = ({ users, isUserLoggedIn }) => {
  if (!isUserLoggedIn) {
    return <h2>you are not authorized to see user list</h2>;
  }
  if (users.length === 0) {
    return <h2>no users in the system</h2>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {users.firstName} {user.lastName} age: {user.age}
        </li>
      ))}
    </ul>
  );
};

export default App;


// 2.
import logo from "./logo.svg";
import "./App.css";
import { Children } from "react";

function App() {
  return (
    <div>
      <Wrapper></Wrapper>
    </div>
  );
}

const Wrapper = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav>
      <h2>hello world</h2>
    </nav>
  );
};
const Footer = () => {
  return (
    <footer>
      <h2>from any place of world</h2>
    </footer>
  );
};
export default App;