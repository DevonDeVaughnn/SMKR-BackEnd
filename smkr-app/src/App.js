import React, { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp2 from "./pages/SignUp2";
import Login from "./pages/Login";
import Strain from "./pages/Strain";
// import Messages from "./pages/Messages"
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import StrainSearch from "./pages/Straindex";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkStatus = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:3000/users/tokenValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:3000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkStatus();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={SignUp2} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/straindex" component={Strain} />
            {/* <Route exact path="/messages" component={Messages} /> */}
            <Route exact path="/straindex/strains" component={StrainSearch} />
            {/* <Route exact path="/account/:id" component={AccountSettings} /> */}
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
