/* Плавная прокрутка */
//Все кнопки "Купить" на странице
const btns = document.querySelectorAll('.header__btn-buy')

//Цикл по всем кнопкам
for(let btn of btns) {
    //Добавление обработки Клика к каждой кнопке
    btn.addEventListener('click', function(e) {
        //Плавно прокрутить страницу до раздела "Купить"
        document.querySelector('.bue').scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

/* Модальное окно */
let modal = document.getElementById("my_modal");
let btn = document.getElementsByClassName("header__btn-play")[0];
let close = document.getElementsByClassName("close_modal_window")[0];
let video = document.getElementById("video");

btn.onclick = function () {
   modal.style.display = "block";
}

close.onclick = function () {
   modal.style.display = "none";
   video.pause();
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
       video.pause();
   }
}