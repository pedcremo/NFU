import React,{useContext} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import { person, compass, alarm,star } from 'ionicons/icons';
import { useParams } from "react-router";
import events from '../data/data.json';
import Author from '../components/author/Author';
import { Redirect } from 'react-router-dom';

import './details.css';

const Details= () => {
    //get id URL
    const  {id}  = useParams();
    console.log(id);
    const events_array = Object.values(events.events);
    //gfet event by id
    let event = events_array.find(event =>  event.id == id);
    //get players event
    let players = Object.values(event.p);
    console.log(event.p);
    const { state } = useContext(AppContext);
  
    if (!state.user) {
      return <Redirect to="/login" /> 
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{event.title}#{id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{event.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="details-page">
          <div className="event-card">
            <div className="event-card-image">
              <img src={event.image}></img>
              <div className="event-card-image-badges">
                  <span className="event-card-image-badges-time badge-details badge-details-blue"><span className="badge-details-icon"><IonIcon icon={alarm}/></span><span>{event.time}</span></span>
                  <span className="event-card-image-badges-location badge-details badge-details-green"><span className="badge-details-icon"><IonIcon icon={compass}/></span><span>{event.location.country}</span></span>
                  <span className="event-card-image-badges-location badge-details badge-details-green"><span className="badge-details-icon"><IonIcon icon={compass}/></span><span>{event.location.postalcode}</span></span>
                  <span className="event-card-image-badges-location badge-details badge-details-green"><span className="badge-details-icon"><IonIcon icon={compass}/></span><span>{event.location.city}</span></span>
                </div>
            </div>
            <div className="event-card-content">
              <div className="event-card-content-left">
                <span className="event-card-content-left-title">{event.title}</span>
                <span className="event-card-content-left-desc">{event.description}</span>
                <div className="event-card-content-left-authorinfo">
                  <Author className="event" key={event.id} item={event.author} ></Author>
                  {/* <div className="event-card-content-left-authorinfo-left">
                    <img src={event.author.image}/>
                  </div>
                  <div className="event-card-content-left-authorinfo-right">
                      <span className="event-card-content-left-authorinfo-right-username">{event.author.username}</span>
                      <span className="event-card-content-left-authorinfo-right-bio">{event.author.bio}</span>
                      <span className="event-card-content-left-authorinfo-right-rate"><span className="event-card-content-left-authorinfo-right-rate-icon"><IonIcon icon={star}/></span> {event.author.rate}/10</span>
                  </div> */}
                </div>
                <IonButton className="event-card-content-left-join" color="success">JOIN</IonButton>
              </div>
              <div className="event-card-content-right">
                <span className="event-card-content-right-title">PLAYERS</span>
                <div className="event-card-content-right-players">
                  {
                    players.map((player,index,arr) =>
                      (<div className="player"><img src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"></img><span>{player}</span></div>)            
                    )
                  }
                </div>

              </div>
            </div>
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Details;
