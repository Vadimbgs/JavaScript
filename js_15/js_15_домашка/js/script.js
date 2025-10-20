//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачу:
*/
/*
Пишем форму поиска, которая открывается по клику на иконку
а закрывается по клику на любое место страницы, кроме самой формы.
Также, закрыть форму можно по клавише эскейп (Esc) на клавиатуре.
Для поля ввода поискового запроса добавляем счетчик символов.
*/

// Решение


const searchIcon = document.getElementById('searchIcon');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const charCount = document.getElementById('charCount');

// Открыть/закрыть форму по клику на иконку
searchIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  searchForm.classList.toggle('active');
  if (searchForm.classList.contains('active')) {
    searchInput.focus();
  }
});

// Закрытие при клике вне формы
document.addEventListener('click', (e) => {
  if (!searchForm.contains(e.target) && !searchIcon.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});

// Закрытие по клавише Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchForm.classList.remove('active');
  }
});

// Счётчик символов
searchInput.addEventListener('input', () => {
  const currentLength = searchInput.value.length;
  const maxLength = searchInput.getAttribute('maxlength');
  charCount.textContent = `${currentLength} / ${maxLength}`;
});




//========================================================================================================================================================
//========================================================================================================================================================

