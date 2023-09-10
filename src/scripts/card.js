import {elementContainer, popupPicture, openPopup, makePicturePopup} from './modal.js'
import {deleteCard, putLike, deleteLike} from './api.js'

const elementTemplate = document.querySelector('#element-template').content;

function addCard(card, user) {
  console.log('click');
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const name = card.name;
  const image = card.link;
  const likes = card.likes.length;
  const cardId = card._id;
  const deleteButton = element.querySelector('.element__delete-button');
  const likeButton = element.querySelector('.element__like-button');
  const likeCount =element.querySelector('.element__like-count');

  element.querySelector('.element__title').textContent = name;
  elementImage.src = image;
  elementImage.alt = name;
  likeCount.textContent = likes;
  
  for (let i = 0; i < card.likes.length; ++i) {
    if (card.likes[i]._id === user._id) {
      likeButton.classList.add("element__like-button_active");
      break;
    }
  } 

  likeButton.addEventListener('click', function(event) {
    if (likeButton.classList.contains('element__like-button_active')) {
      deleteLike(cardId)
      .then((res) => {
        event.target.classList.remove("element__like-button_active");
        likeCount.textContent = res.likes.length;
      })
      .catch((err) => {
          console.log(`Ошибка: ${err}`);
      })
    } else {
      putLike(cardId)
      .then((res) => {
        event.target.classList.add("element__like-button_active");
        likeCount.textContent = res.likes.length;
      })
      .catch((err) => {
          console.log(`Ошибка: ${err}`);
      })
    }
}); 

if (card.owner._id != user._id) {
  deleteButton.setAttribute('disabled', '');
  deleteButton.classList.add('element__delete-button_disabled');
}

  deleteButton.addEventListener('click', function() {
    deleteCard(cardId)
    .then(() => {
      element.remove();
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
}); 

  elementImage.addEventListener('click', function() {
      openPopup(popupPicture);
      makePicturePopup(name, image);
  }); 

  return element;
}

function renderCard(card, user) {
  elementContainer.prepend(addCard(card, user));
}

function makeCards(cards, user) {
  cards.forEach(function (card) {
    renderCard(card, user);
  });
}

export {renderCard, makeCards}