import React, { useContext } from "react";
import "./Profile.css";


import { IonContent, IonItem, IonPage,IonLabel } from "@ionic/react";

import {
  basketball,
  settings,
  share,
  gameController,
  person,
} from "ionicons/icons";

import Sports from "./Sports";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { useTranslation } from "react-i18next";

import Header from "../../components/header/HeaderComponent";

const Profile: React.FC = () => {
  const { state } = useContext(AppContext);
  
  const { t } = useTranslation();

  console.log(state.user);
  // Convert selected image to base64 and dispatch the new user's state
  // function encodeImageFileAsURL(el) {
  //   var file = el.target.files[0];
  //   if (file) {
  //     //alert("File MIME type is: " + (file as Blob).type);
  //     // alert("Size: " + file.size + " bytes");
  //     // var sizeInMB = (file.size / (1024*1024)).toFixed(2);
  //     // alert(sizeInMB + 'MB');
  //     var reader = new FileReader();
  //     reader.onloadend = function () {
  //       let user = state.user;
  //       user.image = reader.result;
  //       user.imageLocal = reader.result;
  //       dispatch({ type: "SET_USER", value: user });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <Header page={t("pages.profile")} />
      <IonContent>
        <div className="Content">
          <div className="Content__info">
            <img className="ProfileImage" src={state.user.image} alt="" />
            {/* <IonLabel className="change_profile_photo">
              {t("updateProfile.changePhoto")}
            </IonLabel> */}
            {/* <IonInput type="file" accept=".jpg,.jpeg,.png" multiple="false"> */}
            {/* <input
              type="file"
              id="uploadImgProfile"
              disabled={state.currentAvatar === "gravatar" ? true : false}
              onChange={(el) => encodeImageFileAsURL(el)}
            />
            <br />
            <Link
              to={{ pathname: "/app/settings" }}
              style={{ textDecoration: "none" }}
            >
              <IonLabel
                style={{
                  display:
                    state.currentAvatar === "gravatar" ? "block" : "none",
                }}
                className="err-label-update"
              >
                {t("updateProfile.changePhotoErr")}
              </IonLabel>
            </Link> */}
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
