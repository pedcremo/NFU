import React, { useContext } from "react";
import "./Profile.css";

import { IonContent, IonIcon, IonItem, IonPage } from "@ionic/react";

import {
  basketball,
  settings,
  share,
  gameController,
  person,
  cameraOutline
} from "ionicons/icons";

import Sports from "./Sports";
import { AppContext } from "../../State";
import { Redirect } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/HeaderComponent";
import { validateMimetype, validateImgSize } from "../../utils";

const Profile: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  function encodeImageFileAsURL(el) {
    var file = el.target.files[0];
    if (file && validateImgSize(file) && validateMimetype(file)) {
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

  let changeImage = () => {
    let fileInput = document.querySelector('#uploadImgProfile') as HTMLInputElement
    fileInput.click()
  }

  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <Header page={t("pages.profile")} />
      <IonContent>
        <div className="Content">
          <div className="Content__info">
            <div className="img-container">
              <img className="ProfileImage" src={state.user.image} alt="" onClick={() => changeImage()}/>
              <IonIcon className="ProfileImage-icon" icon={cameraOutline} onClick={() => changeImage()}/>
            </div>
            <input style={{display:"none"}} type="file" id="uploadImgProfile"
              disabled={(state.currentAvatar === 'gravatar' ? true: false)}
              onChange={(el) => encodeImageFileAsURL(el)}
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
                  changeState={{type:"SET_SEGMENT",value:"yours"}}
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
