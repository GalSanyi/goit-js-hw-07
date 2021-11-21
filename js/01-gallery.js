import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

const imageMarkUp = galleryItems
    .map(
        (galleryItems) =>
        // Был неправильно скопирован код с условия ДЗ
        // Изза это фигни ничего не работало
        `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItems.original}">
          <img 
            class="gallery__image" 
            src="${galleryItems.preview}"
            data-source="${galleryItems.original}">
            alt="${galleryItems.description}"
          />
        </a>
      </div>`
    )
    .join("");



galleryEl.insertAdjacentHTML('beforeend', imageMarkUp);

const instance = basicLightbox.create(`
    <img src="" alt="" width="800" height="600"> `, { onShow: (instance) => { window.addEventListener('keydown', onEsc) } }, { onClose: (instance) => { window.removeEventListener('keydown', onEsc) } })


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