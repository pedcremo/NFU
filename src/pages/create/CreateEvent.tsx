import React, { useContext, useState } from "react";

import { AppContext } from "../../State";
import {
  IonContent,
  IonPage,
  IonButton,
  IonLabel,
  IonInput,
  IonLoading,
  IonItem,
  IonToast,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonTextarea,
} from "@ionic/react";
import { Redirect, useHistory } from "react-router-dom";
import "./CreateEvent.css";
import Header from "../../components/header/HeaderComponent";
import { useTranslation } from "react-i18next";
// import { read, stat } from "fs";
import inst from '../../data/dataInstalaciones.json';

const CreateEvent = () => {
  const { state, dispatch } = useContext(AppContext);
  const [showLoading, setShowLoading] = useState(false);
  const { t } = useTranslation();
  const history = useHistory()
  const [showToastCreate, setShowToastCreate] = useState(false);
  let events: any = Object.values(state.events)
  const instalations = Object.values(inst);
  
  //Form states
  const [title, setTitle] = useState<React.ReactText | undefined>('');
  const [description, setDescription] = useState<React.ReactText | undefined>('');
  const [maxPlayers, setMaxPlayers] = useState<React.ReactText | undefined>('');
  const [date, setDate] = useState(null);
  const [country, setCountry] = useState<React.ReactText | undefined>('España');
  const [city, setCity] = useState<React.ReactText | undefined>('Ontinyent');
  const [postal, setPostal] = useState<React.ReactText | undefined>('46870');
  const [type, setType] = useState<React.ReactText | undefined>('');
  const [image, setImage] = useState<React.ReactText | undefined>('');
  const [ instalation, setInstalation] = useState({country: "",postalcode: "",city: "",})

  let EventImageAsBase64 = (el) => {
    var file = el.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onloadend = () => setImage(reader.result+"")
      reader.readAsDataURL(file);
    }
  }
  
  const handleSubmit = async (e) => {
    console.log("submit");
    console.log(instalation);
    e.preventDefault();
    try {
      
      let event = {
        id: (Math.max.apply(null, events.map(item => item.id)) + 1),
        title: title,
        description: description,
        players: 1,
        maxplayers: maxPlayers,
        status: 'open',
        time: date,
        type: type,
        coordinates: {
          lat: state.user_coordinates !== "no" ? state.user_coordinates.latitude : 0,
          lng: state.user_coordinates !== "no" ? state.user_coordinates.latitude : 0,
        },
        author: {
          username: state.user.username,
          image: state.user.image,
          rate: "User rating",
          bio: "User biography lorem ipsum",
        },
        location: {
          country: !instalation ? "" : instalation.country,
          postalcode: !instalation ? "" : instalation.postalcode,
          city: !instalation ? "" : instalation.city,
        },
        image: image,
        p: [
          state.user.username
        ],
        comments:[]
      }

      events.push(event);
      setShowLoading(true);

      setTimeout(() => { 
        setShowLoading(false);
        dispatch({ type: "SET_EVENTS", value: events });
        setShowToastCreate(true);
        history.push("home");
      }, 1500);
    } catch {
      console.error(e);
      setShowLoading(false);
    }
  }


  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <Header page={t("pages.addevent")} />
      <IonContent>
        <section className="add-event">
          <h1>{t("create.add")}</h1>
          <form onSubmit={handleSubmit} method="post" className="add-event-form">
            <IonItem>
              <IonLabel position="floating">{t("create.name")}</IonLabel>
              <IonInput type="text" value={title} onInput={e => setTitle(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">{t("create.players")}</IonLabel>
              <IonInput type="number" min="1" value={maxPlayers} onInput={e => setMaxPlayers(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">{t("create.description")}</IonLabel>
              {/* <IonInput type="" value={players_need} onInput={e => setPilayersNeed(e.currentTarget.value)} /> */}
              <IonTextarea value={description + ""}  onInput={e => setDescription(e.currentTarget.value)}></IonTextarea>
              <IonTextarea></IonTextarea>
            </IonItem>
            <IonItem>
            <IonSelect value={instalation} placeholder="Instalation" onIonChange={(e) => setInstalation(e.detail.value)}>
                {instalations.map((instalation, key) => {return (<IonSelectOption key={key} value={instalation}>{instalation.name}</IonSelectOption>)})}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>{t("create.type")}</IonLabel>
              <IonSelect value={type} placeholder="Select One" onIonChange={e => setType(e.detail.value)}>
                <IonSelectOption value="gaming">
                  {t("create.gaming")}
                </IonSelectOption>
                <IonSelectOption value="sport">
                  {t("create.sport")}
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>{t("create.when")}</IonLabel>
              <IonDatetime
                displayFormat="D MMM YYYY H:mm"
                min="2021"
                max="2060"
                display-timezone="utc"
                value={date}
                onIonChange={e => setDate(e.detail.value!)}
              >
              </IonDatetime>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>{t("create.image")}</IonLabel>
              <input
                type="file"
                id="uploadImgProfile"
                disabled={(state.currentAvatar === 'gravatar' ? true : false)}
                onChange={(el) => EventImageAsBase64(el)}
              />
              <br />
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block">
              {t("create.submit")}
            </IonButton>
            <IonLoading isOpen={showLoading} message={"Creating event"} />
          </form>
        </section>
        <IonToast isOpen={showToastCreate} onDidDismiss={() => setShowToastCreate(false)} message="Event has been created correctly" duration={1500} />
      </IonContent>
    </IonPage>
  );
};

export default CreateEvent;
