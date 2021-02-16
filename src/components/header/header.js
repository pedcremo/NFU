import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";
import { Redirect, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CryptoJS from "crypto-js";

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonLabel,
  IonMenuButton,
  IonChip,
  IonAvatar,
} from "@ionic/react";
import "./header.css";

const Header = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    state.theme === "Dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  });

  if (state.welcome !== "true") {
    return <Redirect to="/welcome" />;
  }

  //crypto-js We use a library to obtain an md5 of the authenticated user's email
  function generateGravatar() {
    var md5Hash = CryptoJS.MD5(state.user);
    let url_image = "https://www.gravatar.com/avatar/" + md5Hash;
    return url_image;
  }

  const page = props.page;
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>{page}</IonTitle>
          {state.user ? (
            <Link to="/app/profile" slot="end" className="navbar-user-link">
              <IonChip className="navbar-user">
                <IonAvatar>
                  <img src={generateGravatar()} />
                </IonAvatar>
                <IonLabel>{state.user}</IonLabel>
              </IonChip>
            </Link>
          ) : (
            <Link to="/login" slot="end" className="navbar-login">
              <IonLabel>{t("header.login")}</IonLabel>
            </Link>
          )}
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
