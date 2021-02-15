import React from 'react';
import instalaciones from '../../../data/dataInstalaciones.json';
import './Pista.css';
import './list.css'
import InstalacionPista from './pistas';

const ListPistas = () => {

  const instalaciones_array = Object.values(instalaciones);
  console.log(instalaciones_array)
  
  return (
    <>
      <section className="pistas_grid">
        {
          instalaciones_array.map((pista) =>
            <InstalacionPista className="listas" item={pista} ></InstalacionPista>
          )
        }
      </section>
    </>
  );
}

export default ListPistas;