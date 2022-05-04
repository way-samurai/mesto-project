import {
  confirmPopup,
  confirmSubmitButton,
  popupSubmitButton
} from "./data";

import {
  aprovedCardDeletion
} from "./card";

//функция открытия модального окна
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

//Функция закрытия модального окна
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);

  if (popup === confirmPopup) {
    confirmSubmitButton.removeEventListener("click", aprovedCardDeletion);
  }
}

//UPP Функция закрытия модального окна клавишей esc
function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//Прорисовка кнопки при выполнения fetch запроса
export function renderLoading(isLoading, someButton) {
  if (isLoading) {
    someButton.textContent = "Сохранение...";
  } else if (someButton === popupSubmitButton) {
    someButton.textContent = "Создать";
  } else if (someButton === confirmSubmitButton) {
    someButton.textContent = "Да";
  } else {
    someButton.textContent = "Сохранить";
  }
}

//функция закрытия попапа разными способами
export function closePopupByEscAndClickOverlay () {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        closePopup(popup);
      }
    });
    popup.addEventListener("click", (evt) => {
      if (evt.target.closest(".popup__close")) {
        closePopup(popup);
      }
    });
  });
}

