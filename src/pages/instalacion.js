import React, { useContext } from 'react';
import { pinSharp, heartOutline, addCircle } from 'ionicons/icons';
import {
  IonContent, IonPage, IonIcon, IonSlides,
  IonRow,
  IonCard,
  IonCardTitle,
  IonSlide,
  IonButton,
  IonCardSubtitle
} from '@ionic/react';
import { useParams } from "react-router";
import data from '../data/dataInstalaciones.json';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../State';


import './instalacion.css'
import Header from '../components/header/header';

import Footer from '../components/Footer/Footer';

const Instalacion = () => {

  console.log(data)
  //get id URL
  const { id } = useParams();
  console.log(id);
  const instalaciones_ar = Object.values(data);

  // let eventClick = () => {

  // }

  let instalacion = instalaciones_ar.find(instalacion => instalacion.id === id);
  console.log(instalacion.id)
  console.log(instalacion.name)

  const { state } = useContext(AppContext);

  if (!state.user) {
    return <Redirect to="/login" />
  }
  const slideOpts = {
    slidesPerView: 'auto',
    zoom: false,
    grabCursor: true,
    virtual: true,
  };
  return (
    <IonPage>

    <Header  page={instalacion.name}></Header>
      <IonContent fullscreen >

        <section className="details-page">
          <article className="detail">
            <article className="detail-image">
              <img src={instalacion.imagen} alt="img"></img>
              <article className="detail-image-icons">
                <span className="detail-image-icons-location icon-details icon-details-green"><span className="icon-details-icon"><IonIcon icon={pinSharp} /></span>
                  <h5>{instalacion.ubication}</h5>
                </span>

              </article>

            </article>

            <article className="detail-content">
              <article className="detail-content-left">
                <span className="detail-content-left-title">PISTAS</span>
                <IonRow>
                  <IonSlides options={slideOpts}>
                    {instalacion.pistas.map((pista, index) => (
                      <IonSlide key={index} className="IonSliderList">
                        <IonCard key={'col_' + index} style={{
                        }} className="centerCardSlide">
                          <article className="cardImage">
                            <IonCardTitle className="title">{pista}</IonCardTitle>
                            <IonCardSubtitle>

                              <IonButton color="medium">
                                <IonIcon icon={heartOutline} className="cardContent__operation--icon " />
                              </IonButton>
                              <IonButton color="medium"  href="/app/create">
                                <IonIcon icon={addCircle} className="cardContent__operation--icon " />
                              </IonButton>
  
                            </IonCardSubtitle>
                          </article>
                        </IonCard>
                      </IonSlide>
                    ))}
                  </IonSlides>
                </IonRow>
              </article>

            </article>
          </article>

        </section>

      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Instalacion;
