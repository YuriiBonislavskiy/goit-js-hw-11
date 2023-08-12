export default function getRefs() {
  return {
    searchForm: document.querySelector('.search-form'),
    searchQuery: document.querySelector('[name="searchQuery"]'),
    btnSearch: document.querySelector('.btn-search'),
    gallery: document.querySelector('.gallery'),
    // galleryContainer: document.querySelector('.gallery-container'),
    loader: document.querySelector('.loader'),
    noResult: document.querySelector('.no-result'),
    // errorText: document.querySelector('.error'),
    // selectOption: document.querySelector('.breed-select selected'),
    // catInfo: document.querySelector('.cat-info'),
  };
}

