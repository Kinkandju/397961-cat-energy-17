// Меню в мобильной версии
var navToggle = document.querySelector('.page-header__toggle');
var navMain = document.querySelector('.main-nav');

  navMain.classList.remove('main-nav--nojs');
  navToggle.classList.remove('page-header__toggle--nojs');

  navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened');
    navToggle.classList.add('page-header__toggle--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('page-header__toggle--opened');
    navToggle.classList.remove('page-header__toggle--closed');
  }
});

// Поля ввода формы
  var form = document.querySelector('.form-main__form');
  var fields = form.querySelectorAll('.form__item input:required');
  var submitButton = form.querySelector('button');

  form.addEventListener('input', function() {
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].validity.valid) {
        fields[i].parentElement.classList.remove('error');
      }
    }
  });

  submitButton.addEventListener('click', function() {
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].validity.valid) {
        fields[i].parentElement.classList.add('error');
      }
    }
  });
