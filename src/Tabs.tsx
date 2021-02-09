import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AppContext } from './State';
import {     
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,    
} from '@ionic/react';

import Home from './pages/Home';
import Settings from './pages/settings/Settings';
import Events from './pages/Events';
import Details from './pages/Details.js';
import Comments from './pages/Comments';
import Instalaciones from './pages/Instalaciones'
import Instalacion from './pages/instalacion'
import Create from './pages/create/Create';

import UpdateProfile from './pages/profile/UpdateProfile';
import { home, people, addCircle } from 'ionicons/icons';
import Notifications from './pages/notifications/Notifications';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';



const Tabs: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <IonTabs>
        <IonRouterOutlet>

        <PublicRoute component={Home} path="/app/home" exact />
        <PublicRoute component={Events} path="/app/events" exact />
        <PublicRoute component={Details} path="/app/event/:id" exact />
        <PublicRoute component={Comments} path="/app/comments/:id" exact />
        <PublicRoute component={Notifications} path="/app/notifications" exact />
        <PublicRoute component={Home} path="/app/home" exact />
        <PublicRoute component={Instalaciones} path="/app/instalaciones" exact />
        <PublicRoute component={Instalacion} path="/app/instalacion/:id" exact />

        <PrivateRoute component={Settings} path="/app/settings" exact />
        <PrivateRoute component={Create} path="/app/create" exact />
        <PrivateRoute component={UpdateProfile} path="/app/profile/update" exact />   
        
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/app/home">
            <IonIcon icon={home} />
            <IonLabel>HOME</IonLabel>
          </IonTabButton>

          <IonTabButton tab="events" href="/app/events">
            <IonIcon icon={people} />
            <IonLabel>EVENTS</IonLabel>
          </IonTabButton>

          {
            (state.user)?
              <IonTabButton tab="create" href="/app/create">
                <IonIcon icon={addCircle} />
                <IonLabel>Añadir evento</IonLabel>
              </IonTabButton>
            : <></>
          }

        </IonTabBar>
      </IonTabs>      
    );
};

export default Tabs;