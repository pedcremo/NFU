import React from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Header from '../components/header/header';
import Footer from '../components/Footer/Footer';
import InstalacionesList from '../components/Instalaciones/instalacionesList';

const Instalaciones: React.FC = () => {
    return (
        <IonPage>
  
            <IonHeader>
            <Header page={"Instalations"} ></Header>
            </IonHeader>

            <IonContent fullscreen>
                <InstalacionesList />
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Instalaciones;
