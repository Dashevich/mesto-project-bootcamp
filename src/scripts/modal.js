import {renderCard} from './card.js'
import {editProfile, newCard, editAvatar} from './api.js'

const profile = document.querySelector('.profile');

const popupCard = document.querySelector('.popup_card');
const popupProfile = document.querySelector('.popup_profile');
const popupPicture = document.querySelector('.popup_picture');
const popupAvatar = document.querySelector('.popup_avatar');

const formElementCard = popupCard.querySelector('.popup__form');
const formElementProfile = popupProfile.querySelector('.popup__form');
const elementContainer = document.querySelector('.elements');
const formElementAvatar = popupAvatar.querySelector('.popup__form');

const nameInputProfile = formElementProfile.querySelector('.popup__form-item_title');
const infoInputProfile = formElementProfile.querySelector('.popup__form-item_info');

const nameInputCard = formElementCard.querySelector('.popup__form-item_title');
const infoInputCard = formElementCard.querySelector('.popup__form-item_info');

const profilename = profile.querySelector('.profile__name');
const profiletext = profile.querySelector('.profile__text');

const picturetitle = popupPicture.querySelector('.popup__title');
const pictureimg = popupPicture.querySelector('.popup__image');

const submitButtonProfile = popupProfile.querySelector('.popup__form-button');
const submitButtonCard = popupCard.querySelector('.popup__form-button');
const submitButtonAvatar = popupAvatar.querySelector('.popup__form-button');


function handleProfileSubmit(evt) {
    evt.preventDefault(); 

    renderLoading(true, submitButtonProfile);
    editProfile(nameInputProfile.value, infoInputProfile.value)
    .then(() => {
        profilename.textContent = nameInputProfile.value;
        profiletext.textContent = infoInputProfile.value;
        closePopup(popupProfile);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
        renderLoading(false, submitButtonProfile);
    });
}

function handleCardSubmit(evt) {
    evt.preventDefault(); 

    renderLoading(true, submitButtonCard);
    newCard(nameInputCard.value, infoInputCard.value)
    .then((res) => {
        renderCard(res, res.owner);
        nameInputCard.value = '';
        infoInputCard.value = '';

        const buttonElement = popupCard.querySelector('.popup__form-button');
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add('popup__form-button_disabled');
        closePopup(popupCard);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
        renderLoading(false, submitButtonCard);
    });
}

function avatarFormSubmit(evt) {
    evt.preventDefault(); 
    const imgInput = formElementAvatar.querySelector('.popup__form-item_info');
   
    renderLoading(true, submitButtonAvatar);
    editAvatar(imgInput.value)
    .then((res) => {
        profile.querySelector('.profile__avatar').src = res.avatar;
        closePopup(popupAvatar);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
        renderLoading(false, submitButtonAvatar);
    });
}

function renderLoading(isLoading, button) {
    if (isLoading) {
        button.textContent = "Сохранение...";
    } else {
        button.textContent = "Сохранить";
    }
  }

function fillProfileInputs() {
    nameInputProfile.value = profilename.textContent;
    infoInputProfile.value = profiletext.textContent;
}

function openPopup(popupForOpen) {
    popupForOpen.classList.add("popup_opened");
    document.addEventListener('keydown', handleEscape);
}

function closePopup(popupForClose) {
    popupForClose.classList.remove("popup_opened");
    document.removeEventListener('keydown', handleEscape);
}

function makePicturePopup(name, image) {
    picturetitle.textContent = name;
    pictureimg.src = image;
    pictureimg.alt = name;
}

function handleEscape (evt) {
    if (evt.key === "Escape") {
        const popup = document.querySelector('.popup_opened')
        closePopup(popup);
    }
}

export {openPopup, closePopup, makePicturePopup, fillProfileInputs, popupCard, popupProfile, popupPicture, popupAvatar, elementContainer, profile, formElementProfile, formElementCard, formElementAvatar, handleProfileSubmit, handleCardSubmit, avatarFormSubmit}