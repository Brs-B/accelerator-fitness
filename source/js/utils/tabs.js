// Код взял с этого видео https://www.youtube.com/watch?v=QO32qTZe3hA

const buttons = document.querySelectorAll('.membership__toggles-button');
const blocks = document.querySelectorAll('.membership__block');
const button = document.querySelector('.membership__toggles-button');

if (buttons) {
  buttons.forEach(onTogglesClick);
}

function onTogglesClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('membership__toggles-button--active')) {
      buttons.forEach(function (toggle) {
        toggle.classList.remove('membership__toggles-button--active');
      });

      blocks.forEach(function (toggle) {
        toggle.classList.remove('membership__block--active');
      });

      currentBtn.classList.add('membership__toggles-button--active');
      currentTab.classList.add('membership__block--active');
    }
  });
}

if (button) {
  button.click();
}
