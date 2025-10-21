

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачу:
*/
/*
- Создайте форму и отработайте на ней все события и методы из этого урока
- Добавьте к текстовым полям формы валидацию заполнения полей
и счетчик символов
- Запретите вставку текста в объект textarea этой формы
*/

// Решение

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const inputs = form.querySelectorAll("input, textarea");

  // Счётчики символов
  inputs.forEach(input => {
    const counter = document.getElementById(input.id + "Counter");
    input.addEventListener("input", () => {
      counter.textContent = `${input.value.length} / ${input.maxLength}`;
    });
  });

  // Валидация
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
      const error = document.getElementById(input.id + "Error");
      if (input.value.trim() === "") {
        error.textContent = "Поле обязательно для заполнения";
        isValid = false;
      } else {
        error.textContent = "";
      }
    });

    if (isValid) {
      alert("Форма успешно отправлена!");
      form.reset();
      inputs.forEach(input => {
        const counter = document.getElementById(input.id + "Counter");
        counter.textContent = `0 / ${input.maxLength}`;
      });
    }
  });

  // События: фокус, блюр, ввод
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#007bff";
    });

    input.addEventListener("blur", () => {
      input.style.borderColor = "#ccc";
    });

    input.addEventListener("change", () => {
      console.log(`Изменено поле: ${input.id}`);
    });
  });

  // Запрет вставки текста в textarea
  const message = document.getElementById("message");
  message.addEventListener("paste", (e) => {
    e.preventDefault();
    alert("Вставка текста запрещена!");
  });

  // Сброс формы
  form.addEventListener("reset", () => {
    inputs.forEach(input => {
      const counter = document.getElementById(input.id + "Counter");
      counter.textContent = `0 / ${input.maxLength}`;
      document.getElementById(input.id + "Error").textContent = "";
    });
  });
});




//========================================================================================================================================================
//========================================================================================================================================================
