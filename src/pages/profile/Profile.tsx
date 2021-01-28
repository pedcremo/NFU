import React, { useContext } from "react";
import "./Profile.css";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
} from "@ionic/react";
import Sports from "./Sports";
import { AppContext } from "../../State";
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
  const { state } = useContext(AppContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>{"NFU"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="Content">
          <div className="Content__info">
            <div
              className="Content__ProfileImage"
              style={{
                backgroundImage: `url('${state.loggedUser.image}')`,
              }}
            ></div>
            <Sports sportsList={state.loggedUser.sports} />
            <h1>{state.loggedUser.name}</h1>
            <Link className="Content__Link" to="/login">Crear Partida</Link>
            <Link className="Content__Link" to="/login">Gestionar Partidas</Link>
            <Link className="Content__Link" to="/login">Invitaciones</Link>
            <Link className="Content__Link" to="/login">Modificar Perfil</Link>
            <Link className="Content__Link" to="/login">Settings</Link>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
