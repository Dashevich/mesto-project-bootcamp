const elementTemplate = document.querySelector('#element-template').content;
const element = document.querySelector('.element');
const profile = document.querySelector('.profile');

const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const formButton = document.querySelector('.popup__form-button');

const popupCard = document.querySelector('.popup_card');
const popupProfile = document.querySelector('.popup_profile');
const popupPicture = document.querySelector('.popup_picture');

const closeButtonCard = popupCard.querySelector('.popup__close-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const closeButtonPicture = popupPicture.querySelector('.popup__close-button');

const formElementCard = popupCard.querySelector('.popup__form');
const formElementProfile = popupProfile.querySelector('.popup__form');
const elementContainer = document.querySelector('.elements');

const nameInput = formElementProfile.querySelector('.popup__form-item_name');
const infoInput = formElementProfile.querySelector('.popup__form-item_info');

const profilename = profile.querySelector('.profile__name');
const profiletext = profile.querySelector('.profile__text');

const picturetitle = popupPicture.querySelector('.popup__title');
const pictureimg = popupPicture.querySelector('.popup__image');

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


function openPopup(popupForOpen) {
    popupForOpen.classList.add("popup_opened");
}

function closePopup(popupForClose) {
    popupForClose.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    
    profilename.textContent = nameInput.value;
    profiletext.textContent = infoInput.value;

    closePopup(popupProfile);
}

function makePicturePopup(name, image) {
    picturetitle.textContent = name;
    pictureimg.src = image;
    pictureimg.alt = name;
}

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

function cardFormSubmit(evt) {
    evt.preventDefault(); 

    const nameInput = formElementCard.querySelector('.popup__form-item_name');
    const imgInput = formElementCard.querySelector('.popup__form-item_info');
   
    addCard(nameInput.value, imgInput.value);
    nameInput.value = '';
    imgInput.value = ''
    closePopup(popupCard);
}


addButton.addEventListener('click', function() {  // доавление карточки
    openPopup(popupCard);
    
}); 

editButton.addEventListener('click', function() {  // изменение профиля
    openPopup(popupProfile);

    const nameValue = profilename;
    const infoValue = profiletext;

    nameInput.value = nameValue.textContent;
    infoInput.value = infoValue.textContent;

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

formElementProfile.addEventListener('submit', handleFormSubmit); 
formElementCard.addEventListener('submit', cardFormSubmit); 


initialCards.forEach(function (card) {
    renderCard(card.name, card.link);
});
  
