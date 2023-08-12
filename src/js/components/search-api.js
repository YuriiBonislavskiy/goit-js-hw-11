// import getRefs from './get-refs';
import axios from 'axios';
// const Axios = require('axios');
const apiKey = '38758565-30dff5e0c8e04bcbf19e28f96';
// const apiKey = '38764155-ca479ddd4dff1cc7d874d3adf';

const Base_URL = 'https://pixabay.com/api/';

export default class ApiService {
  constructor() {
    this.Base_URL = '';
    this.searchQuery = '';
    this.page = 0;
    this.pageSize = 0;
  }

  // async fetchData() {
  //   const url = `${this.Base_URL}?key=${apiKey}&q=${this.searchQuery}&page=${this.page}&per_page=${this.pageSize}&image_type=photo`;
  //   // const url = `${this.Base_URL}?key=${apiKey}&g=${this.searchQuery}&page=${this.page}&per_page=${this.pageSize}`;
  //   console.log(url);
  //   try {
  //     const response = await axios.get(url);
  //     // const response = await fetch(url);
  //     console.log(response);
  //     const data = await response.data;
  //     return data;
  //   } catch {}
  // }

  async fetchData() {
    const url = `${this.Base_URL}?key=${apiKey}&q=${this.searchQuery}&page=${this.page}&per_page=${this.pageSize}&image_type=photo&orientation=horizontal`;
    // const url = `${this.Base_URL}?key=${apiKey}&g=${this.searchQuery}&page=${this.page}&per_page=${this.pageSize}`;
    // console.log(url);
    try {
      return await axios.get(url);
      // const response = await fetch(url);
      // console.log(response);
      // const data = await response.data;
      // return data;
    } catch {}
  }

  set NewBase_URL(newBase_URL) {
    this.Base_URL = newBase_URL;
  }

  set NewPageSize(newPageSize) {
    this.pageSize = newPageSize;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 0;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
