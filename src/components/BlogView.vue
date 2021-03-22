<template>
<div>
  <app-header></app-header>
  <app-menu></app-menu>
  <div class="d-block"><i class="fa fa-address-book-o" aria-hidden="true"></i>
</div>
  <div class="container mt-4">
    <h3 class="mt-5"><i>Latest Blogs</i></h3>
    <div class="row">
      <div
        class="col-sm-12 col-lg-12 mt-3"
        v-for="blog in displayedBlogs"
        :key="blog.id"
      >
        <div class="shadow mt-3">
          <h5 style="color:#ff7c4d; font-weight:600;">
            {{ blog.heading }}
          </h5>
          <p style="font-size:16px;">
            {{ blog.summary }}
            <br />
            <a class="blog-link" :href="blog.redirectLink">Read more...</a>
          </p>
        </div>
      </div>
      <!-- pagination in blogs -->
      <div class="col-md-12 text-center mt-5 mb-5">
        <button
          type="button"
          class="btn btn-sm  page-button"
          v-if="page != 1"
          @click="page--"
        >
          prev
        </button>
        <button
          type="button"
          class="btn btn-sm page-button"
          v-for="pageNumber in pages.slice(page - 1, page + 5)"
          :key="pageNumber.id"
          @click="page = pageNumber"
        >
          {{ pageNumber }}
        </button>
        <button
          type="button"
          v-if="page < pages.length"
          @click="page++"
          class="btn btn-sm  page-button"
        >
          next
        </button>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
  </div>
</template>

<script>
import header from './shared/Header.vue'
import menu from './shared/MenuBar.vue'
import footer from './shared/footerDetails.vue'
import axios from "axios";
export default {
  components:{
    'app-header':header,
    'app-footer':footer,
    'app-menu':menu
  },
  data() {
    return {
      blogs: [],
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    // getting blogs
    getBlogs() {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/usecase/getBlogs"
        )
        .then((res) => {
          this.blogs = res.data;
        })
        .catch((err) => console.log(err));
    },
    // setting the number of pages as per the blogs length
    setPages() {
      let numberOfPages = Math.ceil(this.blogs.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
      // console.log(this.pages);
    },
    // displaying pages as per blogs available
    paginate(blogs) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return blogs.slice(from, to);
    },
  },
  watch: {
    blogs() {
      this.setPages();
    },
  },
  computed: {
    displayedBlogs() {
      return this.paginate(this.blogs);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: Georgia, "Times New Roman", Times, serif;
}
h3 {
  border-bottom: 1px solid #323437;
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: 500;
  color: #323437;
}
.blog-link {
  color: #323437;
  font-weight: 800;
  text-decoration: none;
}
.blog-link:hover {
  color: darkblue;
}
.shadow {
  padding: 15px;
  transition: all 0.4s ease-in;
}
.shadow:hover {
  transform: scale(1.02);
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
}
.page-button {
  border-radius: 30px !important;
  margin: 4px 4px;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: #ff6d38;
  min-width: 3px;
}
.page-button:hover {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  color: white;
  background-color: #ff6d38;
}
</style>
