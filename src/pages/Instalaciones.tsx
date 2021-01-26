import React from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InstalacionesList from '../components/Instalaciones/instalacionesList';

const Instalaciones: React.FC = () => {
    return (
        <IonPage>

            <IonHeader>
                <Navbar page={'Instalaciones'}></Navbar>
            </IonHeader>

            <IonContent fullscreen>
                <InstalacionesList />
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Instalaciones;
