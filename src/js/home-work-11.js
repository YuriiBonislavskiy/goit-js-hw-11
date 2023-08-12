import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SearchApi from './components/search-api.js';
import getRefs from './components/get-refs.js';
import GaleryMarkup from './components/murkup.js';
import LoadMoreBtn from './components/load-more-btn.js';
import * as IS from './components/is.js';

// if refs.btnSearch.classList.contains('with-btn')
const refs = getRefs();
// import galleryTpl from '../templates/galery.hbs';

const pageType = refs.btnSearch.classList.contains('with-btn');
let loadMoreBtn = null;

if (pageType) {
  console.log('ll;lklkkjjj');
  loadMoreBtn = new LoadMoreBtn({
    selector: '.load-more',
    hidden: true,
  });
}
pageType && loadMoreBtn.refs.button.addEventListener('click', searchData);

console.log(pageType);

const Base_URL = 'https://pixabay.com/api/';

!pageType && IS.winAddListener();
!pageType && IS.checkPosition();

const searchApi = new SearchApi();

searchApi.NewBase_URL = Base_URL;
searchApi.NewPageSize = 40;

refs.searchForm.addEventListener('submit', onSearch);
refs.searchQuery.addEventListener('input', onChangeSearch);

function onChangeSearch(e) {
  // console.log(e.target.value, searchApi.query);
  if (e.target.value.trim() === searchApi.query) {
    refs.btnSearch.setAttribute('disabled', '');
    return;
  }
  refs.btnSearch.removeAttribute('disabled');
}

function onSearch(e) {
  e.preventDefault();
  refs.btnSearch.setAttribute('disabled', '');
  searchApi.query = e.currentTarget.elements.searchQuery.value.trim();

  if (searchApi.query === '') {
    return alert('Введи что-то нормальное');
  }
  searchApi.resetPage();
      !refs.noResult.classList.contains('is-hidden') &&
        refs.noResult.classList.add('is-hidden');
  refs.gallery.innerHTML = '';
  searchData();
}

async function searchData() {
  try {
    searchApi.incrementPage();
    pageType && loadMoreBtn.disable();
    const ApiResponse = await searchApi.fetchData();
    const dataApiResponse = await ApiResponse.data;
    const { totalHits, hits } = dataApiResponse;

    if (totalHits < 1) {
      console.log('Error');
      pageType && loadMoreBtn.hide();
      refs.btnSearch.removeAttribute('disabled');
      return;
    }
    if (searchApi.page > 0 && searchApi.page * searchApi.pageSize < totalHits) {
      console.log(searchApi.page, searchApi.pageSize, totalHits);
      pageType && loadMoreBtn.show();
      pageType && loadMoreBtn.enable();
    } else {
      pageType && loadMoreBtn.hide();
      refs.noResult.classList.remove('is-hidden');
    }
    // pageType && loadMoreBtn.enable();
    GaleryMarkup(hits);
    gallery.refresh();

    if (searchApi.page > 0 && pageType) {
      smoothScroll();
    }
  } catch {
    pageType && loadMoreBtn.hide();
    // refs.btnSearch.removeAttribute('disabled');
  }
}

const gallery = new SimpleLightbox('.gallery__link', {
  sourceAttr: 'href',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// ***********************
function smoothScroll() {
  // console.log(searchApi.page);
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

export { searchData };
