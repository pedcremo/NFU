import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './footer.css';


/**
 * FOOTER COMPONENT FOR ALL NFU APP
 */

const Footer: React.FC = () => {
   
        return (

                    <IonFooter>
                        <IonToolbar>
                            <IonTitle class="footer">&copy; NFU</IonTitle>
                        </IonToolbar>
                    </IonFooter>

    
        );
    
}
export default Footer;