<template>
  <div>
    <nav class="shadow navbar navbar-expand-sm menu">
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

      <div class="collapse navbar-collapse " id="navbarText">
        <div class="row w-100 d-flex justify-content-center">
          <div class="col-md-2 menuA d-flex justify-content-center">
            <i class="pt-2 fa fa-book" aria-hidden="true"></i>

            <!-- <i class="pt-2 fa fa-cogs" aria-hidden="true"></i> -->
            <a class="pt-1 nav-link " @click="redirect('/tutorial')"
              ><span class="text"> My Tutorials</span></a
            >
          </div>

          <div class="col-md-2 menuB d-flex justify-content-center">
            <i class="fa pt-2 fa-users" aria-hidden="true"></i>
            <a class="pt-1 nav-link" @click="redirect('/interview')"
              ><span class="text"> My Interviews</span></a
            >
          </div>

          <div class="col-md-2 menuC d-flex justify-content-center">
            <i class="pt-2 fa fa-laptop" aria-hidden="true"></i>
            <a class="pt-1 nav-link" @click="redirect('/project')">
              <span class="text">My Projects</span></a
            >
          </div>

          <!-- <div class="col-md-2 menuD d-flex justify-content-center">
            <i class="pt-2 fa fa-users" aria-hidden="true"></i>
            <a class="pt-1 nav-link" @click="$router.push('/contactUs')"
              ><span class="text"> Contact Us</span></a
            >
          </div> -->
          <div class="col-md-2 menuD d-flex justify-content-center">
            <i class="pt-2 fa fa-question-circle" aria-hidden="true"></i>
            <a class="pt-1 nav-link" @click="redirect('/techQuiz')"
              ><span class="text"> My Quizzes</span></a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { bus } from "../../main.js";

export default {
  methods: {
    redirect(path) {
      if (!this.$store.state.isAuthenticated) {
        bus.$emit("register");
      } else {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style scoped>
.text {
  color: #fff;
}

.menuA:hover .fa {
  color: #fff;
}
.menuA:hover .text {
  color: black;
}

.menuB:hover .fa {
  color: #fff;
}
.menuB:hover .text {
  color: black;
}

.menuC:hover .fa {
  color: #fff;
}
.menuC:hover .text {
  color: black;
}

.menuD:hover .fa {
  color: #fff;
}
.menuD:hover .text {
  color: black;
}

.menu {
  /* background: #7dd5f2; */
}

.view {
  display: inline-flex;
}

a {
  cursor: pointer;
}
@media (max-width: 768px) {
  .menu {
    display: none;
  }
}

.navbar {
  /* background: rgba(59, 130, 246, 1); */
  /* background: #fff; */
  background: #00bfff;
}
</style>
