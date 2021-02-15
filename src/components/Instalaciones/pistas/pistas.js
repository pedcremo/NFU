import React from 'react';
import {
  IonCard,
} from '@ionic/react';


const InstalacionPista = (props) => {
  console.log(props.item)

  // console.log(data)
  // //get id URL
  // const { id } = useParams();
  // console.log(id);
  // const instalaciones_ar = Object.values(data);

  // // let eventClick = () => {

  // // }

  // let instalacion = instalaciones_ar.find(instalacion => instalacion.id === id);
  // console.log(instalacion.id)
  // console.log(instalacion.name)

  return (
    <>
      {props.item.pistas.map((pista) => (
        <IonCard className="lista">
          <div className="lista-image">
            <img alt="" src={pista.Imagen}></img>
          </div>
          <div className="lista-content">
            <span className="lista-content-title">{pista.Nombre}</span>
          </div>
        </IonCard>
      ))}
    </>
  )
}

export default InstalacionPista;