
import React from 'react';
import instalaciones from '../../../data/dataInstalaciones.json';
import InstalacionesList from '../instalacionesList';
import './Pista.css';
import './list.css'
import Instalacion_pista from './pistas';

const ListPistas = () => {

  const instalaciones_array = Object.values(instalaciones);
  console.log(instalaciones_array)
  return (


    <>

      <section className="pistas_grid">


        {
          instalaciones_array.map((pista) =>
            <Instalacion_pista className="listas" item={pista} ></Instalacion_pista>
          )
        }

      </section>
    </>




  );
}

export default ListPistas;