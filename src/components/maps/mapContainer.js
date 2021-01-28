import React, { useContext, useState } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import credentials from '../../credentials/credentials.json';

import { AppContext } from '../../State';
 
export class MapContainer extends React.Component {

  constructor(props){
    super(props);
  };
  render() { 
    console.log("RENDER MAPCONTAINER")
   
    return (
      <Map 
      google={this.props.google} 
      zoom={2} 
      onClick={this.mapClicked}>

      <Marker
        title={'Nombre del evento'}
        name={'Name del evento'}
        position={{lat: this.props.lat, lng: this.props.lng}}
        />
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>Ole los canelones</h1> {this.state.selectedPlace.name} */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


console.log("APIKEY:::  ",credentials.key)
 
export default GoogleApiWrapper({
  key: credentials.key
  //https://console.cloud.google.com/apis/credentials?authuser=3&_ga=2.5136755.1506244662.1611601178-476118781.1611601178&angularJsUrl=%2Fprojectselector%2Fapis%2Fcredentials%3Fauthuser%3D3%26_ga%3D2.5136755.1506244662.1611601178-476118781.1611601178%26supportedpurview%3Dproject%26folder%3Dtrue%26organizationId%3Dtrue&project=nosfaltauno&folder=&organizationId=&supportedpurview=project
})(MapContainer)