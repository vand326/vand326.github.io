const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery');
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener('click', ()=> {
      modal.classList.add("open");
    })

}
