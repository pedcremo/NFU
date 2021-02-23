# Introduction

## Start developing
npm install
npm start

## Add android platform
npx cap add android  //Afegir plataforma android  una vegada

### To run everytime we want to compile an .apk for android
npm install -g @ionic/cli
ionic build
npx cap copy 
npx cap open android 

# Testing Tutorial
https://www.robinwieruch.de/react-testing-library

https://ionicframework.com/blog/testing-ionic-react-apps-with-jest-and-react-testing-library/

https://blog.bitsrc.io/testing-with-react-testing-library-and-jest-3dffaa114c04

https://jestjs.io/docs/en/tutorial-react


- Reset filters
- Flechitas para el welcome
- Crear evento, seleccionar categoria mas amplio
- Imagen al crear evento opcional con una por defecto
- Al hacer click en la foto del perfil, poder cambiar la foto
- Comprobar el file.type al subir una foto que sea .png, .jpeg, etc. No mas de 1MB
- Cuando vas a l perfil->configuracion->sobre nosotros, peta