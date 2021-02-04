import React from 'react';
import data from '../../data/dataInstalaciones.json';
import InstalacionesPreview from './instalaciones-preview'

import {IonList} from '@ionic/react';

import './instalaciones.css';


export default class InstalacionesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: Object.values(data),
    };
  }



  render() {
    return (
      <>
        {/* <IonTitle>INSTALACIONES</IonTitle> */}
        <IonList className="dataList">
          {this.state.data.map((data, index) => (
            <InstalacionesPreview key={"info_" + index} info={data} />
          ))}

        </IonList>
      </>
    );
  }
}