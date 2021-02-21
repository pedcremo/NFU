import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Geolocation } from '@ionic-native/geolocation';
// import credentials from "../../../public/credentials/credentials.json";
// import { AppContext } from "../../State";

export class MapContainer extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {

    const coordinates_array = Object.values(this.props.coordinates);
    // const user_coordinates = this.props.user_coordinates

    //Volvemos a coger las coordenadas del usuario por si se ha movido y las guardamos en sessionStorage
    let getCoords = () => {
      try{
        Geolocation.getCurrentPosition().then(pos => {
          // console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
          let coords = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          }
          if(coords){
            sessionStorage.setItem("user_coordinates",JSON.stringify(coords));
            return coords;
          }else{
            console.log("NO HAY COORDS")
          }
        });
      }catch(e){
        console.log("Error get location: ", e)
      }
      
    };

    //Si no podemos volver a obtener las coordenadas, cogemos las que habian anteriormente en sessionStorage
    let coordenadas_sesion = getCoords()?"":JSON.parse(sessionStorage.getItem("user_coordinates"));

    if (coordenadas_sesion){
      console.log("TENEMOS COORDENADAS")
    }else{
      console.log("NO HAY COORDENADAS DEL USER, NO PODEMOS MOSTRAR LOS EVENTOS CERCANOS")
      //Aqui hay que decirle que no muestre el maps, de momento ponemos unas coordenadas aleatorias
      coordenadas_sesion = {
        "latitude": coordinates_array[0].lat,
        "longitude": coordinates_array[0].lng
      }
      console.log(coordenadas_sesion)
    }
    // let coordenadas_sesion = JSON.parse(sessionStorage.getItem("user_coordinates")) //Coordenadas del user, solo mostrar cuando son todos los eventos
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
