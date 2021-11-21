import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const imageMarkUp = galleryItems
    .map(
        (galleryItems) =>

        `<a class="gallery__item" 
    href="${galleryItems.original}">
    <img class="gallery__image" 
    src="${galleryItems.preview}" 
    alt="${galleryItems.description}" />
  </a>`

    )
    .join("");

galleryEl.insertAdjacentHTML('beforeend', imageMarkUp);


let lightbox = new SimpleLightbox('.gallery a');
lightbox.on('show.simplelightbox', function() {

});

const onEsc = function(evt) {
    if (evt.key === 'ESCAPE') {
        instance.close();
    };
};



const openGallery = function(evt) {
    evt.preventDefault();


    if (evt.target.classList.value !== "gallery__image") {
        return;
    }

    instance.element().querySelector('img').src = evt.target.dataset.source;


    instance.show()
};


galleryEl.addEventListener('click', openGallery);