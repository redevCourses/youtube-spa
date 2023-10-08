import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Radio, InputNumber } from "antd";
import icon from "../components/images/icon.svg";
import { register } from "../utils/helpers";


export default function SignUp({ onFormSwitch }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const userRegisterData = {
    username: username,
    email: email,
    password: password,
    gender: gender,
    age: age,
  };
    const navigate = useNavigate();

    const changePage = () => {
      onFormSwitch("login");
      navigate("/youtube-spa");
    }

  return (
    <>
      <div className="wrapper">
        <img src={icon} alt="icon"/>
        <h2>Sign Up</h2>
        <form className="content register" onSubmit={handleSubmit}>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            name="text"
          ></Input>

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            name="email"
          ></Input>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="password"
          ></Input>
          <Radio.Group onChange={onChangeGender} value={gender}>
            <Radio value={"male"}>Male</Radio>
            <Radio value={"female"}>Female</Radio>
          </Radio.Group>
          <InputNumber
            onChange={(e) => setAge(e.target.value)}
            value={age}
            placeholder="Age"
            type="number"
            min={10}
            max={100}
            defaultValue={18}
          ></InputNumber>

          <Button
            onClick={() => register(userRegisterData, changePage)}
            type="primary"
          >
            Sign Up
          </Button>
        </form>
      </div>

      <h3>
        Already have an account? <a onClick={() => changePage()}>Log In!</a>
      </h3>
    </>
  );
}
