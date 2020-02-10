<template>
  <div class="mainContainer">
    <div class="searchConatiner">
      <div class="searchInner">
        <div class="w100 searchMain">
          <input
            v-model="searchbook"
            v-on:keyup="search(searchbook)"
            v-on:keydown="Emptysearch()"
            v-on:keyup.enter="search(searchbook)"
            type="text"
            class=""
            placeholder="Search for Books"
            autocomplete="on"
            id="searchInput"
          />

          <div class="btnDv">
            <button
              class="btn new-btn"
              type="button"
              @click="search(searchbook)"
            >
              <span class="search-icon">SEARCH</span>
            </button>
          </div>
          <div class="btnDvNew" v-if="searchbook != ''">
            <button class="btn new-btn" type="button" @click="clearSearch()">
              <span class="search-icon">CLEAR</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bookConatiner">
      <div class="bookCard clearfix">
        <div class="tab fLft booksCard">
          <div v-if="book.length > 0">
            <h3>TOTAL BOOKS : {{ totalCount }}</h3>
          </div>
          <div v-if="book.length == 0"><h2>NO BOOKS FOUND</h2></div>
          <div
            v-for="(book, index) in book"
            :key="index"
            :id="book.name"
            class="bookList"
          >
            <h3>Name : {{ book.name }}</h3>
            <h4>Description : {{ book.description }}</h4>
            <h4>Author : {{ book.author }}</h4>
            <h5>Price: {{ book.price }}</h5>
            <h5>Quantity: {{ book.unit }}</h5>
          </div>
        </div>
        <div class="tab fLft addBooks">
          <AddBooks></AddBooks>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddBooks from "./AddBooks";
import { mapGetters, mapActions } from "vuex";
import { debounce } from "../common/Utils";

export default {
  data() {
    return {
      searchbook: "",
      book: [],
      totalCount: 0
    };
  },
  components: {
    AddBooks
  },
  created() {
    this.fetchBooks();
  },
  watch: {
    book: function() {}
  },
  mounted() {},
  computed: {
    ...mapGetters(["getBooks"])
  },
  methods: {
    clearSearch() {
      this.searchbook = "";
      this.Emptysearch();
    },

    fetchBooks() {
      this.book = this.getBooks;
      this.totalCount = this.book.length;
    },

    search: debounce(function(text) {
      let searchResults = [];
      this.searchbook = text.toLowerCase();
      this.book = this.getBooks;
      if (this.searchbook != "") {
        searchResults = this.book.filter(
          a => a.name.toLowerCase().search(this.searchbook) > -1
        );
        this.totalCount = searchResults.length;
        this.book = [...searchResults];
      } else {
        this.Emptysearch();
        return;
      }
    }, 300),

    Emptysearch() {
      if (this.searchbook == "") {
        this.book = this.getBooks;
        this.totalCount = this.book.length;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mainContainer {
  width: 100%;
  .searchConatiner {
    background: url(./../assets/img/bg.jpg) no-repeat;
    background-position: 100% 50%;
    width: 100%;
    height: 250px;
    background-size: cover;
    position: relative;
    .searchInner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 60%;
    }
    .searchMain {
      position: relative;
    }
    input {
      width: 78%;
      border: unset;
      margin-right: 3%;
    }
    .btnDv {
      display: inline-block;
      width: 12%;
    }
    .searchResultDv {
      margin-top: 20px;
      background: lightgrey;
      padding: 10px;
      span {
        display: inline-block;
        background: #fff;
        padding: 2px 4px;
        margin-right: 4px;
        .close {
          margin: 0 2px;
          cursor: pointer;
          color: grey;
        }
      }
    }
    .btnDvNew {
      display: inline-block;
      width: 4%;
    }
  }
  .sorterDV {
    .btnDv {
      .new-btn {
        width: 100%;
      }
    }
  }
  .bookConatiner {
    width: 98%;
    padding: 1%;
    .bookCard {
      width: 96%;
      padding: 1%;
      margin: 1%;
      display: inline-block;
      .booksCard {
        box-shadow: 0 6px 14px 6px rgba(0, 0, 0, 0.08);
        margin: 0 2% 0 0;
        .bookList {
          padding: 1%;
          border: 1px solid #ccc;
          background: #fff;
          h3,
          h4,
          h5 {
            padding: 4px 5px;
            margin: 0;
          }
        }
      }
    }
  }
  .sorterDV {
    margin-bottom: 20px;
    width: 100%;
    .btnDv {
      display: inline-block;
      width: 12%;
      padding-left: 20px;
    }
  }
}
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 46%;
  padding: 1%;
}
.show {
  display: block;
}
</style>
