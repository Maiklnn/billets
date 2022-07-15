"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// modal
var Modal = /*#__PURE__*/function () {
  function Modal(options) {
    _classCallCheck(this, Modal);

    var defaultOptions = {
      isBefore: function isBefore() {},
      isOpen: function isOpen() {},
      isClose: function isClose() {}
    };
    this.options = Object.assign(defaultOptions, options);
    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.events();
  }

  _createClass(Modal, [{
    key: "events",
    value: function events() {
      document.addEventListener('click', function (e) {
        var clickedElement = e.target.closest('[data-path]');

        if (clickedElement) {
          this.clickedElement = clickedElement;
          this.target = clickedElement.dataset.path;

          if (this.target === 'calendar') {
            this.getCalendar();
          } else {
            this.getModal();
          }

          this.modal = document.querySelector("[data-target=\"".concat(this.target, "\"]")).parentElement;
          var animation = clickedElement.dataset.animation;
          var speed = clickedElement.dataset.speed;
          var isBef = clickedElement.dataset.before;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this.modalContainer = document.querySelector("[data-target=\"".concat(this.target, "\"]"));
          this.options.isBefore(clickedElement, this.modalContainer);
          this.open();
          return;
        }

        if (e.target.closest('.modal-popup__close')) {
          this.close(e);
          return;
        }
      }.bind(this));
      window.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) {
          if (this.isOpen) {
            this.close();
          }
        }

        if (e.keyCode == 9 && this.isOpen) {
          this.focusCatch(e);
          return;
        }
      }.bind(this));
      document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('modal-popup__container') && !e.target.closest('.modal-popup__container') && this.isOpen) {
          this.close(e);
        }
      }.bind(this));
    }
  }, {
    key: "getModal",
    value: function getModal() {
      var overlay = '';
      var upload = this.clickedElement.dataset.upload;

      if (upload) {
        overlay = "\n\t\t\t\t<div class=\"modal-popup\">\n\t\t\t      <div class=\"modal-popup__container\" data-target=\"first\">\n\t\t\t        <div class=\"modal-popup__content modal-content-first\">\n\t\t\t\t\t\t\t".concat(upload, "\t\t\n\t\t\t        </div>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t");
      } else {
        overlay = "\n\t\t\t\t<div class=\"modal-popup\">\n\t\t\t      <div class=\"modal-popup__container\" data-target=\"first\">\n\t\t\t        <div class=\"modal-popup__close\">\xD7</div>\n\t\t\t        <div class=\"modal-popup__content modal-content-first\">\n\t\t\t          <div class=\"modal-content-first__title\">\u0417\u0410\u0411\u0420\u041E\u041D\u0418\u0420\u041E\u0412\u0410\u0422\u042C</div>\n\t\t\t        </div>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t";
      }

      document.body.insertAdjacentHTML('beforeend', overlay);
    }
  }, {
    key: "getCalendar",
    value: function getCalendar() {
      var _this = this;

      var overlay = "\n\t\t\t\t\t\t<div class=\"modal-popup is-open\">\n\t\t\t\t\t\t    <div class=\"modal-popup__container\" data-target=\"calendar\">\n\t\t\t\t\t\t        <div class=\"modal-popup__close\">\xD7</div>\n\t\t\t\t\t\t        <div class=\"modal-popup__content\">\n\t\t\t\t\t\t        \n\t\t\t\t\t\t        <div class=\"calendar\">\n\t\t\t\t\t\t\t        <div class=\"month\">\n\t\t\t\t\t\t\t          <svg class=\"prev\" viewbox=\"0 0 60 100\">\n\t\t\t\t\t\t\t            <path d=\"M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z\"></path>\n\t\t\t\t\t\t\t          </svg>\n\t\t\t\t\t\t\t          <div class=\"date\">\n\t\t\t\t\t\t\t            <h1></h1>\n\t\t\t\t\t\t\t            <p></p>\n\t\t\t\t\t\t\t          </div>\n\t\t\t\t\t\t\t          <svg class=\"next\" viewbox=\"0 0 60 100\">\n\t\t\t\t\t\t\t            <path d=\"M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z\"></path>\n\t\t\t\t\t\t\t          </svg>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t        <div class=\"weekdays\">\n\t\t\t\t\t\t\t          <div>\u041F\u043E\u043D</div>\n\t\t\t\t\t\t\t          <div>\u0412\u0442</div>\n\t\t\t\t\t\t\t          <div>\u0421\u0440</div>\n\t\t\t\t\t\t\t          <div>\u0427\u0435\u0442</div>\n\t\t\t\t\t\t\t          <div>\u041F\u044F\u0442</div>\n\t\t\t\t\t\t\t          <div>\u0421\u0443\u0431</div>\n\t\t\t\t\t\t\t          <div>\u0412\u043E\u0441</div>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t        <div class=\"days\"></div>\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t        \n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
      document.body.insertAdjacentHTML('beforeend', overlay); // строим календарь

      var date = new Date();

      var renderCalendar = function renderCalendar() {
        date.setDate(1);
        var monthDays = document.querySelector(".days");
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        var firstDayIndex = date.getDay() - 1;

        if (date.getMonth() == 7) {
          var lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        } else {
          var lastDayIndex = new Date(date.getFullYear(), date.getMonth(), 0).getDay();
        }

        var nextDays = 7 - lastDayIndex - 1;
        var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сетябрь", "Октябрь", "Ноябрь", "Декабрь"];
        document.querySelector(".date h1").innerHTML = months[date.getMonth()];
        var carrentSelect = document.querySelector(".date p");
        carrentSelect.innerHTML = "Дата:  " + (new Date().getDate() + 1) + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear();
        carrentSelect.setAttribute('data-date', date.getMonth() + 1 + '.' + date.getFullYear());
        var pricePage = document.querySelector(".price");

        if (pricePage) {
          carrentSelect.innerHTML = "Дата передачи " + (new Date().getDate() + 1) + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear();
          var calendarPrev = document.querySelector(".calendar .prev");

          if (new Date().getMonth() + 1 < date.getMonth() + 1 || new Date().getFullYear() < date.getFullYear()) {
            calendarPrev.style.opacity = 1;
          } else {
            calendarPrev.style.opacity = 0;
          }
        }

        var days = "";

        for (var x = firstDayIndex; x > 0; x--) {
          days += "<div class=\"prev-date\">".concat(prevLastDay - x + 1, "</div>");
        }

        for (var i = 1; i <= lastDay; i++) {
          if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += "<div class=\"today\">".concat(i, "</div>");
          } else {
            if ((i < new Date().getDate() && date.getMonth() === new Date().getMonth() || date.getMonth() < new Date().getMonth()) && date.getFullYear() <= new Date().getFullYear()) {
              if (pricePage) {
                days += "<div class=\"prev-date\">".concat(i, "</div>");
              } else {
                days += "<div class=\"calendar__date\">".concat(i, "</div>");
              }
            } else {
              days += "<div class=\"calendar__date\">".concat(i, "</div>");
            }
          }
        }

        for (var j = 1; j <= nextDays; j++) {
          days += "<div class=\"next-date\">".concat(j, "</div>");
          monthDays.innerHTML = days;
        }
      };

      renderCalendar(); // выбор даты

      document.querySelector(".days").addEventListener("click", function (e) {
        var element = e.target;
        console.log(element);

        if (element.classList.contains('calendar__date')) {
          var selectMonthYear = document.querySelector(".date p").getAttribute('data-date');
          var selectData = element.textContent + '.' + selectMonthYear;
          console.log(selectData);
          document.querySelector("*[data-path='calendar']").value = selectData;
          document.querySelector("*[data-date]").textContent = "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u0434\u0430\u0442\u0430: ".concat(selectData);

          _this.close();
        }
      });
      document.querySelector(".prev").addEventListener("click", function () {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
      });
      document.querySelector(".next").addEventListener("click", function () {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
      });
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      this.previousActiveElement = document.activeElement;
      this.modal.style.setProperty('--transition-time', "".concat(this.speed / 1000, "s")); // устанавливаем скорость анимации

      this.modal.classList.add('is-open');
      this.disableScroll();
      this.modalContainer.classList.add('modal-popup-open');
      this.modalContainer.classList.add(this.animation); // устанавливаем анимацию

      setTimeout(function () {
        _this2.options.isOpen(_this2);

        _this2.modalContainer.classList.add('animate-open');

        _this2.isOpen = true;

        _this2.focusTrap();
      }, this.speed);
    }
  }, {
    key: "close",
    value: function close(e) {
      if (this.modalContainer) {
        this.modalContainer.classList.remove('animate-open');
        this.modalContainer.classList.remove(this.animation);
        this.modal.classList.remove('is-open');
        this.modalContainer.classList.remove('modal-popup-open');
        this.enableScroll();
        this.options.isClose(this);
        this.isOpen = false;
        this.focusTrap();
        var modals = document.querySelectorAll(".modal-popup");
        var modalClose = modals[modals.length - 1];
        setTimeout(function () {
          document.body.removeChild(modalClose);
        }, this.speed);
      }
    }
  }, {
    key: "focusCatch",
    value: function focusCatch(e) {
      var focusable = this.modalContainer.querySelectorAll(this.focusElements);
      var focusArray = Array.prototype.slice.call(focusable);
      var focusedIndex = focusArray.indexOf(document.activeElement);

      if (e.shiftKey && focusedIndex === 0) {
        focusArray[focusArray.length - 1].focus();
        e.preventDefault();
      }

      if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
        focusArray[0].focus();
        e.preventDefault();
      }
    }
  }, {
    key: "focusTrap",
    value: function focusTrap() {}
  }, {
    key: "disableScroll",
    value: function disableScroll() {
      var pagePosition = window.scrollY;
      this.lockPadding();
      document.body.classList.add('disable-scroll');
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
    }
  }, {
    key: "enableScroll",
    value: function enableScroll() {
      var pagePosition = parseInt(document.body.dataset.position, 10);
      this.unlockPadding();
      document.body.style.top = 'auto';
      document.body.classList.remove('disable-scroll');
      window.scroll({
        top: pagePosition,
        left: 0
      });
      document.body.removeAttribute('data-position');
    }
  }, {
    key: "lockPadding",
    value: function lockPadding() {
      var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      this.fixBlocks.forEach(function (el) {
        el.style.paddingRight = paddingOffset;
      });
      document.body.style.paddingRight = paddingOffset;
    }
  }, {
    key: "unlockPadding",
    value: function unlockPadding() {
      this.fixBlocks.forEach(function (el) {
        el.style.paddingRight = '0px';
      });
      document.body.style.paddingRight = '0px';
    }
  }]);

  return Modal;
}();

var modal = new Modal({
  isBefore: function isBefore(clickedElement, modal) {
    if (clickedElement.classList.contains('byClick')) {} // записываем ссылку в localStorage


    var link = window.location.href;
    var json = JSON.stringify(link);
    localStorage.setItem('objSend', json);
  },
  isOpen: function isOpen(modal) {},
  isClose: function isClose() {}
});
//# sourceMappingURL=main.js.map
