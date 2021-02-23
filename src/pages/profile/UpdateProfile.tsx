import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IonContent,
  IonPage,
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonAvatar,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonLoading,
  IonToast,
} from "@ionic/react";
import "./UpdateProfile.css";
import Header from "../../components/header/HeaderComponent";

const UpdateProfile = () => {
  const [ShowToastFailedImageType, setshowToastFailedImageType] = useState(false);
  const [ShowToastFailedImageSize, setshowToastFailedImageSize] = useState(false);
  const [errors,setErrors] = useState();
  const { state, dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const [name, setName] = useState<React.ReactText | undefined>(
    state.user.name
  );
  const [username, setUsername] = useState<React.ReactText | undefined>(
    state.user.username
  );
  const [gender, setGender] = useState<React.ReactText | undefined>(
    state.user.gender
  );
  const [email,] = useState<React.ReactText | undefined>(
    state.user.email
  );
  const [surname, setSurname] = useState<React.ReactText | undefined>(
    state.user.surname
  );
  const [birthday, setBirthday] = useState<string>(state.user.birthday);
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  // Convert selected image to base64 and dispatch the new user's state
  function encodeImageFileAsURL(el) {
    var file = el.target.files[0];
    let file_true= false
    console.log(file);
    if (file) {
      if(file.type.includes("image/jpeg") || file.type.includes("image/png")  && file.size < 100000){
        var reader = new FileReader();
        reader.onloadend = function () {
          let user = state.user;
          user.image = reader.result;
          user.imageLocal = reader.result;
          dispatch({ type: "SET_USER", value: user });
        };
        reader.readAsDataURL(file);
      }else{
        el.target.value = "";
      }
      
      if(file.size > 200000){
        setshowToastFailedImageSize(true);
      }
      if(file.type.includes("image/jpeg")){
        file_true = true
      }else if(file.type.includes("image/png")){
        file_true = true
      }else{
        file_true=false
      }

      if(!file_true){
        setshowToastFailedImageType(true);
      }

    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setShowLoading(true);
      let user = state.user;
      user.name = name;
      user.gender = gender;
      user.surname = surname;
      user.birthday = birthday;
      user.username = username;
      user.events_joined= state.user.events_joined;

      //Here send email with unique token.
      setTimeout(() => {
        dispatch({ type: "SET_USER", value: user });
        setShowLoading(false);
      }, 1000);
    } catch (e) {
      setShowLoading(false);
    }
  };

  const check_state = () =>{
    
    if(state.user.username === username &&
      state.user.name === name &&
      state.user.surname === surname &&
      state.user.gender === gender &&
      state.user.birthday === birthday){
        return true
    }else{
      return false
    }
  }

  if (!state.user) {
    history.push("/");
  }

  return (
    <IonPage>
      <Header page={t("updateProfile.title")} />
      <IonContent fullscreen>
        <IonLoading
          isOpen={showLoading}
          message={"Updating..."}
          onDidDismiss={() => setShowLoading(false)}
        />
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
              {t("updateProfile.changePhoto")}
            </IonLabel>
            {/* <IonInput type="file" accept=".jpg,.jpeg,.png" multiple="false"> */}
            <input
              accept="image/*"
              type="file"
              id="uploadImgProfile"
              disabled={(state.currentAvatar === 'gravatar' ? true: false)}
              onChange={(el) => encodeImageFileAsURL(el)}
            />
            <br/>
            <Link to={{ pathname: '/app/settings' }} style={{textDecoration: 'none'}}>
              <IonLabel style={{display: (state.currentAvatar === 'gravatar' ? 'block': 'none')}} className="err-label-update">{t('updateProfile.changePhotoErr')}</IonLabel>
            </Link>
          </div>

          <form className="form_update_profile" onSubmit={handleSubmit}>
            <IonItem>
              <IonLabel position="floating">
                {t("updateProfile.form.username")}
              </IonLabel>
              <IonInput
                value={username}
                onInput={(e) => setUsername(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">
                {t("updateProfile.form.email")}
              </IonLabel>
              <IonInput type="email" value={email} disabled />
            </IonItem>
            <div className="form_section_input">
              <IonItem className="form_section_input--input">
                <IonLabel position="floating">
                  {t("updateProfile.form.name")}
                </IonLabel>
                <IonInput
                  value={name}
                  onInput={(e) => setName(e.currentTarget.value)}
                />
              </IonItem>
              <IonItem className="form_section_input--input">
                <IonLabel position="floating">
                  {t("updateProfile.form.surname")}
                </IonLabel>
                <IonInput
                  value={surname}
                  onInput={(e) => setSurname(e.currentTarget.value)}
                />
              </IonItem>
            </div>
            <IonItem>
              <IonLabel>
                {t("updateProfile.form.advanced.gender.title")}
              </IonLabel>
              <IonSelect
                value={gender}
                placeholder="Select One"
                onIonChange={(e) => setGender(e.detail.value)}
              >
                <IonSelectOption value="Prefer not to say">
                  {t("updateProfile.form.advanced.gender.prefer")}
                </IonSelectOption>
                <IonSelectOption value="Female">
                  {t("updateProfile.form.advanced.gender.female")}
                </IonSelectOption>
                <IonSelectOption value="Male">
                  {t("updateProfile.form.advanced.gender.male")}
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>{t("updateProfile.form.advanced.birthday")}</IonLabel>
              <IonDatetime
                displayFormat="DD MM YYYY"
                placeholder="Select Date"
                value={birthday}
                onIonChange={(e) => setBirthday(e.detail.value!)}
              ></IonDatetime>
            </IonItem>
            <IonButton
              className="ion-margin-top"
              type="submit"
              expand="block"
              disabled={check_state()}
              data-testid="update-profile-button"
            >
              {t("updateProfile.form.edit")}
            </IonButton>
          </form>
          <IonToast
                isOpen={ShowToastFailedImageType}
                onDidDismiss={() => setshowToastFailedImageType(false)}
                message={t("updateProfile.img_fail")}
                duration={2000}
                color = "danger"
                position = "bottom"
            />
            <IonToast
                isOpen={ShowToastFailedImageSize}
                onDidDismiss={() => setshowToastFailedImageSize(false)}
                message={t("updateProfile.img_exceds")}
                duration={2000}
                color = "danger"
                cssClass= 'toastsize'
                position = "bottom"
            />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default UpdateProfile;
