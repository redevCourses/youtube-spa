import cl from "../styles/Components.module.css";
import icon from "../images/icon.svg";
import { Button } from 'antd'
import { useNavigate } from "react-router-dom";

export default function Header({ btn, nav, ...props }) {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/youtube-spa");
    window.location.reload();
  }

  return (
    <>
      <div className={cl.header}>
        <div className={cl.headerLeft}>
          <img src={icon} alt="icon" style={{ width: "80px" }} />
          <div className={cl.tabs}>
            <Button
              {...props}
              type="primary"
              style={{ width: "120px" }}
              onClick={nav}
            >
              {btn}
            </Button>
          </div>
        </div>
        <Button onClick={() => logOut()}>Log Out</Button>
      </div>
    </>
  );
}