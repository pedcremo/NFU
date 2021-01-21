import React, {useContext,useState,useRef} from 'react';
import { AppContext } from '../State';
import { Redirect } from 'react-router-dom';
import { 
    IonContent, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonItem,
    IonInput,
    IonButton,
    IonPage,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonAlert,
    IonLabel,
    IonLoading

} from '@ionic/react';

const Login: React.FC = () => {
    const { state,dispatch } = useContext(AppContext);
    const [ email, setEmail ] = useState<React.ReactText | undefined>('');
    const [ password, setPassword ] = useState<React.ReactText | undefined>('');
    const [ , setFormErrors ] = useState(null);
    const [ showLoading, setShowLoading ] = useState(false);
    
    const formRef = useRef(null);

    const handleSubmit = async e => {
        e.preventDefault();
    
        try {            
          setShowLoading(true);
          setTimeout(()=> {              
              dispatch({type:'SET_USER',value:email});
              
            },2000);
                
          
        } catch (e) {
          console.error(e);
          setShowLoading(false);
          setFormErrors(e);
        }
    }
    
    if (state.user) {
        return <Redirect to="/app/home" />   
    }
        
    return (
    <IonPage>
        <IonHeader>
        <IonToolbar color="light">
            
                <IonTitle>{'NFU'}</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent className="form">
        
        <IonLoading isOpen={showLoading} message={'Logging in'} onDidDismiss={() => setShowLoading(false)}/>
        <form onSubmit={handleSubmit} method="post" ref={formRef} action="">
            <IonList>
            <IonItem>
                <IonLabel position={'fixed'}>Email</IonLabel>
                <IonInput type="email" required value={email} onInput={e => setEmail(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
                <IonLabel position={'fixed'}>Password</IonLabel>
                <IonInput
                type="password"
                value={password}
                required
                onInput={e => setPassword(e.currentTarget.value)}
                />
            </IonItem>
            
            <IonButton expand="block" type="submit">{'Login'}</IonButton>
            </IonList>
        </form>
        <div className="below-form">
            {/*<a className="create" href="#/" onClick={(e) => { e.preventDefault(); goTo('/signup')}}>Create account instead</a> */}
            <a href="#/" onClick={(e) => { e.preventDefault(); }}>{'Password Forgotten'}</a>
        </div>
        
        </IonContent>
    </IonPage>

    );
};

export default Login;
