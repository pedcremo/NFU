
import React from 'react';
import instalaciones from '../../../data/dataInstalaciones.json';
import './Pista.css';
import Instalacion_pista from './pistas';

export default class ListPistas extends React.Component {

    constructor(props){
      super(props);      
      this.state = { 
        instalaciones: instalaciones
      };
    }

  
    render() {
      console.log("render");
      console.log(this.state)
      const instalaciones_array = Object.values(this.state.instalaciones);
      return (
        <>
          <section className="events">
          {
              instalaciones_array.map((pista,index) =>
                  (<Instalacion_pista className="event" key={index} item={pista} ></Instalacion_pista>)            
              )
            }  
          </section>
        </>
       
      );
    }
}

