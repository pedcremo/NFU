import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../State';
import { Redirect, useHistory } from 'react-router-dom';
import {
    IonContent,
    IonInput,
    IonPage,
    IonLoading,
} from '@ionic/react';

import './Register.css';
import icon from '../assets/img/icono.png'
import DeporteImg from '../assets/img/deporte_img.png'

const Register: React.FC = () => {
    const history = useHistory();
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
            setTimeout(() => dispatch({ type: 'SET_USER', value: email}), 5000);
        } catch (e) {
            console.error(e);
            setShowLoading(false);
            setFormErrors(e);
        }
    }

    if (state.user) return <Redirect to="/app/home" />

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonLoading isOpen={showLoading} message={'Logging in'} onDidDismiss={() => setShowLoading(false)} />
                <div className="loginPageContent">
                    <div className="LoginTitleContainer">
                        <img src={icon} alt="icon" />
                        <span className="LoginTitle">Nos Falta Uno</span>
                    </div>
                    <img src={DeporteImg} alt="Deporte IMG" className="loginImg" />
                    <span className="prhaseLogin">Find tournaments and matches for the sport that you prefer</span>
                    <form onSubmit={handleSubmit} method="post" name="login_form" ref={formRef} action="" className="loginOptionsContainer_form">
                        <div className="loginInputsContainer" id="localOps">
                            <div className="loginOption loginOption--input">
                                <IonInput type="email" required value={email} className="inputFieldLogin" onInput={e => setEmail(e.currentTarget.value)} placeholder="Email.."/>
                            </div>
                            <div className="loginOption loginOption--input">
                                <IonInput type="password" value={password} className="inputFieldLogin" required onInput={e => setPassword(e.currentTarget.value)} placeholder="Password.."/>
                            </div>
                            <div className="loginOption loginOption--input" id="repeatPasswd">
                                <IonInput type="password" value={password} className="inputFieldLogin" required onInput={e => setPassword(e.currentTarget.value)} placeholder="Repeat Password.."/>
                            </div>
                            <button className="loginOption loginOption--submit" type="submit" id="btnRegister">Create Account</button>
                            <div className="login-row">
                                <div className="loginOption loginOption--local loginOption--create">
                                    I've forgot my password
                                </div>
                                <div className="separator"></div>
                                <div className="loginOption loginOption--local loginOption--create" id="loginBtnLink" onClick={() => history.push('login')}>
                                    I already have an account
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;
