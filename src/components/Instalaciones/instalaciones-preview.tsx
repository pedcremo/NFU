import React from 'react';
import { Link } from "react-router-dom";
import { pinSharp, heartOutline, enterOutline } from 'ionicons/icons';

import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon
} from '@ionic/react';
import './Instalaciones_preview.css';

const InstalacionesPreview = (props: any) => {

  const Props = props;

  let prueba = Object.values(props.info.pistas).map((data) => Object.values(data).map((data2) => data2));
  let pistas = prueba.map((data1) => data1[0]);

  return (
    <IonCard className="cardList">
      <section className="cardContent">
        <article className="cardContent__left">
          <img src={Props.info.imagen} alt="img" />
        </article>
        <article className="cardContent__right">
          <div className="prueba">
          <IonCardTitle>{Props.info.name}</IonCardTitle>
          <IonCardSubtitle className="cardContent__ubications"><IonIcon icon={pinSharp} className="playersIcon" />{Props.info.ubication}</IonCardSubtitle>
            <div className="tags">
              <h4>Pistas:</h4>
              {pistas.map((data) => (
                <p>{data}</p>
              ))}
            </div>
          </div>
          <IonCardContent className="cardContent__operation">
            <section>
              <article className="cardContent__operation--option">
                <IonIcon icon={heartOutline} className="cardContent__operation--icon" />
              </article>
              <article className="cardContent__operation--option">
                <Link className="link" to={"/app/instalacion/" + Props.info.id}>
                  <div className="cardContent__operation--icon ">
                    <IonIcon
                      icon={enterOutline}
                      className="eventContent__actions--icon"
                    />
                  </div>
                </Link>
              </article>
            </section>


          </IonCardContent>

        </article>

      </section>
    </IonCard>
  );

}


export default InstalacionesPreview;