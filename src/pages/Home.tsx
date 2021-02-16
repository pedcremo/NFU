import React, { useContext } from "react";
import { AppContext } from "../State";

import { IonContent, IonPage } from "@ionic/react";

import "./Home.css";
import EventList from "../components/Event/Event_List";

import Header from "../components/header/header";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  (function () {
    navigator.geolocation.getCurrentPosition(
      getCoordinates,
      errorGetCoordinates
    );

    function getCoordinates(position) {
      //Closure para establecer las coordenadas actuales del usuario
      let coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      // console.log("******************COORDENADAS DEL USER CAMBIADAS****************")
      dispatch({ type: "USER_COORDINATES", value: coords });
    }

    function errorGetCoordinates(error){
      console.log("****************ALERTA! No se han podido obtener las coordenadas****************");
    }
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
