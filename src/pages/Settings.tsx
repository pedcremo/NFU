import React, { useContext, useState, useCallback } from "react";
import { AppContext } from "../State";
// import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage
} from "@ionic/react";
import "./Settings.css";
import { Redirect } from "react-router-dom";
import Header from "../components/header/header";

const Settings: React.FC = () => {
  // const history = useHistory();
  const { state } = useContext(AppContext);
 
  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <Header page="Settings" />
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default Settings;
