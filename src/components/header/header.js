import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";
import { Redirect, Link } from "react-router-dom";
import { ellipsisVertical } from "ionicons/icons";

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

  useEffect(() => {
    state.theme === "Dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  });

  if (state.welcome !== "true") {
    return <Redirect to="/welcome" />;
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
            <Link to="/profile" slot="end" className="navbar-user-link">
              <IonChip className="navbar-user">
                <IonAvatar>
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </IonAvatar>
                <IonLabel>{state.user}</IonLabel>
              </IonChip>
            </Link>
          ) : (
            <Link to="/login" slot="end" className="navbar-login">
              <IonLabel>Login</IonLabel>
            </Link>
          )}
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
