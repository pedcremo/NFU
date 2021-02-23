import { type } from "os";

let GeolocationReact = require("@react-native-community/geolocation")
// let GeolocationIonic = require('@ionic-native/geolocation');

//Get coordenadas by React
export let getCoordsReact = async () => {
  try {
    await GeolocationReact.getCurrentPosition((info) => {
      let coords = {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      };

      sessionStorage.setItem("user_coordinates", JSON.stringify(coords));
      // GeolocationReact.stopObserving();

      console.log("Coordenadas by React")
      console.log(coords)
      console.log(typeof(coords))
      return coords;
    });
  } catch (e) {
    console.log("--------------ERROR coords by REACT-----------------")
    console.log(e);
    return "error";
  }
};

//Get coordenas by Ionic
// export let getCoordsIonic = () =>{
//     try{
//         GeolocationIonic.getCurrentPosition().then(pos => {
//         // console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
//         let coords = {
//           latitude: pos.coords.latitude,
//           longitude: pos.coords.longitude,
//         }
//         sessionStorage.setItem("user_coordinates",JSON.stringify(coords)); //Guardamos en sessionStorage las coordenadas actuales del usuario
//         // dispatch({ type: "USER_COORDINATES", value: coords });
//       });
//     }catch(e){
//         console.log("--------------ERROR coords by IONIC-----------------")
//       console.log(e)
//     }
// }

//Get coordenadas by navigator api
export let getCoordsNavigator = () => {
  let onSuccess = function (position) {
    let coords = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    sessionStorage.setItem("user_coordinates", JSON.stringify(coords));
  };

  function onError(error) {
        console.log("--------------ERROR coords by NAVIGATOR-----------------")
        console.log(error)
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
};
