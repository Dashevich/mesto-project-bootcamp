export {renderCard, makeCards, initialCards}
import {elementContainer, popupPicture, openPopup, makePicturePopup} from './modal.js'

const elementTemplate = document.querySelector('#element-template').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function addCard(name, image) {
  console.log('click');
  const element = elementTemplate.querySelector('.element').cloneNode(true);

  element.querySelector('.element__title').textContent = name;
  element.querySelector('.element__image').src = image;
  element.querySelector('.element__image').alt = name;
  
  element.querySelector('.element__like-button').addEventListener('click', function(event) {
      event.target.classList.toggle("element__like-button_active");
  }); 

  element.querySelector('.element__delete-button').addEventListener('click', function() {
      element.remove();
  }); 

  element.querySelector('.element__image').addEventListener('click', function() {
      openPopup(popupPicture);
      makePicturePopup(name, image);
  }); 

  return element;
}

function renderCard(name, image) {
  elementContainer.prepend(addCard(name, image));
}

function makeCards() {
  initialCards.forEach(function (card) {
    renderCard(card.name, card.link);
});
}