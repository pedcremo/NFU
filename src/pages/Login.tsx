import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../State";
import { Redirect, useHistory } from "react-router-dom";


import { IonContent, IonInput, IonPage, IonLoading } from "@ionic/react";

import "./login.css";
import icon from "../assets/img/icono.png";
import GoogleIcon from "../assets/img/google_icon.svg";
import FacebookIcon from "../assets/img/facebook_icon.svg";
import DeporteImg from "../assets/img/deporte_img.png";


const Login: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState<React.ReactText | undefined>("");
  const [password, setPassword] = useState<React.ReactText | undefined>("");
  const [, setFormErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoading(true);
      setTimeout(() => dispatch({ type: "SET_USER", value: email }), 5000);
    } catch (e) {
      console.error(e);
      setShowLoading(false);
      setFormErrors(e);
    }
  };
  if (state.welcome !== 'true'){return <Redirect to="/welcome" />}
  if (state.user) return <Redirect to="/app/home" />;

  let showInputs = (op) => {
    let socialOps = document.getElementById("socialOps");
    let localOps = document.getElementById("localOps");
    let btnLogin = document.getElementById("btnLogin");

    switch (op) {
      case "local":
        localOps.style.display = "flex";
        socialOps.style.display = "none";
        btnLogin.style.display = "flex";
        break;
      case "social":
        localOps.style.display = "none";
        socialOps.style.display = "flex";
        break;
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonLoading
          isOpen={showLoading}
          message={"Logging in"}
          onDidDismiss={() => setShowLoading(false)}
        />
        <div className="loginPageContent">
          <div className="LoginTitleContainer">
            <img src={icon} alt="icon" />
            <span className="LoginTitle">Nos Falta Uno</span>
          </div>
          <img src={DeporteImg} alt="Deporte IMG" className="loginImg" />
          <span className="prhaseLogin">
            Find tournaments and matches for the sport that you prefer
          </span>
          <form
            onSubmit={handleSubmit}
            method="post"
            name="login_form"
            ref={formRef}
            action=""
            className="loginOptionsContainer_form"
          >
            <div className="loginOptionsContainer" id="socialOps">
              <div className="loginOption loginOption--google">
                <img src={GoogleIcon} alt="GoogleIcon" className="socialIcon" />
                Continue with Google
              </div>
              <div className="loginOption loginOption--facebook">
                <img
                  src={FacebookIcon}
                  alt="GoogleIcon"
                  className="socialIcon"
                />
                Continue with Facebook
              </div>
              <div
                className="loginOption loginOption--local"
                onClick={() => showInputs("local")}
              >
                Continue with Email
              </div>
            </div>
            <div
              className="loginInputsContainer"
              id="localOps"
              style={{ display: "none" }}
            >
              <div className="loginOption loginOption--input">
                <IonInput
                  type="email"
                  required
                  value={email}
                  className="inputFieldLogin"
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  placeholder="Email.."
                />
              </div>
              <div className="loginOption loginOption--input">
                <IonInput
                  type="password"
                  value={password}
                  className="inputFieldLogin"
                  required
                  onInput={(e) => setPassword(e.currentTarget.value)}
                  placeholder="Password.."
                />
              </div>

              <button
                className="loginOption loginOption--submit"
                type="submit"
                id="btnLogin"
              >
                Log In
              </button>
              <div className="login-row">
                <div
                  className="loginOption loginOption--local loginOption--create"
                  onClick={() => history.push("recover")}
                >
                  I've forgot my password
                </div>
                <div className="separator"></div>
                <div
                  className="loginOption loginOption--local loginOption--create"
                  id="createBtnLink"
                  onClick={() => history.push("register")}
                >
                  Create an account
                </div>
              </div>

              <div
                className="loginOption loginOption--local"
                onClick={() => showInputs("social")}
              >
                Continue with Google or Facebook
              </div>
            </div>
          </form>
        </div>

        
        </IonContent>

    </IonPage>
  );
};

export default Login;
