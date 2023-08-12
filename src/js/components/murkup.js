import getRefs from './get-refs';
const refs = getRefs();

export default function GaleryMarkup(galleryItems) {
  //   console.log(galleryItems);
  const galleryItemsRetdersString = galleryItems
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class='photo-card'>
      <a class='gallery__link' href='${largeImageURL}' onclick='return false;'>
        <img src='${webformatURL}' alt='${tags}' loading='lazy' class="gallery__image" />
      </a>
    <div class='info'>
      <p class='info-item'>
        <b>Likes</b>
        ${likes}
      </p>
      <p class='info-item'>
        <b>Views</b>
        ${views}
      </p>
      <p class='info-item'>
        <b>Comments</b>
        ${comments}
      </p>
      <p class='info-item'>
        <b>Downloads</b>
        ${downloads}
      </p>
    </div>
   </div>`;
      }
    )
    .join('');
  refs.gallery.insertAdjacentHTML(
    'beforeend',
    galleryItemsRetdersString );
}

  //       return `<li class='gallery__item'>
  //   <div class='photo-card'>
  //     <a class='gallery__link' href='${largeImageURL}' onclick='return false;'>
  //       <img src='${webformatURL}' alt='${tags}' loading='lazy' class="gallery__image" />
  //     </a>
  //   </div>
  //   <div class='info'>
  //     <p class='info-item'>
  //       <b>Likes</b>
  //       ${likes}
  //     </p>
  //     <p class='info-item'>
  //       <b>Views</b>
  //       ${views}
  //     </p>
  //     <p class='info-item'>
  //       <b>Comments</b>
  //       ${comments}
  //     </p>
  //     <p class='info-item'>
  //       <b>Downloads</b>
  //       ${downloads}
  //     </p>
  //   </div>
  // </li>`;

  //       }
  //   )
  //   .join('');
  // refs.galleryContainer.insertAdjacentHTML(
  //   'beforeend',
  //   `<ul class="gallery">${galleryItemsRetdersString}</ul>`
  // );

