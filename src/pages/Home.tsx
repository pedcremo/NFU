import React, { useContext, useState, useCallback } from "react";
import { AppContext } from "../State";
import { Redirect } from "react-router-dom";

import { IonContent, IonPage, IonModal, IonButton } from "@ionic/react";

import "./Home.css";
import EventList from "../components/Event/Event_List";

import MyModal from "../components/modal/MyModal";
import data from "../data/data.json";

import Header from "../components/header/header";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  
  let actual_coordinates = (function(){
    navigator.geolocation.getCurrentPosition(getCoordinates, errorGetCoordinates);

    function getCoordinates(position){  //Closure para establecer las coordenadas actuales del usuario
      let coords = {
        "latitude":position.coords.latitude,
        "longitude":position.coords.longitude
      }
      // console.log("******************COORDENADAS DEL USER CAMBIADAS****************")
      dispatch({type:'USER_COORDINATES',value:coords});
      
    }

    function errorGetCoordinates(error){
      console.log("****************ALERTA! No se han podido obtener las coordenadas****************");
      console.log(error);
    }
  })();


  return (
    <IonPage>
      <Header page="Home" />
      <IonContent fullscreen>
        <EventList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
