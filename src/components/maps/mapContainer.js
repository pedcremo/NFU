import React, { useContext, useState } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import credentials from '../../credentials.json';

import { AppContext } from '../../State';
 
export class MapContainer extends React.Component {
   //   const { state,dispatch } = useContext(AppContext);

  // constructor() {  
  //   const { state,dispatch } = useContext(AppContext);
  // }
  
  
  render() {
     //   const { state,dispatch } = useContext(AppContext);

    console.log("PROPS GOOGLE")
    console.log(this.props.google)
    console.log("COORDENADAS----------------------------:")
    // console.log(state.lat)
    // console.log(state)
    // console.log("CREDENTIALS")
    // console.log(credentials)
    return (
      <Map 
      google={this.props.google} 

      // defaultCenter= {{lat: 38.8108668, lng: -0.604796}}
      zoom={2}
      onClick={this.mapClicked}
      >

      <Marker
        title={'Nombre del evento'}
        name={'Name del evento'}
        position={{lat: 38.8108668, lng: -0.604796}}  //this.state.location.lat  || this.state.location.lng
        />

 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Ole los canelones</h1> {/*{this.state.selectedPlace.name} */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  key: credentials.key  //La primera api que he hecho
  // apiKey: "AIzaSyBr8oaQDhieux3kxWJeoeHblUbAVv2A5u8"  //La segunda api que he hecho
  //https://console.cloud.google.com/apis/credentials?authuser=3&_ga=2.5136755.1506244662.1611601178-476118781.1611601178&angularJsUrl=%2Fprojectselector%2Fapis%2Fcredentials%3Fauthuser%3D3%26_ga%3D2.5136755.1506244662.1611601178-476118781.1611601178%26supportedpurview%3Dproject%26folder%3Dtrue%26organizationId%3Dtrue&project=nosfaltauno&folder=&organizationId=&supportedpurview=project
})(MapContainer)