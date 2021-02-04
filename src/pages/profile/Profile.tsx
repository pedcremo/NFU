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
import {
  basketball,
  settings,
  share,
  gameController,
} from "ionicons/icons";
import Sports from "./Sports";
import { AppContext } from "../../State";
import { Link } from "react-router-dom";
import ButtonLink from "./ButtonLink";

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
                backgroundImage: `url('${state.user.image}')`,
              }}
            ></div>
            <Sports sportsList={state.user.sports} />
            <h1>{state.user.name}</h1>
            <div className="Content__Buttons">
              <div>
                <ButtonLink link="/login" text="New" icon={gameController} />
                <ButtonLink link="/login" text="Matches" icon={basketball} />
              </div>
              <div>
                <ButtonLink
                  link="/login"
                  text="Invitaciones"
                  icon={share}
                />
                <ButtonLink link="/login" text="Settings" icon={settings} />
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
