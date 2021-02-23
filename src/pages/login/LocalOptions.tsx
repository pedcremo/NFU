import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../State";
import { generateGravatar, imageLocal } from "../../utils";
import { useHistory, Link } from "react-router-dom";
import { IonLabel, IonInput, IonLoading, IonButton, IonIcon } from "@ionic/react";
import "./LocalOptions.css";
import { useTranslation } from "react-i18next";
import { home } from "ionicons/icons";


const LocalOptions: React.FC<{ action?: Function }> = ({ action }) => {
  const history = useHistory();
  const { dispatch, state } = useContext(AppContext);
  const [email, setEmail] = useState<React.ReactText | undefined>("");
  const [password, setPassword] = useState<React.ReactText | undefined>("");
  const [, setFormErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const formRef = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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

      <Link
        className="link"
        to={'/app/home'}
      >
        <div className="cardContent__operation--icon ">
          <IonButton>
            <IonIcon
              icon={home}
              className="eventContent__actions--icon"
            />
            &nbsp;&nbsp; HOME
          </IonButton>
          </div>
        </Link>
    </form>
  );
};
export default LocalOptions;
