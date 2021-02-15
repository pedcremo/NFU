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
} from '@ionic/react';

import Home from './pages/Home';
import Events from './pages/Events';

import Create from './pages/create/Create';


import { home, people, addCircle } from 'ionicons/icons';

import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';


const Tabs: React.FC = () => {
    const { state } = useContext(AppContext);
    const { t } = useTranslation();

    return (
        <IonTabs>
        <IonRouterOutlet>

        <PublicRoute component={Home} path="/app/home" exact />
        <PublicRoute component={Events} path="/app/events" exact />
     
        <PrivateRoute component={Create} path="/app/create" exact />

        

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/app/home">
            <IonIcon icon={home} />
            <IonLabel>{t('tabs.home')}</IonLabel>
          </IonTabButton>

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