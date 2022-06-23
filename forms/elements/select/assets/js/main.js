"use strict";

document.addEventListener('click', function (e) {
  var element = e.target;

  if (element.classList.contains('select__input')) {
    var $select = element.closest('.select');

    if ($select.classList.contains('open')) {
      $select.classList.remove('open');
    } else {
      setTimeout(function () {
        var $selectOpen = document.querySelectorAll('.open');

        if ($selectOpen) {
          $selectOpen.forEach(function (item) {
            item.classList.remove('open');
          });
        }

        $select.classList.add('open');
      }, 10);
    }
  }

  if (element.classList.contains('select__item')) {
    var _$select = element.closest('.select');

    _$select.classList.remove('open');

    var $selectInput = _$select.querySelector('.select__input');

    $selectInput.textContent = element.textContent;
  }
});
//# sourceMappingURL=main.js.map
