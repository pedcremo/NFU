import React, { useContext } from "react";
import { AppContext } from "../State";

import { IonContent, IonPage } from "@ionic/react";

import "./Home.css";
import EventList from "../components/Event/Event_List";

import Header from "../components/header/header";

import { useTranslation } from "react-i18next";

import { Geolocation } from '@ionic-native/geolocation';

const Home = () => {
  const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  (function () {
    Geolocation.getCurrentPosition().then(pos => {
      // console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      let coords = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }
      dispatch({ type: "USER_COORDINATES", value: coords });
    });
  })();

  return (
    <IonPage>
      <Header page={t("pages.home")} />
      <IonContent fullscreen>
        <EventList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
