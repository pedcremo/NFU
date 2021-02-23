import React, { useContext } from "react";
import "./Profile.css";

import { IonContent, IonItem, IonPage } from "@ionic/react";

import {
  basketball,
  settings,
  share,
  gameController,
  person,
} from "ionicons/icons";

import Sports from "./Sports";
import { AppContext } from "../../State";
import { Redirect } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { useTranslation } from "react-i18next";

import Header from "../../components/header/HeaderComponent";

const Profile: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  const encodeImageFileAsURL = (el) => {
    var file = el.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        let user = state.user;
        user.image = reader.result;
        user.imageLocal = reader.result;
        dispatch({ type: "SET_USER", value: user });
      };
      reader.readAsDataURL(file);
    }
  }

  console.log(state.user);

  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <Header page={t("pages.profile")} />
      <IonContent>
        <div className="Content">
          <div className="Content__info">
            <input
              type="file"
              id="uploadImgProfile"
              disabled={(state.currentAvatar === 'gravatar' ? true: false)}
              onChange={(el) => encodeImageFileAsURL(el)}
              hidden={true}
            />
            <img
              className="ProfileImage"
              src={state.user.image}
              alt=""
              onClick={() => {
                state.user.image = null;
                if (!state.user.image) {
                  if (document.getElementById('uploadImgProfile')) document.getElementById('uploadImgProfile').click();
                }
              }}
            />
            <Sports sportsList={undefined} />
            {/* <Sports sportsList={["tennis", "basket", "football", "cs GO"]} /> */}
            <h1>{state.user.username}</h1>
            <div className="Content__Buttons">
              <IonItem>
                <ButtonLink
                  link="/app/create"
                  text={t("profile.new")}
                  icon={gameController}
                />
              </IonItem>
              <IonItem>
                <ButtonLink
                  link="/app/home"
                  text={t("profile.matches")}
                  icon={basketball}
                />
              </IonItem>
              <IonItem>
                <ButtonLink
                  link="/app/notifications"
                  text={t("profile.invitation")}
                  icon={share}
                />
              </IonItem>
              <IonItem>
                <ButtonLink
                  link="/app/settings"
                  text={t("profile.settings")}
                  icon={settings}
                />
              </IonItem>
              <IonItem>
                <ButtonLink
                  link="/app/profile/update"
                  text={t("profile.update")}
                  icon={person}
                />{" "}
              </IonItem>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
