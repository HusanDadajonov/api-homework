let elList = document.querySelector(".box");
let elModalWrap = document.querySelector(".modal__wrap");
let elModalClose = document.querySelector(".modal__close");

fetch("https://reqres.in/api/users").then(res => res.json()).then(data => show(data.data))
elModalClose.addEventListener("click",closeModal);

function show(arr){
    arr.forEach(item => elList.innerHTML += ` <li class="box__item"><div class="box__block"><img class="box__img" src="${item.avatar}" alt="box__img"><div class="box__wrap"><h3 class="box__title">${item.first_name}</h3><p class="box__desc">${item.last_name}</p></div></div><p class="box__email-block"><span class="email">Email: </span><a class="box__email" href="#">${item.email}</a></p><button class="box__close--btn">Delete</button></li> `);
    let allCloseBtn = document.querySelectorAll(".box__close--btn");
    allCloseBtn.forEach(btn => btn.addEventListener("click", e => e.target.parentElement.remove()));
    let allImg = document.querySelectorAll(".box__img");
    showModal(allImg);
}

function showModal(arr){
    arr.forEach(item => {
        item.addEventListener("click", e => {
            elModalWrap.innerHTML = `   <div class="modal"><img class="modal__img" src="${e.target.src}" alt=""></div>`
            elModalClose.style.display = "block";
        });
    })
}

function closeModal(){
    elModalClose.style.display = "none";
    document.querySelector(".modal").remove();
}