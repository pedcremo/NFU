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
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonDatetime,
} from "@ionic/react";
import { Redirect } from "react-router-dom";
import "./create.css";
import Header from "../../components/header/header";
import { useTranslation } from "react-i18next";

const Create = () => {
  const { state, dispatch } = useContext(AppContext);
  const [name, setName] = useState<React.ReactText | undefined>('');
  const [total_players, setTotalPlayers] = useState<React.ReactText | undefined>('');
  const [players_need, setPlayersNeed] = useState<React.ReactText | undefined>('');
  const [country, setCountry] = useState<React.ReactText | undefined>('');
  const [city, setCity] = useState<React.ReactText | undefined>('');
  const [postal, setPostal] = useState<React.ReactText | undefined>('');
  const [type, setType] = useState<React.ReactText | undefined>('');
  const [date, setSelectedDate] = useState(null);
  const [only, setOnlyNear] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let event = {
          id: Math.floor(Math.random() * (100000 - 1) + 1),
          title: name,
          total_players: total_players,
          players_need: players_need,
          time: date,
          type: type,
          only_near: only,
          location:{
            country: country,
            postalcode: postal,
            city: city
          }
        }
      setShowLoading(true)
      setTimeout(() => { setShowLoading(false); }, 5000);
      setTimeout(() => dispatch({ type: "SET_EVENT", value: event }), 5000);
    }catch{
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
              <IonInput type="text" value={name} onInput={e => setName(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">{t("create.players")}</IonLabel>
              <IonInput type="number" value={total_players} onInput={e => setTotalPlayers(e.currentTarget.value)}/>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">{t("create.needplayers")}</IonLabel>
              <IonInput type="number" value={players_need} onInput={e => setPlayersNeed(e.currentTarget.value)}/>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">{t("create.country")}</IonLabel>
              <IonInput type="text" value={country} onInput={e => setCountry(e.currentTarget.value)}/>
              <IonLabel position="floating">{t("create.city")}</IonLabel>
              <IonInput type="text" value={city} onInput={e => setCity(e.currentTarget.value)}/>
              <IonLabel position="floating">{t("create.postal")}</IonLabel>
              <IonInput type="number" value={postal} onInput={e => setPostal(e.currentTarget.value)}/>
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
                onIonChange={e => setSelectedDate(e.detail.value!)}
                >
              </IonDatetime>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>{t("create.only")}</IonLabel>
              <IonCheckbox defaultChecked={true} checked={only} onIonChange={e => setOnlyNear(e.detail.checked)} slot="start" />
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block">
              {t("create.submit")}
            </IonButton>
            <IonLoading isOpen={showLoading} message={"Creating event"} />
          </form>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Create;
