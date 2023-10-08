import { useState } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import icon from  '../components/images/icon.svg'
import {login} from '../utils/helpers'

export default function LogIn({ onFormSwitch, updateToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userLoginData = {
    email: email,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const changePage = () => {
    onFormSwitch("register");
    navigate("/youtube-spa/signup");
  }

  return (
    <>
      <div className="wrapper">
        <img src={icon} alt="icon" />
        <h2>Log In</h2>
        <form className="content login" onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Login"
            id="email"
            name="email"
          ></Input>

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          ></Input>

          <Button type="primary" className="primary"
            onClick={() => login(userLoginData, navigate, updateToken)}
          >
            Log In
          </Button>
        </form>
      </div>
      <h3>
        Don't have an account? <a onClick={() => changePage()}>Sign Up!</a>
      </h3>
    </>
  );
}
