"use strict";

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    var directMessages = document.getElementsByClassName("buffer conversation active unread activeBadge").length;
    var indirectMessages = document.getElementsByClassName("buffer channel active unread").length;

    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.injectCSS(path.join(__dirname, 'user-style.css'));

  Franz.loop(getMessages);
};
