import { Routes, Route } from "react-router-dom";
import { LogIn, SignUp, Search, Favorites } from "../pages/index";
import List from "../components/list/List";
import { useState } from "react";

export default function Navigation() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currName, setCurrName] = useState("login");

  const toggleForm = (currName) => {
    setCurrName(currName);
  }

   const updateToken = (newToken) => {
     setToken(newToken);
   };

  return (
    <Routes>
      {token ? (
        <>
        <Route path="youtube-spa/search" element={<Search />} />
        <Route path="youtube-spa/search/:onDemand" element={<List />} />
        <Route path="youtube-spa/favorites" element={<Favorites />} />
        </>
      ) : (
        <>
          <Route
            path="/youtube-spa"
            element={
              <LogIn onFormSwitch={toggleForm} updateToken={updateToken} />
            }
          />
          <Route
            path="/youtube-spa/signup"
            element={<SignUp onFormSwitch={toggleForm} />}
          />
        </>
      )}
    </Routes>
  );
}
