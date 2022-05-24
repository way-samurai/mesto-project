//функция открытия модального окна
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

//Функция закрытия модального окна
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

//UPP Функция закрытия модального окна клавишей esc
function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}


//Изменение текста кнопки самбит
export function renderLoading(isLoading, button, buttonText = 'Сохранить') {
  if (isLoading) {
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = buttonText;
  }
}

//функция закрытия попапа разными способами
export function closePopupByEscAndClickOverlay() {
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

//Функция деактивация сабмита попапов
export function deactivatingButton(button) {
  button.classList.add("popup__submit_disabled");
  button.disabled = true;
}
