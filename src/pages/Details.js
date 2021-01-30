// React, Ionic
import React, { useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import { arrowBackOutline, shareSocial, heart,  ellipsisVertical, location, people, barbell, calendar, star } from 'ionicons/icons';
import { useParams } from "react-router";
import { Redirect } from 'react-router-dom';

// Components
import Author from '../components/author/Author';

// Data
import events from '../data/data.json';

import './details.css';

const Details = () => {
  // Get id in params
  const {id}  = useParams();

  // Convert events json
  const events_array = Object.values(events.events);

  // Search id in json 
  let event = events_array.find(event =>  event.id == id);
  
  // Get players event
  let players = Object.values(event.p);

  console.log(id)
  console.log(event)
  console.log(players)
  return (
    <IonPage>
      <IonContent className="mierda" fullscreen>
        {/* FONDO */}
        <div className="event-image" style={{backgroundImage: `url(${event.image})`}}>
          <div className="tools">
            <div className="container-1">
              <IonIcon className="icon" icon={arrowBackOutline} />
            </div>
            <div className="container-2">
              <IonIcon className="icon" icon={heart} />
              <IonIcon className="icon" icon={shareSocial} />
              <IonIcon className="icon" icon={ellipsisVertical} />
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div className="event-locations">
          <IonIcon className="icon" icon={location} />
          <p>{event.location.country},</p>
          <p>{event.location.postalcode}</p>
          <p>{event.location.city}</p>
        </div>

        {/* TITULO */}
        <h1 className="event-title">{event.title}</h1>

        {/* DESCRIPCION */}
        <div className="event-description">{event.description}</div>

        {/* PROPIETARIO */}
        <div className="event-creator">
          <img className="event-creator-image" src={event.author.image}/>
          <div class="event-creator-name">
            <strong>{event.author.username}</strong>
            <div class="event-creator-name-rate">
              <IonIcon className="icon" icon={star}/> 
              <p>{event.author.rate}/10</p>
            </div>
          </div>
        </div>

        {/* JUGADORES */}
        <hr className="event-player-separation"></hr>
        <div className="event-player">
          {players.map((player,index,arr) => (
            <div key={index} className="event-player-informacion">
              <img src="https://picsum.photos/id/237/200/300"></img>
              <strong>{player}</strong>
            </div>)
          )}
        </div>

        {/* INFORMACION */}
        <div className="event-informacion">
          <div className="event-feature">
            <IonIcon className="icon" icon={barbell} />
            <p><strong>Categoria</strong></p>
            <p>{event.type}</p>
          </div>
          <div className="event-feature">
            <IonIcon className="icon" icon={calendar} />
            <p><strong>Fecha</strong></p>
            <p>{event.time}</p>
          </div>
        </div>

        {/* CONTROL */}
        <div className="event-control">
          <div className="event-player-num">
            <IonIcon className="icon" icon={people} />
            <p><span>{event.players}</span>/{event.maxplayers}</p>
          </div>
          <button>Apuntarse</button>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Details;


// import React,{useContext} from 'react';
// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
// import { person, compass, alarm,star, cloudyNight } from 'ionicons/icons';
// import { useParams } from "react-router";
// import events from '../data/data.json';
// import Author from '../components/author/Author';
// import { Redirect } from 'react-router-dom';
// import { AppContext } from '../State';
// import Header from '../components/header/header';

// import './details.css';

// const Details= () => {
//     //get id URL
//     const  {id}  = useParams();
//     const events_array = Object.values(events.events);
//     //gfet event by id
//     let event = events_array.find(event =>  event.id == id);
//     //get players event
//     let players = Object.values(event.p);
//     console.log(event.p);
//     const { state } = useContext(AppContext);
  
//     if (!state.user) {
//       return <Redirect to="/login" /> 
//     }

//   return (
//     <IonPage>
//       <Header page={event.title+"#"+id} ></Header>
//       {/* <IonHeader>
//         <IonToolbar>
//           <IonTitle>{event.title}#{id}</IonTitle>
//         </IonToolbar>
//       </IonHeader> */}
//       <IonContent fullscreen >
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">{event.title}</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <div className="details-page">
//           <div className="event-card">
//             <div className="event-card-image">
//               <img src={event.image}></img>
//               <div className="event-card-image-badges">
//                   <span className="event-card-image-badges-time badge-details badge-details-blue"><span className="badge-details-icon"><IonIcon icon={alarm}/></span><span>{event.time}</span></span>
//                   <span className="event-card-image-badges-location badge-details badge-details-green"><span className="badge-details-icon"><IonIcon icon={compass}/></span><span>{event.location.country}</span></span>
//                   <span className="event-card-image-badges-location badge-details badge-details-green"><span className="badge-details-icon"><IonIcon icon={compass}/></span><span>{event.location.postalcode}</span></span>
//                   <span className="event-card-image-badges-location badge-details badge-details-green"><span className="badge-details-icon"><IonIcon icon={compass}/></span><span>{event.location.city}</span></span>
//                 </div>
//             </div>
//             <div className="event-card-content">
//               <div className="event-card-content-left">
//                 <span className="event-card-content-left-title">{event.title}</span>
//                 <span className="event-card-content-left-desc">{event.description}</span>
//                 <div className="event-card-content-left-authorinfo">
//                   <Author className="event" key={event.id} item={event.author} ></Author>
//                   {/* <div className="event-card-content-left-authorinfo-left">
//                     <img src={event.author.image}/>
//                   </div>
//                   <div className="event-card-content-left-authorinfo-right">
//                       <span className="event-card-content-left-authorinfo-right-username">{event.author.username}</span>
//                       <span className="event-card-content-left-authorinfo-right-bio">{event.author.bio}</span>
//                       <span className="event-card-content-left-authorinfo-right-rate"><span className="event-card-content-left-authorinfo-right-rate-icon"><IonIcon icon={star}/></span> {event.author.rate}/10</span>
//                   </div> */}
//                 </div>
//                 <IonButton className="event-card-content-left-join" color="success">JOIN</IonButton>
//               </div>
//               <div className="event-card-content-right">
//                 <span className="event-card-content-right-title">PLAYERS</span>
//                 <div className="event-card-content-right-players">
//                   {
//                     players.map((player,index,arr) =>
//                       (<div key={index} className="player"><img src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"></img><span>{player}</span></div>)            
//                     )
//                   }
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//       </IonContent>
//     </IonPage>
//   );
// };

// export default Details;


//  //get id URL
//  const  {id}  = useParams();
//  console.log(id);
//  const events_array = Object.values(events.events);
//  //gfet event by id
//  let event = events_array.find(event =>  event.id == id);
//  //get players event
//  let players = Object.values(event.p);
//  console.log(event.p);
//  const { state } = useContext("");

//  if (!state.user) {
//    return <Redirect to="/login" /> 
//  }

// return (
//  <IonPage>
//    <IonHeader>
//      <IonToolbar>
//        <IonTitle>{event.title}#{id}</IonTitle>
//      </IonToolbar>
//    </IonHeader>
//    <IonContent fullscreen >
//      <IonHeader collapse="condense">
//        <IonToolbar>
//          <IonTitle size="large">{event.title}</IonTitle>
//        </IonToolbar>
//      </IonHeader>
//      <div className="details-page">
//        <div className="event-card">
//          <div className="event-card-image">
//            <img src={event.image}></img>
//            <div className="event-card-image-badges">
//                <span className="event-card-image-badges-time badge-details badge-details-blue"><span className="badge-details-icon"><IonIcon icon={alarm}/></span><span>{event.time}</span></span>
//                <span className="event-card-image-badges-location badge-details badge-details-green"><span className="badge-details-icon"><IonIcon icon={compass}/></span><span>{event.location.country}</span></span>
//                <span className="event-card-image-badges-location badge-details badge-details-green"><span className="badge-details-icon"><IonIcon icon={compass}/></span><span>{event.location.postalcode}</span></span>
//                <span className="event-card-image-badges-location badge-details badge-details-green"><span className="badge-details-icon"><IonIcon icon={compass}/></span><span>{event.location.city}</span></span>
//              </div>
//          </div>
//          <div className="event-card-content">
//            <div className="event-card-content-left">
//              <span className="event-card-content-left-title">{event.title}</span>
//              <span className="event-card-content-left-desc">{event.description}</span>
//              <div className="event-card-content-left-authorinfo">
//                <Author className="event" key={event.id} item={event.author} ></Author>
//                {/* <div className="event-card-content-left-authorinfo-left">
//                  <img src={event.author.image}/>
//                </div>
//                <div className="event-card-content-left-authorinfo-right">
//                    <span className="event-card-content-left-authorinfo-right-username">{event.author.username}</span>
//                    <span className="event-card-content-left-authorinfo-right-bio">{event.author.bio}</span>
//                    <span className="event-card-content-left-authorinfo-right-rate"><span className="event-card-content-left-authorinfo-right-rate-icon"><IonIcon icon={star}/></span> {event.author.rate}/10</span>
//                </div> */}
//              </div>
//              <IonButton className="event-card-content-left-join" color="success">JOIN</IonButton>
//            </div>
//            <div className="event-card-content-right">
//              <span className="event-card-content-right-title">PLAYERS</span>
//              <div className="event-card-content-right-players">
//                {
//                  players.map((player,index,arr) =>
//                    (<div className="player"><img src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"></img><span>{player}</span></div>)            
//                  )
//                }
//              </div>

//            </div>
//          </div>
//        </div>
//      </div>

//    </IonContent>
//  </IonPage>
// );