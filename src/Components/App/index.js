import { useEffect, useState } from "react";
import logo from "./soc-logo.png";
import success from "./Successful completion of project.png"
import Display from "../Display";
import Input from "../Input";
import WelcomePage from "../WelcomePage";
import "./App.css";
const url = process.env.REACT_APP_API_URL;

function App() {
  const [welcome, setWelcome] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userTable, setUsertable] = useState({});
  console.log(name, password);

  async function fetchUserTable() {
    try {
      const response = await fetch(`${url}/user`);
      const data = await response.json();
      console.log("user table data: ", data);
      setUsertable(data);
      console.log("userTable from APP: ", userTable);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchUserTable();
  });

  if (welcome)
    return (
      <div className="main-parent-div">
        <Input userTable={userTable} name={name} />
        <Display userTable={userTable} name={name} />
      </div>
    );

  // useEffect that fetched data using the 'name' to send a GET request for the correct table
  return (
    <div >
      <img className="logo" src={logo} alt="School-of-Code-logo"></img>
      <h1 className="welcome-header">Hey there, Camper!</h1>
      <img className="success" src={success} alt={"successful business person"}></img>
      <WelcomePage
        setWelcome={setWelcome}
        setName={setName}
        setPassword={setPassword}
      />
      <p>Input and display hidden until welcome page passed.</p>
    </div>
  );
}

export default App;
