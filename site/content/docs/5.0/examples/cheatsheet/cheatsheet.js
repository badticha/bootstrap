(function () {
  'use strict'

  function setActiveItem(openParent) {
    var target = window.location.hash;

    if (target !== null) {
      var link = document.querySelector('.bd-aside a[href="' + target + '"]');

      link.classList.add('active');

      if (openParent === true) {
        link.parentNode.parentNode.previousElementSibling.click();
      }
    }
  }

  window.addEventListener('DOMContentLoaded', function() {
    setActiveItem(true);
  })

  window.addEventListener('hashchange', function() {
    var active = document.querySelector('.bd-aside .active');

    if (active !== null) {
      active.parentNode.parentNode.previousElementSibling.click();
      active.classList.remove('active');
    }

    setActiveItem(false);
  });
})()
