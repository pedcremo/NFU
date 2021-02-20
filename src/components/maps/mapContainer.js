import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper, LatLng } from "google-maps-react";
import { Geolocation } from '@ionic-native/geolocation';
// import credentials from "../../../public/credentials/credentials.json";
// import { AppContext } from "../../State";

export class MapContainer extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
    // const Props = props;

    // console.log(this.props.google.maps)
    // this.props.google.maps.LatLng = {"lat":38.8108668,"lng":-0.604796};

    const coordinates_array = Object.values(this.props.coordinates);
    // const user_coordinates = this.props.user_coordinates
    
    let coordenadas_sesion = JSON.parse(sessionStorage.getItem("user_coordinates")) //Coordenadas del user, solo mostrar cuando son todos los eventos
    let center_lat = null;
    let center_long = null;

    if(coordinates_array.length>2){ //Si son todos los eventos mostramos el mapa centrado a donde está el user
      center_lat=coordenadas_sesion.latitude;
      center_long=coordenadas_sesion.longitude;

    }else{ //Si solo es un evento, mostramos el mapa centrado a donde está el evento
      center_lat=coordinates_array[0];
      center_long=coordinates_array[1];
    }
    

    return (
      // if user coords
      <Map google={this.props.google} zoom={10} onClick={this.mapClicked} initialCenter={{ lat: center_lat, lng: center_long }}>

        {
          coordinates_array.length>2
          ?(//if
            coordinates_array.map( (data, index, arr) => (  //If the lenght is >2 it means that we make a list of all the events
                <Marker 
                  title = "Title del evento"
                  name = "Name del evento"
                  key = {index}  //As there are many, each one requires an identification key
                  position = {{
                    lat: data.lat,
                    lng: data.lng
                  }} 
                />
              )
            ) //end map
          )
          :(  //else                                        //If the lenght is not >2 it means that we make a details of an event
              <Marker 
                  title = "Title del evento"
                  name = "Name del evento"
                  position = {{
                    lat: coordinates_array[0],
                    lng: coordinates_array[1]
                  }} 
                />
            )
        }
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Nombre del evento</h1> 
            {/* {this.state.selectedPlace.name} */}
          </div>
        </InfoWindow>
      </Map>
    );
      }
}

export default GoogleApiWrapper({
  // key: credentials.key,
  key: "AIzaSyBqLziFyS_qTYHkdVjUwo2AMGhM6tmViqQ",
  //https://console.cloud.google.com/apis/credentials?authuser=3&_ga=2.5136755.1506244662.1611601178-476118781.1611601178&angularJsUrl=%2Fprojectselector%2Fapis%2Fcredentials%3Fauthuser%3D3%26_ga%3D2.5136755.1506244662.1611601178-476118781.1611601178%26supportedpurview%3Dproject%26folder%3Dtrue%26organizationId%3Dtrue&project=nosfaltauno&folder=&organizationId=&supportedpurview=project
})(MapContainer);
