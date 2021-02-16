import React, { useContext } from 'react';
import { pinSharp } from 'ionicons/icons';
import {
  IonContent, IonPage, IonIcon,IonCard
} from '@ionic/react';
import { useParams } from "react-router";
import { useTranslation } from 'react-i18next';
import data from '../data/dataInstalaciones.json';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../State';


import './instalacion.css'
import Header from '../components/header/header';

import Footer from '../components/Footer/Footer';

const Instalacion: React.FC = () => {

  //get id URL
  const { id } = useParams() as {
    id: string;
  }
  const instalaciones_ar = Object.values(data);
  const instalacion = instalaciones_ar.find(instalacion => instalacion.id === id);
  console.log(instalacion)
  const { t } = useTranslation();
  const { state } = useContext(AppContext);

  if (!state.user) {
    return <Redirect to="/login" />
  }

  return (
    <IonPage>

      <Header page={instalacion.name}></Header>
      <IonContent fullscreen >

        <section className="details-page">
          <article className="detail">
            <article className="detail-image">
              <img src={instalacion.imagen} alt="img"></img>
              <article className="detail-image-icons">
                <span className="detail-image-icons-location icon-details icon-details-green"><span className="icon-details-icon">
                  <IonIcon icon={pinSharp} /></span>
                  <h5>{instalacion.ubication}</h5>
                </span>

              </article>

            </article>

            <article className="detail-content">
              <article className="detail-content-left">
                <span className="detail-content-left-title">{t('instalation.title')}</span>
                  <article className="pistas_grid">
                  {instalacion.pistas.map((pista) => (
                      <IonCard className="lista">
                      <div className="lista-image">
                            <img alt="" src={pista.Imagen}></img>
                        </div>
                        <div className="lista-content">
                        <span className="lista-content-title">{pista.Nombre}</span>
                        </div>
                          </IonCard>
                      ))}
                  </article>
               

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

