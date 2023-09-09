import {renderCard} from './card.js'
import {enableValidation} from './validate.js'

const profile = document.querySelector('.profile');

const popupCard = document.querySelector('.popup_card');
const popupProfile = document.querySelector('.popup_profile');
const popupPicture = document.querySelector('.popup_picture');

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


function handleProfileSubmit(evt) {
    console.log("click");
    evt.preventDefault(); 
    profilename.textContent = nameInputProfile.value;
    profiletext.textContent = infoInputProfile.value;

    closePopup(popupProfile);
}

function handleCardSubmit(evt) {
    evt.preventDefault(); 

    renderCard(nameInputCard.value, infoInputCard.value);
    nameInputCard.value = '';
    infoInputCard.value = '';

    const buttonElement = popupCard.querySelector('.popup__form-button');
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__form-button_disabled');
    closePopup(popupCard);
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

export {openPopup, closePopup, makePicturePopup, fillProfileInputs, popupCard, popupProfile, popupPicture, elementContainer, profile, formElementProfile, formElementCard, handleProfileSubmit, handleCardSubmit}