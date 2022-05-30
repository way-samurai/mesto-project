export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  //функция открытия модального окна
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeByEscape);
  }

  //Функция закрытия модального окна
  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closeByEscape);
  }

  //UPP Функция закрытия модального окна клавишей esc
  _closeByEscape = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  //функция закрытия попапа разными способами
  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.closest(".popup__close")) {
        this.close();
      }
    });
  }

  renderLoading(isLoading, buttonText = "Сохранить") {
    if (isLoading) {
      this._buttonSubmit.textContent = "Сохранение...";
    } else {
      this._buttonSubmit.textContent = buttonText;
    }
  }
}
