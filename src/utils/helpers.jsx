import axios from "axios";

// login&register
export const login = async (userLoginData, navigate, updateToken) => {
  const loginUrl = `${process.env.REACT_APP_URL}auth/login`;
  try {
    const result = await axios.post(loginUrl, userLoginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", result.data.token);
    updateToken(result.data.token);
    navigate("/youtube-spa/search");
  } catch (e) {
    if (e && e.response && e.response.data) {
      console.log(e.response.data.message);
    } else {
      console.log("An error occurred while logging in.");
    }
  }
}

export const register = async (userRegisterData, changePage) => {
  const registerUrl = `${process.env.REACT_APP_URL}users/register`;
  try {
    const result = await axios.post(registerUrl, userRegisterData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
      changePage();
      console.log(result)
  } catch (e) {
    if (e && e.response && e.response.data) {
      console.log(e.response.data.message);
    } else {
      console.log("An error occurred while register.");
    }
  }
}

  export default function handleVideoClick (videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };