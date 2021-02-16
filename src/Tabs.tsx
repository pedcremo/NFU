import React, { useContext } from 'react';
import { AppContext } from './State';
import { useTranslation } from 'react-i18next';

import {     
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonBadge,    
} from '@ionic/react';

import Home from './pages/Home';
import Events from './pages/Events';

import Create from './pages/create/Create';


import { home, people, addCircle, notifications } from 'ionicons/icons';

import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import Notifications from './pages/notifications/Notifications';


const Tabs: React.FC = () => {
    const { state } = useContext(AppContext);
    const { t } = useTranslation();

    return (
        <IonTabs>
        <IonRouterOutlet>

        <PublicRoute component={Home} path="/app/home" exact />
        <PublicRoute component={Events} path="/app/events" exact />
        <PublicRoute component={Notifications} path="/app/notifications" exact />
        <PrivateRoute component={Create} path="/app/create" exact />

        

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/app/home">
            <IonIcon icon={home} />
            <IonLabel>{t('tabs.home')}</IonLabel>
          </IonTabButton>

          {
            (state.user)?
            <IonTabButton tab="notifications" href="/app/notifications">
              <IonBadge color="danger">{state.notifications}</IonBadge>
              <IonIcon icon={notifications} />
              <IonLabel>{t('tabs.notifications')}</IonLabel>
            </IonTabButton>
            : <></>
          }

          <IonTabButton tab="events" href="/app/events">
            <IonIcon icon={people} />
            <IonLabel>{t('tabs.events')}</IonLabel>
          </IonTabButton>

          {
            (state.user)?
              <IonTabButton tab="create" href="/app/create">
                <IonIcon icon={addCircle} />
                <IonLabel>{t('tabs.addevent')}</IonLabel>
              </IonTabButton>
            : <></>
          }

        </IonTabBar>
      </IonTabs>      
    );
};

export default Tabs;