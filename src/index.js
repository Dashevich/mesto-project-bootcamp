import './pages/index.css';

import {enableValidation} from './scripts/validate.js'
import {makeCards} from './scripts/card.js'
import {openPopup, closePopup, popupProfile, popupCard, popupPicture, popupAvatar, fillProfileInputs, formElementProfile, formElementCard, formElementAvatar, handleProfileSubmit, handleCardSubmit, avatarFormSubmit} from './scripts/modal.js'
import {userInfo, getInitialCards} from './scripts/api.js';


const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');

const closeButtonCard = popupCard.querySelector('.popup__close-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const closeButtonPicture = popupPicture.querySelector('.popup__close-button');
const closeButtonAvatar = popupAvatar.querySelector('.popup__close-button');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileText = profile.querySelector('.profile__text');
const avatar = profile.querySelector('.profile__avatar-space');
const avatarImg = profile.querySelector('.profile__avatar');
const avatarEdit = profile.querySelector('.profile__edit-avatar');

addButton.addEventListener('click', function() {  // доавление карточки
    openPopup(popupCard);
    
}); 

editButton.addEventListener('click', function() {  // изменение профиля
    openPopup(popupProfile);
    fillProfileInputs();
});

avatar.addEventListener('mouseover', function() {  
    avatarImg.classList.add("profile__avatar_hover");
    avatarEdit.classList.remove("profile__edit-avatar_disabled");
}); 

avatar.addEventListener('mouseout', function() {  
    avatarImg.classList.remove("profile__avatar_hover");
    avatarEdit.classList.add("profile__edit-avatar_disabled");
}); 

avatar.addEventListener('click', function() {  
    avatarImg.classList.remove("profile__avatar_hover");
    avatarEdit.classList.add("profile__edit-avatar_disabled");
    openPopup(popupAvatar);
}); 

closeButtonCard.addEventListener('click', function() { 
    closePopup(popupCard);
}); 

closeButtonProfile.addEventListener('click', function() { 
    closePopup(popupProfile);
}); 

closeButtonPicture.addEventListener('click', function() { 
    closePopup(popupPicture);
}); 

closeButtonAvatar.addEventListener('click', function() { 
    closePopup(popupAvatar);
}); 

formElementProfile.addEventListener('submit', handleProfileSubmit); 
formElementCard.addEventListener('submit', handleCardSubmit); 
formElementAvatar.addEventListener('submit', avatarFormSubmit); 

popupCard.addEventListener('click', function (evt) {
   if (evt.currentTarget === evt.target) {
        closePopup(popupCard)
    }
});

popupProfile.addEventListener('click', function (evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(popupProfile)
    }
}); 

popupPicture.addEventListener('click', function (evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(popupPicture)
    }
}); 

popupAvatar.addEventListener('click', function (evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(popupAvatar)
    }
}); 

function makePage() {
    Promise.all([userInfo(), getInitialCards()]) 
    .then(([user, cards]) => {
        profileName.textContent = user.name;
        profileText.textContent = user.about;
        
        makeCards(cards, user);
    }) 
    .catch((err)=>{
        console.log(err);
    })
}

makePage();
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__form-item',
    submitButtonSelector: '.popup__form-button',
    inactiveButtonClass: 'popup__form-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__form-input-error_active'
  }); 