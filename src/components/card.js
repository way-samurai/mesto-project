//Добавление карточек
function createCard(cardElement) {
  //клонируем разметку шаблона карточки
  const cardsElement = cardTemplate.content.cloneNode(true);
  //Название места
  cardsElement.querySelector(".place__title").textContent = cardElement.name;
  //Изображение места
  cardsElement.querySelector(".place__image").src = cardElement.link;
  //Альтернативное название изображение в случае не прогрузки картинки или нерабочей ссылки
  cardsElement.querySelector(".place__image").alt = cardElement.name;
  //кнопка лайка
  cardsElement
    .querySelector(".place__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("place__like-button_active");
    });
  //Удаление карточки
  cardsElement
    .querySelector(".place__delete-button")
    .addEventListener("click", (evt) => {
      const cardItem = evt.target.closest(".place");
      cardItem.remove();
    });

  //Данные для попапа с фото
  cardsElement
    .querySelector(".place__image")
    .addEventListener("click", (evt) => {
      const cardLink = evt.target.src;
      const cardName = evt.target.closest(".place");
      const cardText = cardName.querySelector(".place__title").textContent;

      //открытие попапа с фото
      openPopup(openImage);
      //присвоение ссылки картинке
      popupImage.src = cardLink;
      popupImageCaption.textContent = cardText;
      popupImage.alt = cardText;
    });

  return cardsElement;
}

//вставка карточки в DOM
function addCard(cardElement) {
  placesElements.prepend(createCard(cardElement));
}

//рендер элементов массива
function renderingCards(initialCards) {
  const renderCards = initialCards.reverse();
  renderCards.forEach(addCard);
}

export {
  createCard,
  addCard,
  renderingCards
}
