import React, { useContext } from "react";
import "./Profile.css";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { basketball, settings, share, gameController, person } from "ionicons/icons";
import Sports from "./Sports";
import { AppContext } from "../../State";
import { Redirect } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { useTranslation } from "react-i18next";
import { stat } from "fs";


const Profile: React.FC = () => {
  const { state } = useContext(AppContext);
  const { t } = useTranslation();

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
            <Sports sportsList={undefined} />
            {/* <Sports sportsList={["tennis", "basket", "football", "cs GO"]} /> */}
            <h1>{state.user.username}</h1>
            <div className="Content__Buttons">
              <div>
                <ButtonLink
                  link="/app/create"
                  text={t("profile.new")}
                  icon={gameController}
                />
                <ButtonLink
                  link="/app/events"
                  text={t("profile.matches")}
                  icon={basketball}
                />
              </div>
              <div>

                <ButtonLink
                  link="/notifications"
                  text={t("profile.invitation")}
                  icon={share}
                />
                <ButtonLink
                  link="/settings"
                  text={t("profile.settings")}
                  icon={settings}
                />
              </div>
              <ButtonLink
                link="/profile/update"
                text={t("profile.update")}
                icon={person}
              />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
