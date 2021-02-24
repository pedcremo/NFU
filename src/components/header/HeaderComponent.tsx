import React, { useContext, useEffect } from "react";
import { AppContext } from "../../State";
import { Redirect, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonLabel,
  IonMenuButton,
  IonChip,
  IonAvatar,
  IonImg
} from "@ionic/react";
import "./header.css";

type HeaderProps = {
  page: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { state } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.className = state.theme;
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
            <Link to="/app/profile" slot="end" className="navbar-user-link">
              <IonChip className="navbar-user">
                <IonAvatar>
                  <IonImg src={state.user.image} />
                </IonAvatar>
                <IonLabel>{state.user.username}</IonLabel>
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
