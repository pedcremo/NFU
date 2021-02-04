import React, { useContext, useState  } from 'react';
import { AppContext } from '../../State';
import { ellipsisVertical} from 'ionicons/icons';

import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonPopover,
    IonContent,
    IonList,
    IonLabel,
    IonItem
} from '@ionic/react';
const Navbar = (props) => {

    const { state, dispatch } = useContext(AppContext);
    const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);

    const doLogout = () => {
        setShowUserMenuEvent(null);
        dispatch({ type: 'SET_LOGOUT' });
        window.location.reload();
    };
    const page = props.page;

    return (

        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{page}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton fill="clear" onClick={e => { e.persist(); setShowUserMenuEvent(e) }}>
                            <IonIcon icon={ellipsisVertical} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonPopover
                event={showUserMenuEvent}
                isOpen={!!showUserMenuEvent}
                onDidDismiss={() => setShowUserMenuEvent(null)}>
                <IonContent>
                    <IonList>
                        <IonItem onClick={e => { e.preventDefault(); doLogout() }} detail={true} href="">
                            <IonLabel>LOGOUT</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>{state.user}</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPopover>
        </>
    );

}
export default Navbar;

