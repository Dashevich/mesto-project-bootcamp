import './pages/index.css';

import {enableValidation} from './scripts/validate.js'
import {makeCards} from './scripts/card.js'
import {openPopup, popupProfile, popupCard, makeProfilePopup} from './scripts/modal.js'

const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');

addButton.addEventListener('click', function() {  // доавление карточки
    openPopup(popupCard);
    
}); 

editButton.addEventListener('click', function() {  // изменение профиля
    openPopup(popupProfile);
    makeProfilePopup();
}); 

makeCards();
enableValidation();