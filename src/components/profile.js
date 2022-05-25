import {
  closePopup,
  renderLoading
} from "./utils";

import {
  profileName,
  profileCaption,
  editPopup,
  nameInput,
  operationInput,
  profileSubmitButton,
  changeAvatarSubmit,
  linkAvatarInput,
  profileImg,
  changeAvatarPopup
} from "./data";

function saveInfoPtofile(evt, api) {
  evt.preventDefault();
  renderLoading(true, profileSubmitButton);
  api.editUserInfo(nameInput.value, operationInput.value)
    .then(() => {
      profileName.textContent = nameInput.value;
      profileCaption.textContent = operationInput.value;
      closePopup(editPopup);
    })
    .catch((err) => console.log(err))
    .finally(() => renderLoading(false, profileSubmitButton));
}

function changeAvatar(evt, api) {
  evt.preventDefault();
  renderLoading(true, changeAvatarSubmit);
  api.editUserAvatar(linkAvatarInput.value)
    .then((data) => {
      profileImg.src = data.avatar;
      closePopup(changeAvatarPopup);
      changeAvatarSubmit.disabled = true;
      changeAvatarSubmit.classList.add("popup__submit_disabled");
    })
    .catch((err) => console.log(err))
    .finally(() => renderLoading(false, changeAvatarSubmit));
}



export {
  saveInfoPtofile,
  changeAvatar
};
