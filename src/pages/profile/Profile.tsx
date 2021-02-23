import React, { useContext, useRef } from "react";
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
  const defaultImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///+9vsC6u73k5OXT1NX7+/u3uLu+v8H5+fnW19jIycvP0NH09PXp6erx8fHFxsjd3d7m5ufs9xf2AAAEjklEQVR4nO2dadOrIAxG6wLWnf7/P3ux2ta+3RQSE73P+drpDGcCBJDldAIAAAAAAAAAAAAAAAAAAAAAAADAM6ZrM1eWeVm6rO2MdHGI6VyV2HSOTSrXSheLiHNWebnkFa/Zu7N08aK5eL03dndL22fSRYzBlG+D9zeU+V4DafKv4ZsHst6lo1voNzqW0sVdTZss9xvr6kW6yOuo7Sq/q2O1oxzZrQzgLYy7SZBufQBH9tIa65AATmGspAu/hCpc0Cv20sX/TR8j6BUL7f1NpKBHuWK8oFeUlvhGVBu8obktlhSCXrGWFvlEG5oHXxSdtMp7zlSCPvU30jJv6ckElfY2jqYRjqS5tM4rhHV0wHbSQi9UpIJJoi5lkPWjN1JtK1QFsaBHWumZlrKbGVEWRMpMcUdaak5HH0IfRE1rUzWDoKru1FB3pCOKxm6kw5kHqZ6FKZZ+JlE0OiUesD1QU00znkqqaJ4YsUD6Ay3Lp2yCSSqtNsLWDL2hjjkUw5j0bqhjbMqUDa+GOjIiX0ejpavhyvcDOnI+o2BipeWuMFbSxKr4TMOXLHxXo2EbCtPUaTLUMDJlTPgw3Ijj19Lj9zT/QbZgFFSS8Y8/ajv+yJtz9qTjQ+nxZ8DN4VcxGNOFjq6U67vMgJZvM8dfEWYbe2tphow5X1rszvG/rjFVU027hqi3C41o6UkHWIY1SgY0EwwbhrR8eJpgSIlqkuEEfRB1hfB0ulAHUVsI6bO+jtn9HOI5lKZceIPoKMKIzgMJlJ2Ntm5mhLCeaqyjA2RJUdGQ+w9E64qaz1lSHF3TmChmkPQ2Kr5VfMLEK+r43PSZaEXtgp4i6qRzoV8w6iCp5uOjc8rgGwdUjtXeEbioYVUtW3zHBCTGtN9DE3yQLbhd6MnPqpvx/sLka1qjrVWn+Q803y/BmvtVSucSP2nqBY6prffqN2Bc8bVB+h/3f2VbVxYfb6Qryj2Hb8b5kvfTpYJXs+u1gkWeqdi0RkfTZi6vB3KXtQeTAwAAAAAA+8I0XXvJ5rTd7mdPnqa7uLKuitQ+X1s+zTJs0ufusst5lPFmdZ/a27zp20x4uqZ9NwE1XZZXo9rPZYznSXFaO/XR7Fw9zOqD1/b9Xyu1k2PTln2M3MNS5QLHaBctd5dME02SJqsoQvdX0hY6VsJNtnjtN0AyF2+SLZ/e5Ci6In5e8r5DNLaXcuyWrNrTOFYSdbXrOU8AvzhuflBvW79k8/chTMDzDvGOG74Pseb9EUrFrd6HaGi2r4WwzfsQwc9XULDFvkXOo9tLFLlfFjBRm7poYJ0ln+X9eDf3NRoEE8YdqCoiOMC2i5jjhFoQXD0qyfscNPDs5me8/2I9HCcyWO+DCoDekOesbzD09ZT8aYBYLHVWVBZC+uNtjFe0hEJ8Sxbp6UIaiM/Rqkn2M0hHNqwX64VCeqE5y/MOsZBeukB+GJ0C0pTIdo1QDKR3ncFQBBjCEIbywBCGMJQHhjCEoTwwhCEM5YEhDGEoDwxhCEN5YAhDGMoDQxjCUB4YwhCG8sAQhjCUB4YwhKE8MPx/DP8BTJJaKwTBcYoAAAAASUVORK5CYII=";
  const inputFile = useRef(null);
  if (!state.user) {
    return <Redirect to="/" />;
  }

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
  };

  const ho = (
    <input
      type="file"
      id="imageInput"
      disabled={state.currentAvatar === "gravatar" ? true : false}
      onChange={(el) => encodeImageFileAsURL(el)}
    />
  );

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
                state.user.image === defaultImage && inputFile.current.click();
              }}
            />
            {state.user.image === defaultImage && (
              <div>
                <input
                  style={{ display: "none" }}
                  ref={inputFile}
                  onChange={encodeImageFileAsURL}
                  type="file"
                />
              </div>
            )}
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
