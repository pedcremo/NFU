import React from 'react';

import {
    IonCard,
  } from '@ionic/react';

const Instalacion_pista = (props) =>{



    const pista = props.item;
    console.log(pista);

    return (
        <>
          {pista.pistas.map((loc, index) => (
          <IonCard className="event">
            <div className="event-image">
              <img alt="" src={loc.Imagen}></img>
            </div>
            <div className="event-content">
              <span className="event-content-title">{loc.Nombre}</span>
            </div>
          </IonCard>
          ))}
        </>
    )
}

export default Instalacion_pista;