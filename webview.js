import path from 'path';

module.exports = (Franz) => {
  const UNREAD_BADGE_SELECTOR = '.navigation-item--badgeCount';

  const getMessages = function getMessages() {
    let directCount = 0;
    let indirectCount = 0;

    const elements = document.querySelectorAll('.navigation-bar-list .listItemWrapper');
    if (elements.length > 0 && elements[1].querySelector(UNREAD_BADGE_SELECTOR)) {
      directCount = parseInt(elements[1].querySelector(UNREAD_BADGE_SELECTOR).textContent, 10);
    }
    if (elements.length > 0 && elements[2].querySelector(UNREAD_BADGE_SELECTOR)) {
      indirectCount = parseInt(elements[2].querySelector(UNREAD_BADGE_SELECTOR).textContent, 10);
    }

    Franz.setBadge(directCount, indirectCount);
  };

  Franz.loop(getMessages);
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};
