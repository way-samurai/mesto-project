import { fetchAddHandleLikes, fetchDeleteCard } from "./api";

import { closePopup, openPopup, renderLoading } from "./utils";

import {
  cardTemplate,
  openImage,
  popupImage,
  popupImageCaption,
  confirmPopup,
  confirmSubmitButton,
} from "./data";

let cardForDelete = null;

const cloneTemplate = () => {
  return cardTemplate.querySelector(".place").cloneNode(true);
};

function aprovedCardDeletion() {
  confirmSubmitButton.addEventListener(
    "click",
    submitDeleteCardAprove(cardForDelete)
  );
}

function handleDeleteCard(cardElement, _id) {
  cardForDelete = {
    cardElement,
    _id,
  };
  openPopup(confirmPopup);
  confirmSubmitButton.addEventListener("click", aprovedCardDeletion);
}

//Добавление карточек
function createCard({ name, link, _id, owner, likes }, myId) {
  const cardElement = cloneTemplate();
  const cardTitle = cardElement.querySelector(".place__title");
  const cardImage = cardElement.querySelector(".place__image");
  const cardLikesCounter = cardElement.querySelector(".place__likes-counter");
  const cardLikeButton = cardElement.querySelector(".place__like-button");
  const cardDeleteButton = cardElement.querySelector(".place__delete-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardLikesCounter.textContent = `${likes.length}`;

  if (likes.some((like) => like._id === myId)) {
    cardLikeButton.classList.add("place__like-button_active");
  }

  cardDeleteButton.classList.toggle(
    "place__delete-button_hidden",
    owner._id !== myId
  );

  if (owner._id === myId) {
    cardDeleteButton.addEventListener(
      "click",
      () => {
        handleDeleteCard(cardElement, _id);
      },
      true
    );
  }

  cardImage.addEventListener("click", function () {
    popupImage.src = cardImage.src;
    popupImage.alt = name;
    popupImageCaption.textContent = name;
    openPopup(openImage);
  });

  cardLikeButton.addEventListener("click", function handleLikes() {
    const myLike = likes.find((like) => like._id === myId);
    const method = myLike !== undefined ? "DELETE" : "PUT";
    fetchAddHandleLikes(_id, method)
      .then((data) => {
        likes = data.likes;
        cardLikesCounter.textContent = `${likes.length}`;

        if (likes.some((like) => like._id === myId)) {
          cardLikeButton.classList.add("place__like-button_active");
        } else {
          cardLikeButton.classList.remove("place__like-button_active");
        }
      })
      .catch((err) => console.log(err));
  });
  return cardElement;
}

function submitDeleteCardAprove(cardForDelete) {
  if (!cardForDelete) return;

  renderLoading(true, confirmSubmitButton);
  fetchDeleteCard(cardForDelete._id)
    .then(() => {
      cardForDelete.cardElement.remove();
      closePopup(confirmPopup);
      cardForDelete = null;
    })
    .catch((err) => console.log(err))
    .finally(() => renderLoading(false, confirmSubmitButton));
}

export { createCard, submitDeleteCardAprove, aprovedCardDeletion };
