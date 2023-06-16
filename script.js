function showModal(eventId) {
let modal = document.getElementById("modal");
let title = document.getElementById("modal-title"); 
let img = document.getElementById("modal-img");
let description = document.getElementById("modal-description");
 modal.style.display = "flex"; 
 if (eventId == "event1") { title.textContent = "Событие 1";
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKWDcjTEippvuYlwiOXrdCZZloXg7Th3e9TcLCXzp2A&s";
 description.textContent = "Более полное описание события 1."; }
 else if (eventId == "event2")
{ title.textContent = "Событие 2";
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavuM95VSXhj-gxCOkg-hEjpMmuWYfuNnCIGnu8rF2Ug&s"; 
description.textContent = "Более полное описание события 2."; } else if (eventId == "event3") 
{ title.textContent = "Событие 3"; img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tTtn_oInhaiWdl_0MlL40e-mbaaF49c2vA&usqp=CAU";
 description.textContent = "Более полное описание события 3."; } }

function hideModal() { let modal = document.getElementById("modal"); modal.style.display = "none"; }