// Меню в мобильной версии
var navToggle = document.querySelector('.page-header__toggle');
var navMain = document.querySelector('.main-nav');

  navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains('page-header__toggle--opened')) {
      navToggle.classList.remove('page-header__toggle--opened');
      navToggle.classList.add('page-header__toggle--closed');
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navToggle.classList.remove('page-header__toggle--closed');
      navToggle.classList.add('page-header__toggle--opened');
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
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
