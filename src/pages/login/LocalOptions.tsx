import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../State";
import { generateGravatar, imageLocal, validateEmail, validatePassword } from "../../utils";
import { useHistory } from "react-router-dom";
import { IonLabel, IonInput, IonLoading, IonButton } from "@ionic/react";
import "./LocalOptions.css";
import { useTranslation } from "react-i18next";
import { exception } from "console";

const LocalOptions: React.FC<{ action?: Function }> = ({ action }) => {
  const history = useHistory();
  const { dispatch, state } = useContext(AppContext);
  const [email, setEmail] = useState<React.ReactText | undefined>("");
  const [password, setPassword] = useState<React.ReactText | undefined>("");
  const [, setFormErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const formRef = useRef(null);
  const { t } = useTranslation();

  let handleEnter = (e) => {
    if(e && e.charCode === 13) {
      if ( email && password ) handleSubmit(e); 
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateEmail(email) && validatePassword(password)){
        let username = email as string;
        let user = {
          email: email,
          username: username.split("@")[0],
          image:
            state.currentAvatar === "gravatar"
              ? generateGravatar(email)
              : imageLocal,
          imageLocal: imageLocal,
          events_joined: []
        };
        
        setShowLoading(true);
        setTimeout(() => {
          console.log("Añadiendo las notificaciones");
          
          dispatch({
            type: "SET_USER_NOTIFICATIONS",
            value: [{ msg: "Wellcome to NFU", date: "10/10/2021", read: false }],
          });
          dispatch({ type: "SET_USER", value: user })}, 5000);
      }      
    } catch (e) {
      console.error(e);
      setShowLoading(false);
      setFormErrors(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      name="login_form"
      ref={formRef}
      className="loginOptionsContainer_form"
    >
      <IonLoading
        isOpen={showLoading}
        message={"Logging in"}
        onDidDismiss={() => setShowLoading(false)}
      />
      <IonInput
        type="email"
        required
        value={email}
        className="loginOption loginOption--input inputFieldLogin"
        onInput={(e) => setEmail(e.currentTarget.value)}
        placeholder="Email.."
      />
      <IonInput
        type="password"
        value={password}
        className="loginOption loginOption--input inputFieldLogin"
        required
        onInput={(e) => setPassword(e.currentTarget.value)}
        placeholder={t("login.local_options.password")}
        onKeyPress={(e) => handleEnter(e)}
      />
      <IonButton
        className="loginOption loginOption--submit"
        type="submit"
        id="btnLogin"
      >
        {" "}
        {t("login.local_options.login")}{" "}
      </IonButton>
      <div className="login-row">
        <IonLabel
          className="loginOption loginOption--local loginOption--create"
          onClick={() => history.push("recover")}
        >
          {t("login.local_options.forgotten_password")}
        </IonLabel>
        <IonLabel
          className="loginOption loginOption--local loginOption--create"
          id="createBtnLink"
          onClick={() => history.push("register")}
        >
          {t("login.local_options.create_account")}
        </IonLabel>
      </div>
      <IonLabel
        className="loginOption loginOption--local"
        onClick={() => action("Social")}
      >
        {" "}
        {t("login.local_options.social_options")}
      </IonLabel>
    </form>
  );
};
export default LocalOptions;
