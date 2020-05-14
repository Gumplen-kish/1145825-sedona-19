var popup = document.querySelector(".feedback__modal-windows-shipped--opened");
var button = document.querySelector(".feedback__comment-send");
var form = popup.querySelector(".feedback__user");

/*Задаем добавление класса при клике на кнопку*/
button.addEventListener("click",function(evt) {
  evt.preventDefault();
  popup.classList.add("feedback__modal-windows-shipped--opened");
});
/*Задаем удаление класса при клике на кнопку*/
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback__modal-windows-shipped--opened");
});
