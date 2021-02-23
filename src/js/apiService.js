export default {
  page: 1,
  inputValue: '',

  fetchData() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.inputValue}&page=${this.page}&per_page=12&key=20364731-46e701cf2e3ccfa2f87043efb&order=latest`,
    )
      .then(res => res.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },

  resetPage() {
    this.page = 1;
  },
  get pageNumber() {
    return this.page;
  },
  set input(value) {
    this.inputValue = value;
  },
};
