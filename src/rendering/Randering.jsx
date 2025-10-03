import { useState } from "react";

const App = () => {
  let [login, setLogin] = useState(false);
  let [dark, setDark] = useState(false);
  let [meassage,setmaessage] = useState(false);

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
          </button> <br /> <br />
          <button onClick={() => setDark(!dark)}>
            {dark ? "Light Mode" : "Dark Mode"}
          </button>

          <h1>render</h1>
          { meassage && <h1>Hello User</h1> }
          <button onClick={()=>{setmaessage(!meassage)}}>Show Message</button>
        </div>
    </>
  );
};

export default App;
