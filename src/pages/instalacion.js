import React, { useContext } from 'react';
import {
  IonContent,IonPage, IonIcon, IonSlides,
  IonRow,
  IonCard,
  IonCardTitle,
  IonList
} from '@ionic/react';
import {  pinSharp } from 'ionicons/icons';
import { useParams } from "react-router";
import data from '../data/dataInstalaciones.json';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../State';


import './instalacion.css'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Instalacion = () => {

  console.log(data)
  //get id URL
  const { id } = useParams();
  console.log(id);
  const instalaciones_ar = Object.values(data);


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

      <Navbar page={instalacion.name} ></Navbar>
      <IonContent fullscreen >

        <section className="details-page">
          <article className="detail">
            <article className="detail-image">
              <img src={instalacion.imagen} alt="img"></img>
              <article className="detail-image-icons">
                <span className="detail-image-icons-location icon-details icon-details-green"><span className="icon-details-icon"><IonIcon icon={pinSharp} /></span>
                  <h7>{instalacion.ubication}</h7>
                </span>

              </article>
              
            </article>

            <article className="detail-content">
              <article className="detail-content-left">
                <span className="detail-content-left-title">PISTAS</span>
                <IonRow>
                  <IonSlides options={slideOpts}>
                    {instalacion.pistas.map((pista, index) => (
                      <IonList key={index} className="IonSliderList">
                        <IonCard key={'col_' + index} style={{
                        }} className="centerCardSlide">
                          <article className="cardImage">
                            <IonCardTitle>{pista}</IonCardTitle>
                          </article>
                        </IonCard>
                      </IonList>
                    ))}
                  </IonSlides>
                </IonRow>
              </article>

            </article>
          </article>

        </section>

      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Instalacion;
