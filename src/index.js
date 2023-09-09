import './pages/index.css';

import {enableValidation} from './scripts/validate.js'
import {makeCards} from './scripts/card.js'
import {openPopup, closePopup, popupProfile, popupCard, popupPicture, fillProfileInputs, formElementProfile, formElementCard, handleProfileSubmit, handleCardSubmit} from './scripts/modal.js'

const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');

const closeButtonCard = popupCard.querySelector('.popup__close-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const closeButtonPicture = popupPicture.querySelector('.popup__close-button');

addButton.addEventListener('click', function() {  // доавление карточки
    openPopup(popupCard);
    
}); 

editButton.addEventListener('click', function() {  // изменение профиля
    openPopup(popupProfile);
    fillProfileInputs();
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

formElementProfile.addEventListener('submit', handleProfileSubmit); 
formElementCard.addEventListener('submit', handleCardSubmit); 

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


makeCards();
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__form-item',
    submitButtonSelector: '.popup__form-button',
    inactiveButtonClass: 'popup__form-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__form-input-error_active'
  }); 