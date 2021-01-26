import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../State';
import { Redirect } from 'react-router-dom';
import {
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonPage,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel,
    IonLoading,
    // IonIcon

} from '@ionic/react';

import './login.css';
import icon from '../assets/img/icono.png'
import GoogleIcon from '../assets/img/google_icon.svg'
import FacebookIcon from '../assets/img/facebook_icon.svg'
import DeporteImg from '../assets/img/deporte_img.png'

const Login: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);
    const [email, setEmail] = useState<React.ReactText | undefined>('');
    const [password, setPassword] = useState<React.ReactText | undefined>('');
    const [, setFormErrors] = useState(null);
    const [showLoading, setShowLoading] = useState(false);

    const formRef = useRef(null);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            setShowLoading(true);
            setTimeout(() => dispatch({ type: 'SET_USER', value: email}), 2000);
        } catch (e) {
            console.error(e);
            setShowLoading(false);
            setFormErrors(e);
        }
    }

    if (state.user) return <Redirect to="/app/home" />

    // return (
    //     <IonPage>
    //         <IonHeader>
    //             <IonToolbar color="light">

    //                 <IonTitle>{'NFU'}</IonTitle>
    //             </IonToolbar>
    //         </IonHeader>
    //         <IonContent className="form">

    //             <IonLoading isOpen={showLoading} message={'Logging in'} onDidDismiss={() => setShowLoading(false)} />
    //             <form onSubmit={handleSubmit} method="post" ref={formRef} action="">
    //                 <IonList>
    //                     <IonItem>
    //                         <IonLabel position={'fixed'}>Email</IonLabel>
    //                         <IonInput type="email" required value={email} onInput={e => setEmail(e.currentTarget.value)} />
    //                     </IonItem>
    //                     <IonItem>
    //                         <IonLabel position={'fixed'}>Password</IonLabel>
    //                         <IonInput
    //                             type="password"
    //                             value={password}
    //                             required
    //                             onInput={e => setPassword(e.currentTarget.value)}
    //                         />
    //                     </IonItem>

    //                     <IonButton expand="block" type="submit">{'Login'}</IonButton>
    //                 </IonList>
    //             </form>
    //             <div className="below-form">
    //                 {/*<a className="create" href="#/" onClick={(e) => { e.preventDefault(); goTo('/signup')}}>Create account instead</a> */}
    //                 <a href="#/" onClick={(e) => { e.preventDefault(); }}>{'Password Forgotten'}</a>
    //             </div>

    //         </IonContent>
    //     </IonPage>

    // );

    let showInputs = () => {
        let socialOps = document.getElementById('socialOps')
        let localOps = document.getElementById('localOps')
        if ( socialOps.style.display == 'none'){
            localOps.style.display = 'none'
            socialOps.style.display = 'flex'
        }else{
            localOps.style.display = 'flex'
            socialOps.style.display = 'none'
        }
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonLoading isOpen={showLoading} message={'Logging in'} onDidDismiss={() => setShowLoading(false)} />

                <div className="loginPageContent">
                    {/* <IonIcon icon={arrowBackOutline} className="backBtn" onClick={() => history.goBack()} /> */}
                    <div className="LoginTitleContainer">
                        <img src={icon} alt="icon" />
                        <span className="LoginTitle">Nos Falta Uno</span>
                    </div>
                    <img src={DeporteImg} alt="Deporte IMG" className="loginImg" />
                    <span className="prhaseLogin">Find tournaments and matches for the sport that you prefer</span>
                    <form onSubmit={handleSubmit} method="post" name="login_form" ref={formRef} action="" className="loginOptionsContainer_form">
                        <div className="loginOptionsContainer" id="socialOps">
                            <div className="loginOption loginOption--google">
                                <img src={GoogleIcon} alt="GoogleIcon" className="socialIcon" />Continue with Google
                            </div>
                            <div className="loginOption loginOption--facebook">
                                <img src={FacebookIcon} alt="GoogleIcon" className="socialIcon" />Continue with Facebook
                            </div>
                            <div className="loginOption loginOption--local" onClick={() => showInputs()}>
                                Continue with Email
                            </div>
                        </div>
                        <div className="loginInputsContainer" id="localOps" style={{display: 'none'}}>
                            {/* <div className="loginOption loginOption--google" onClick={() => document.forms['login_form'].submit()}>
                                <img src={GoogleIcon} alt="GoogleIcon" className="socialIcon" />Continue with Google
                            </div>
                            <div className="loginOption loginOption--facebook" onClick={() => document.forms['login_form'].submit()}>
                                <img src={FacebookIcon} alt="GoogleIcon" className="socialIcon" />Continue with Facebook
                            </div> */}
                            <div className="loginOption loginOption--input">
                                <IonInput type="email" required value={email} className="inputFieldLogin" onInput={e => setEmail(e.currentTarget.value)} placeholder="Email.."/>
                            </div>
                            <div className="loginOption loginOption--input">
                                <IonInput type="password" value={password} className="inputFieldLogin" required onInput={e => setPassword(e.currentTarget.value)} placeholder="Password.."/>
                            </div>
                            <button className="loginOption loginOption--submit" type="submit">Log In</button>
                            {/* <IonLabel position={'fixed'}>Email</IonLabel> */}
                            <div className="loginOption loginOption--local loginOption--create" onClick={() => showInputs()}>
                                Create an account
                            </div>
                            <div className="loginOption loginOption--local" onClick={() => showInputs()}>
                                Continue with Google or Facebook
                            </div>
                        </div>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
