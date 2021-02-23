import React, { useContext, useState } from "react";
import "./Profile.css";

import { IonContent, IonItem, IonPage, IonToast } from "@ionic/react";

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
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  console.log(state.user);

  if (!state.user) {
    return <Redirect to="/" />;
  }

  function checkFile(el) {
    var file = el.target.files[0];

    // Comprobamos el tamaño.
    var size = file.size < 2000000 ? true : "El tamaño es superior a 2MB";
    if (size != true)  {
      setShowToast(true);
      setMessage("El tamaño es superior a 2MB");
      return false;
    }

    // Comprobamos el tipo de archivo.
    var type = file.type == "image/jpeg" || file.type == "image/png" ? true : "El tipo de archivo no es valido";
    if (type != true) {
      setShowToast(true);
      setMessage("El tipo de archivo no es valido");
      return false;
    }

    encodeImageFileAsURL(file)
  }

  function encodeImageFileAsURL(file) {
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

  // let importBtn = document.getElementById('import');
  // importBtn.addEventListener('click', function() {    
     
  // });

  return (
    <IonPage>
      <Header page={t("pages.profile")} />
      <IonContent>
        <div className="Content">
          <div className="Content__info">
            <img
              className="ProfileImage"
              src={state.user.image}
              alt=""
              onClick={() => { 
                let link = document.getElementById('uploadImgProfile');             
                link.click();
              }}
            />
            <input
              type="file"
              id="uploadImgProfile"
              disabled={(state.currentAvatar === 'gravatar' ? true: false)}
              onChange={(el) => checkFile(el)}
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
              <IonItem onClick={() => dispatch({ type: "SET_SEGMENT", value: "yours" })}>
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
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={message}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
