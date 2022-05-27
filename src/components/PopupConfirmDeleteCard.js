import {Popup} from "./Popup";
import {renderLoading} from "./utils";
import {confirmSubmitButton} from "./data";

export class PopupConfirmDeleteCard extends Popup{
  constructor(popupSelector, cardForDelete, api) {
    super(popupSelector)
    this._cardForDelete = cardForDelete;
    this._api = api;
  }

  submitDeleteCardAprove() {
    if (!this._cardForDelete) return;

    renderLoading(true, confirmSubmitButton, 'Да');
    this._api.deleteCard(this._cardForDelete._id)
      .then(() => {
        this._cardForDelete.cardElement.remove();
        this.closePopup();
        this._cardForDelete = null;
      })
      .catch((err) => console.log(err))
      .finally(() => renderLoading(false, confirmSubmitButton, 'Да'));
  }
}


