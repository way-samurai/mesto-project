//Изменение текста кнопки самбит
export function renderLoading(isLoading, button, buttonText = 'Сохранить') {
  if (isLoading) {
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = buttonText;
  }
}

//Функция деактивация сабмита попапов
export function deactivatingButton(button) {
  button.classList.add("popup__submit_disabled");
  button.disabled = true;
}
