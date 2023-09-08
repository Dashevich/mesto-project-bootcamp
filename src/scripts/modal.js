export {openPopup, closePopup, makePicturePopup, makeProfilePopup, popupCard, popupProfile, popupPicture, elementContainer, profile}
import {renderCard} from './card.js'
import {enableValidation} from './validate.js'

const profile = document.querySelector('.profile');

const popupCard = document.querySelector('.popup_card');
const popupProfile = document.querySelector('.popup_profile');
const popupPicture = document.querySelector('.popup_picture');

const closeButtonCard = popupCard.querySelector('.popup__close-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const closeButtonPicture = popupPicture.querySelector('.popup__close-button');

const formElementCard = popupCard.querySelector('.popup__form');
const formElementProfile = popupProfile.querySelector('.popup__form');
const elementContainer = document.querySelector('.elements');

const nameInputProfile = formElementProfile.querySelector('.popup__form-item_title');
const infoInputProfile = formElementProfile.querySelector('.popup__form-item_info');

const nameInputCard = formElementCard.querySelector('.popup__form-item_title');
const infoInputCard = formElementCard.querySelector('.popup__form-item_info');

const profilename = profile.querySelector('.profile__name');
const profiletext = profile.querySelector('.profile__text');

const picturetitle = popupPicture.querySelector('.popup__title');
const pictureimg = popupPicture.querySelector('.popup__image');


function handleFormSubmit(evt) {
    console.log("click");
    evt.preventDefault(); 
    profilename.textContent = nameInputProfile.value;
    profiletext.textContent = infoInputProfile.value;

    closePopup(popupProfile);
}

function cardFormSubmit(evt) {
    evt.preventDefault(); 

    renderCard(nameInputCard.value, infoInputCard.value);
    nameInputCard.value = '';
    infoInputCard.value = ''

    closePopup(popupCard);
}

function makeProfilePopup() {
    nameInputProfile.value = profilename.textContent;
    infoInputProfile.value = profiletext.textContent;
    enableValidation();
}

function openPopup(popupForOpen) {
    popupForOpen.classList.add("popup_opened");
    document.addEventListener('keydown', keyClose);
}

function closePopup(popupForClose) {
    popupForClose.classList.remove("popup_opened");
    document.removeEventListener('keydown', keyClose);
}

function makePicturePopup(name, image) {
    picturetitle.textContent = name;
    pictureimg.src = image;
    pictureimg.alt = name;
}

function keyClose(evt) {
    if (evt.key === "Escape") {
        const popup = document.querySelector('.popup_opened')
        closePopup(popup);
    }
}

closeButtonCard.addEventListener('click', function() { 
    closePopup(popupCard);
}); 

closeButtonProfile.addEventListener('click', function() { 
    closePopup(popupProfile);
}); 

closeButtonPicture.addEventListener('click', function() { 
    closePopup(popupPicture);
}); 

formElementProfile.addEventListener('submit', handleFormSubmit); 
formElementCard.addEventListener('submit', cardFormSubmit); 


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