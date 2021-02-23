import React, { useContext, useState } from "react";

import { IonCard } from "@ionic/react";
// import { read, stat } from "fs";
type UbiProps = {
  instalacion: Instalacion;
  add: any;
};
type Instalacion = {
  name: string;
};
const Ubication: React.FC<UbiProps> = (props) => {
  return (
    <IonCard>
      <div onClick={() => props.add(props.instalacion)}>
        <h3>{props.instalacion.name}</h3>
      </div>
    </IonCard>
  );
};

export default Ubication;
