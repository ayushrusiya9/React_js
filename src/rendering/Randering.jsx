import { useState } from "react";

const App = () => {
  let [login, setLogin] = useState(false);
  let [dark, setDark] = useState(false);

  let ans = login ? <h1>Welcome User</h1> : <h1>Please Login</h1>;
  let ansdark = dark ? <h1>Dark activated</h1> : <h1>Dark mode not activated</h1>;

  let d = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
    padding: "0",
    margin:"0"
  };

  let l = {
    backgroundColor: "white",
    color: "black",
    height: "100vh",
    padding: "0",
    margin:"0"
  };

  return (
    <>
        <div style={dark ? d : l} >
          {ans}
          {ansdark}
          <button onClick={() => setLogin(!login)}>
            {login ? "Logout" : "Login"}
          </button>
          <button onClick={() => setDark(!dark)}>Dark Mode</button>
          <h1>render</h1>
        </div>
    </>
  );
};

export default App;
