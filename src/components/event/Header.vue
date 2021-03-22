<template>
  <div id="header-wrapper">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style="position:relative; z-index:1200;"
    >
      <a class="navbar-brand" @click="sendToHome">
        <img
          src="https://www.data-stats.com/wp-content/uploads/2020/06/cropped-DS-3-1.png"
          alt="logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <!--------------------- Search bar ----------------------->
        <div class="search-box ml-auto pt-3">
          <div class="form-group has-search form-inline">
            <span class="fa fa-search form-feedback"></span>
            <input
              type="text"
              class="form-control"
              style="width:23rem;"
              v-model="searchValue"
              @keyup="searchAutocomplete()"
            />
            <span
              class="btn btn-outline-secondary"
              style="border-radius:20px;"
              @click="search"
              >Search</span
            >
          </div>
          <!---------- list for the autocomplete options------------>
          <div class="position-relative" v-show="!isSearchBarBlank">
            <div class="card position-absolute" style="width:23rem;">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  style="cursor:pointer;"
                  v-for="searchDataValue in searchDataValues"
                  :key="searchDataValue.id"
                  @click="assignValue(searchDataValue)"
                >
                  {{ searchDataValue }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--------------------- Nav links ------------------------>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/event" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Training</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Usecases</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchValue: "",
      searchDataValues: [],
      isSearchBarBlank: true,
    };
  },
  created() {
    this.$store.state.searchResults = "naman";
    console.log(this.$store.state.searchResults);
  },

  methods: {
    // Main search function
    search() {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/usecase/getEventSearch?search=" +
            this.searchValue
        )
        .then((res) => {
          console.log("naman");
          this.$store.state.searchResults = res.data;
          this.$emit("search", res.data);
          this.$router.push("/searchedValue/" + this.searchValue);
        })
        .catch((err) => console.log(err));
    },
    sendToHome(){
      this.$router.push('/dashboard')
    },
    // Autocomplete function
    searchAutocomplete: function() {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/usecase/eventsAutocomplete?search=" +
            this.searchValue
        )
        .then((res) => {
          if (res.status == 200) {
            this.searchDataValues = res.data.label;
            if (this.searchValue == "") {
              this.searchDataValues = null;
              this.isSearchBarBlank = true;
            } else {
              this.isSearchBarBlank = false;
            }
          }
        })
        .catch((error) => console.log(error));
    },

    assignValue(searchedValue) {
      this.searchValue = searchedValue;
      this.isSearchBarBlank = true;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

* {
  box-sizing: border-box;
}

img {
  width: auto;
  max-height: 80px;
}
.navbar {
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  /* margin-top: 50px; */
  background-color: white !important;
}

.navbar-brand {
  margin: 0px 0px 0px 30px;
  padding: 0px 15px;
}

.nav-link {
  font-family: "Lato";
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 15px !important;
  color: black !important;
}

.nav-link:hover {
  color: #ff7744 !important;
  text-decoration: underline;
}
.has-search .form-control {
  padding-left: 2.375rem;
  border-radius: 15px;
}

.has-search .form-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}

.btn:hover {
  background-color: #ff7744;
  border: 1px solid #ff7744;
}


  @media (max-width: 425px) {
    .form-inline{
      align-items: flex-start;
    }
    .form-control{
      width: 200px;
    }
  }

</style>
