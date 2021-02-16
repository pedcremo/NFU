import React, { useContext, useState } from 'react';
import { AppContext } from '../../State';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonAvatar,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonButtons,
  IonMenuButton
} from '@ionic/react';
import './UpdateProfile.css';


const UpdateProfile = () => {

  const { state, dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  const [name, setName] = useState<React.ReactText | undefined>('');
  const [username, setUsername] = useState<React.ReactText | undefined>('');
  const [website, setWebsite] = useState<React.ReactText | undefined>('');
  const [bio, setBio] = useState<React.ReactText | undefined>('');
  const [image, seImage] = useState<React.ReactText | undefined>('');

  const [, setEmail] = useState<React.ReactText | undefined>('');
  const [number, setNumber] = useState<React.ReactText | undefined>('');
  const [gender, setGender] = useState<React.ReactText | undefined>('');
  const [birthday, setBirthday] = useState<string>('');
  const history = useHistory();

  // Convert selected image to base64 and dispatch the new user's state
  function encodeImageFileAsURL(el) {
    var file = el.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        // console.log('RESULT', reader.result)
        let user = state.user
        user.image = reader.result;
        dispatch({ type: "SET_USER", value: user })
      }
      reader.readAsDataURL(file);
    }
  }

  if (!state.user) {
    history.push("/");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>{t('updateProfile.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('updateProfile.title')}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <section className="update_profile">
          <div className="profile_photo">
            <IonAvatar className="profile_avatar">
              <img
                // src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                src={state.user.image}
                alt=""
              />
            </IonAvatar>
            <IonLabel className="change_profile_photo">
              {t('updateProfile.changePhoto')}
            </IonLabel>
            {/* <IonInput type="file" accept=".jpg,.jpeg,.png" multiple="false"> */}
            <input type="file" id="uploadImgProfile" onChange={(el) => encodeImageFileAsURL(el)} />
          </div>

          <IonList>
            <IonItem>
              <IonLabel position={"fixed"}>{t('updateProfile.form.name')}</IonLabel>
              <IonInput
                type="text"
                required
                value={name}
                onInput={(e) => setName(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>{t('updateProfile.form.username')}</IonLabel>
              <IonInput
                type="text"
                required
                value={username}
                onInput={(e) => setUsername(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>{t('updateProfile.form.website')}</IonLabel>
              <IonInput
                type="text"
                value={website}
                onInput={(e) => setWebsite(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>{t('updateProfile.form.bio')}</IonLabel>
              <IonInput
                type="text"
                required
                value={bio}
                onInput={(e) => setBio(e.currentTarget.value)}
              />
            </IonItem>

            <div className="personal_information">
              <div className="personal_info">
                <h2>{t('updateProfile.personal.title')}</h2>
                <IonLabel>{t('updateProfile.personal.description')}</IonLabel>
              </div>

              <IonItem>
                <IonLabel position={"fixed"}>{t('updateProfile.form.advanced.email')}</IonLabel>
                <IonInput
                  type="text"
                  required
                  value={state.user.email}
                  onInput={(e) => setEmail(e.currentTarget.value)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position={"fixed"}>{t('updateProfile.form.advanced.phone')}</IonLabel>
                <IonInput
                  type="text"
                  value={number}
                  onInput={(e) => setNumber(e.currentTarget.value)}
                />
              </IonItem>
              <IonItem>
                <IonLabel>{t('updateProfile.form.advanced.gender.title')}</IonLabel>
                <IonSelect
                  value={gender}
                  placeholder="Select One"
                  onIonChange={(e) => setGender(e.detail.value)}
                >
                  <IonSelectOption value="Prefer not to say">{t('updateProfile.form.advanced.gender.prefer')}</IonSelectOption>
                  <IonSelectOption value="Female">{t('updateProfile.form.advanced.gender.female')}</IonSelectOption>
                  <IonSelectOption value="Male">{t('updateProfile.form.advanced.gender.male')}</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel>{t('updateProfile.form.advanced.birthday')}</IonLabel>
                <IonDatetime
                  displayFormat="MM DD YY"
                  placeholder="Select Date"
                  value={birthday}
                  onIonChange={(e) => setBirthday(e.detail.value!)}
                ></IonDatetime>
              </IonItem>
            </div>

            <IonButton data-testid="update-profile-button" expand="block" type="submit">{t('updateProfile.form.edit')}</IonButton>
          </IonList>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default UpdateProfile;