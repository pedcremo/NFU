import React, { useContext } from "react";
import "./Profile.css";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { basketball, settings, share, gameController } from "ionicons/icons";
import Sports from "./Sports";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import ButtonLink from "./ButtonLink";

const Profile: React.FC = () => {
  const { state } = useContext(AppContext);

  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>{"NFU"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="Content">
          <div className="Content__info">
            <div
              className="Content__ProfileImage"
              style={{
                backgroundImage: `url('${"https://img2.freepng.es/20180408/tvw/kisspng-user-computer-icons-gravatar-blog-happy-woman-5aca6d03e6c3f5.6041125615232156199452.jpg"}')`,
              }}
            ></div>
            <Sports sportsList={["tennis" ,"basket" ,"football" ,"cs GO"]} />
            <h1>{state.user.name}</h1>
            <div className="Content__Buttons">
              <div>
                <ButtonLink link="/login" text="New" icon={gameController} />
                <ButtonLink link="/login" text="Matches" icon={basketball} />
              </div>
              <div>
                <ButtonLink link="/login" text="Invitaciones" icon={share} />
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
