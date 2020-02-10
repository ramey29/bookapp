<template>
  <div class="formContainer">
    <h2>Add a new book</h2>
    <div class="form">
      <div class="row">
        <input type="text" placeholder="Name of the book" v-model="BookName" />
      </div>
      <div class="row">
        <input
          type="text"
          placeholder="A short description"
          v-model="BookDesc"
        />
      </div>
      <div class="row">
        <input type="number" placeholder="Price" v-model="BookPrice" />
      </div>
      <div class="row">
        <input type="number" placeholder="Units" v-model="BookUnits" />
      </div>
      <div class="row">
        <input type="text" placeholder="Author" v-model="BookAuthor" />
      </div>

      <div class="row">
        <button class="btn btn-submit" @click="createBook">Add Book</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      BookName: "",
      BookDesc: "",
      BookPrice: "",
      BookUnits: "",
      BookAuthor: "",
      booksData: [],
      book: {}
    };
  },
  computed: {
    ...mapGetters(["getBooks"])
  },
  created: function() {
    this.booksData = this.getBooks;
  },
  methods: {
    ...mapActions(["addBooks"]),
    createBook: function() {
      if (
        this.BookName &&
        this.BookDesc &&
        this.BookPrice &&
        this.BookAuthor &&
        this.BookUnits > 0
      ) {
        this.book = {
          name: this.BookName,
          description: this.BookDesc,
          price: this.BookPrice,
          unit: this.BookUnits,
          author: this.BookAuthor
        };

        this.addBook(this.book);
        this.emptyBook();
      }
    },
    emptyBook: function() {
      this.BookName = "";
      this.BookDesc = "";
      this.BookPrice = "";
      this.BookUnits = "";
      this.BookAuthor = "";
    },
    addBook: function(book) {
      if (this.booksData.filter(b => b.name == this.BookName).length == 0) {
        this.updateBookStore(book);
        alert("Book is added!");
      } else {
        alert("Duplicate book entry!");
      }
    },
    updateBookStore: function(book) {
      this.addBooks(book);
    }
  }
};
</script>

<style lang="scss" scoped>
.formContainer {
  width: 90%;
  padding: 0 4%;
  display: inline-block;
  .form {
    padding: 10px;
    .row {
      padding: 10px;
      input {
        width: 100%;
        padding: 10px;
        font-size: 14px;
      }
      .btn {
        padding: 10px;
        &.btn-submit {
          background-color: #0cb628;
          border-color: #0cb628;
          border-radius: 2px;
          color: #fff;
        }
      }
    }
  }
}
</style>
