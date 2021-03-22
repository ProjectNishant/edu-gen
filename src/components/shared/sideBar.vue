<template>
  <div id="sideBar" class=" bg-light">
    <div class="">
      <i @click="closeSideBar" class="fa fa-times fa-2x" aria-hidden="true"></i>
    </div>
    <hr />

    <!-- <div class="row">
      <div class="col-6 text-center">
        <strong style="color:#ff6400">Login</strong>
      </div>

      <div class="col-6 text-center">
        <strong style="color:#ff6400">Register</strong>
      </div>
    </div> -->
    <p
      class="d-flex justify-content-center"
      v-if="!$store.state.isAuthenticated"
    >
      <a @click="register"><strong style="color:#ff6400;">Register</strong></a>
    </p>
    <p
      class="d-flex justify-content-center"
      v-if="!$store.state.isAuthenticated"
    >
      <a @click="login"><strong style="color:#ff6400;">Login</strong></a>
    </p>
    <p
      class="d-flex justify-content-center"
      v-if="!$store.state.isAuthenticated"
      @click="login"
    >
      <a>Become a trainer</a>
    </p>

    <p
      class="d-flex justify-content-center"
      v-if="!$store.state.isAuthenticated"
    >
      <a @click="$router.push('/myfavourites')">Favourites</a>
    </p>

    <p
      class="d-flex justify-content-center"
      v-if="$store.state.isAuthenticated"
    >
      <a @click="$router.push('/sendToTrainer')">Become a trainer</a>
    </p>
    <p
      class="d-flex  justify-content-center"
      v-if="$store.state.isAuthenticated"
    >
      <a class="link" @click="$router.push('/myfavourites')">Favourites</a>
    </p>

    <p class="d-flex  justify-content-center">
      <sapn class="link" @click="redirect('/tutorial')">My Tutorials</sapn>
    </p>

    <p class="d-flex justify-content-center">
      <span class="link" @click="redirect('/interview')">My Interviews</span>
    </p>

    <p class="d-flex justify-content-center">
      <span class="link font-semibold" @click="redirect('/project')"
        >My Projects</span
      >
    </p>

    <p class="d-flex justify-content-center ">
      <span class="link font-semibold" @click="redirect('/techQuiz')"
        >My Quizzes</span
      >
    </p>
    <!-- <p class="d-flex justify-content-center">
      <a @click="$router.push('/services')">Services</a>
    </p>
    <p class="d-flex justify-content-center">
      <a @click="$router.push('/blogs')">Blogs</a>
    </p>
    <p class="d-flex justify-content-center">
      <a @click="$router.push('/contactUs')">Support</a>
    </p>

    <p
      class="d-flex justify-content-center"
      v-if="$store.state.isAuthenticated"
    >
      <a @click="$router.push('/profile')">View Profile</a>
    </p> -->
    <!-- <p
      class="d-flex justify-content-center"
      v-if="!$store.state.isAuthenticated"
    >
      <a @click="login">Login</a>
    </p>

    <p
      class="d-flex justify-content-center"
      v-if="!$store.state.isAuthenticated"
    >
      <a @click="register">Register</a>
    </p> -->
    <p
      class="d-flex justify-content-center"
      v-if="$store.state.isAuthenticated"
    >
      <a @click="logout">Logout</a>
    </p>
  </div>
</template>

<script>
import { bus } from "../../main.js";

export default {
  mounted() {
    bus.$on("showSidebar", () => {
      this.showSideBar();
    });
  },

  methods: {
    redirect(path) {
      if (!this.$store.state.isAuthenticated) {
        this.login();
      } else {
        this.$router.push(path);
      }
    },
    showSideBar() {
      document.getElementById("sideBar").style.right = "0";
    },

    closeSideBar() {
      document.getElementById("sideBar").style.right = "-100%";
    },
    logout() {
      bus.$emit("logout");
    },
    login() {
      bus.$emit("openlogin");
    },
    register() {
      bus.$emit("openRegister");
    },
  },
};
</script>

<style scoped>
#sideBar {
  position: fixed;
  height: 100vh;
  width: 75%;
  z-index: 999;
  right: -100%;
  transition: right 1s;
  top: 0;
}

.fa-times {
  padding: 10px;
}
a {
}

.link {
  color: #ff6400;
}
</style>
