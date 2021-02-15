import React, { useContext } from "react";
import { AppContext } from "../State";

import { IonContent, IonPage } from "@ionic/react";

import "./Home.css";
import EventList from "../components/Event/Event_List";

import Header from "../components/header/header";

const Home = () => {
  const { dispatch } = useContext(AppContext);
  
  (function(){
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
      alert("ALERTA! No se han podido obtener las coordenadas");
      console.log(error);
    }
  })();


  return (
    <IonPage>
      <Header page="Home" />
      <IonContent fullscreen>
        {/* <IonModal isOpen={showModal}>
        <MyModal></MyModal>
        <IonButton onClick={() => setShowModal(false)}>
            Close Map
        </IonButton>
      </IonModal>
      <p className="maps" onClick={() =>{
        // We take all the coordinates of the epg
        let events_array = Object.values(data);
        let events = Object.values(events_array[0])
        let coordinates = []

        events.map((event, index) =>{
            coordinates[index] = {
              "lat": event.coordinates.lat,
              "lng": event.coordinates.lng
            }});
          //Aqui cojo las coordenadas actuales, ya añado actual_lat y actual_lng a coordinates

            
        //We assign all the coordinates of the events in which the user is interested
        dispatch({type:'ALL_COORDINATES',value:coordinates});
        setShowModal(true)
      }}></p>  */}
        <EventList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
