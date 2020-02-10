import Storage from "../../common/WebStorage";

const bookStore = {
  state: {
    books: Storage.getCollectionItem("bookList") || []
  },
  getters: {
    getBooks: (state: any) => {
      return state.books;
    }
  },
  mutations: {
    SETBOOKS: (state: any, book: any) => {
      state.books.push(book);
      Storage.setCollectionItem("bookList", state.books);
    }
  },
  actions: {
    addBooks: (context: any, book: any) => {
      context.commit("SETBOOKS", book);
    }
  }
};

export default bookStore;
