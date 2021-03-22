<template>
  <div>
    <nav class="navbar navbar-expand-md " style="background-color:#f5f5f5">
      <div class="mobile_view row w-100">
        <div class="mobile_search row w-100">
          <div class="pt-2 col-2 d-flex align-items-center justify-content-end">
            <i
              class="fa fa-arrow-left"
              @click="closeMobileSearch"
              aria-hidden="true"
            ></i>
          </div>
          <form
            class="col-9 d-flex justify-content-end"
            v-on:submit.prevent="completeSearch()"
          >
            <div class="pt-1 w-100">
              <input
                type="text w-100"
                class=" form-control"
                v-model="searchValue"
                @keyup="mySearchAutoComplete()"
                @keydown.enter="completeSearch()"
                placeholder="Search Here..."
              />
              <div class="pl-3 position-relative" v-if="!isSearchBarIsBlank">
                <div class="list-group" style="z-index:9; position:absolute">
                  <a
                    v-for="(tentiveSearchDataValue,
                    index) in tentiveSearchDataValues"
                    @click="assignValueInSearchBar(tentiveSearchDataValue)"
                    :key="index"
                    class="list-group-item list-group-item-action "
                  >
                    {{ tentiveSearchDataValue }}
                  </a>
                </div>
              </div>
            </div>
          </form>

          <div>
            <i
              class="mt-3 fa fa-search"
              @click="completeSearch"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <a
          class=" logo col-8 col-md-9"
          style="cursor:pointer"
          @click="goToHomePage()"
          ><img height="50px" width="50px" src="../../assets/logo.png" /><span
            class="d-flex align-items-center"
            style="color:#ff6400"
            >Edugenix</span
          >
          <!-- <span class="navbar-text">Logo</span> -->
        </a>
        <span
          class="d-flex align-items-center col-3 col-md-2 justify-content-end"
        >
          <i
            class=" fa fa-search btn mobileIcons"
            @click="showSearch()"
            aria-hidden="true"
          ></i>

          <i
            class=" fa fa-bars btn mobileIcons hamburg"
            @click="showSideBar()"
            aria-hidden="true"
          ></i>
        </span>

        <app-sideBar></app-sideBar>
      </div>

      <div class="w-100 desktop_view">
        <ul style="" class="mx-0 row no-gutters navbar-nav w-100">
          <li class="nav-item col-md-1 ">
            <a
              class="navbar-brand logo "
              style="cursor:pointer"
              @click="goToHomePage()"
              ><img
                height="50px"
                width="50px"
                src="../../assets/logo.png"
              /><span class="pt-2 pl-2 logoName">Edugenix</span>

              <!-- <span class="navbar-text">Logo</span> -->
            </a>
          </li>

          <li class="nav-item col-md-4">
            <form class="pl-4 w-75" v-on:submit.prevent="completeSearch()">
              <div class="pt-1 search-box">
                <input
                  type="text"
                  class="shadow-sm form-control"
                  v-model="searchValue"
                  @keyup="mySearchAutoComplete()"
                  @keydown.enter="completeSearch()"
                  placeholder="Search Here..."
                />
                <div class="pl-3 position-relative" v-if="!isSearchBarIsBlank">
                  <div class="list-group" style="z-index:9; position:absolute">
                    <a
                      v-for="(tentiveSearchDataValue,
                      index) in tentiveSearchDataValues"
                      @click="assignValueInSearchBar(tentiveSearchDataValue)"
                      :key="index"
                      class="list-group-item list-group-item-action "
                    >
                      {{ tentiveSearchDataValue }}
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </li>

          <li
            class="pl-5 nav-item col-md-5 d-flex align-items-center"
            v-if="$store.state.isAuthenticated"
          >
            <div class="row no-gutters w-100">
              <div class="col-md-4 d-flex">
                <a
                  class="nav-link w-75"
                  v-if="$store.state.isAuthenticated"
                  @click="$router.push('/my-course')"
                  >My Courses
                </a>
                <div class="pt-2 w- ">|</div>
              </div>

              <div class="col-md-4 d-flex align-items-center">
                <a
                  class=" w-100 asd"
                  v-if="$store.state.isAuthenticated"
                  @click="Trainer()"
                  >Become a Trainer
                </a>
                <div class="pt-2 w- ">|</div>
              </div>

              <div class="col-md-3 d-flex align-items-center offset-md-1">
                <a
                  class=" w-100"
                  v-if="$store.state.isAuthenticated"
                  @click="$router.push('/myfavourites')"
                  >Favourites
                </a>
              </div>
            </div>
          </li>

          <li v-if="!$store.state.isAuthenticated" class="col-md-1">
            <!-- <span class="">
          <a class=" d-inline-flex"   @click="$router.push('/myfavourites')">Favourites</a> 
        <span class="ml-5"><a class=" d-inline-flex"  data-target="#mymodel" data-toggle="modal" >Become a Trainer &nbsp;&nbsp;</a></span>
        </span> -->
          </li>

          <li
            v-if="!$store.state.isAuthenticated"
            class="col-md-4 d-flex align-items-center"
          >
            <span class="">
              <a
                class="link d-inline-flex fav"
                @click="$router.push('/myfavourites')"
                >Favourites</a
              >
              <span class="ml-5"
                ><a
                  class="link d-inline-flex "
                  data-target="#mymodel"
                  data-toggle="modal"
                  >Become a Trainer &nbsp;&nbsp;</a
                ></span
              >
            </span>
          </li>

          <li
            class="mt-1 mr-0 nav-item col-md-2 d-flex align-items-center justify-content-end"
            v-if="!$store.state.isAuthenticated"
          >
            <button
              class="btn btnLogin h-75 "
              @click="changeStatus(true)"
              data-target="#mymodel"
              data-toggle="modal"
            >
              Login
            </button>

            <button
              class="ml-2 registerBtn btn themeBgColor h-75"
              @click="changeStatus(false)"
              data-target="#mymodel"
              data-toggle="modal"
            >
              Register
            </button>
          </li>

          <li
            v-if="$store.state.isAuthenticated"
            class="d-flex align-items-center nav-item col-md-2"
          >
            <!-- Example single danger button -->
            <div class="btn-group">
              <a
                type=""
                class="dropdown-toggle "
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <strong> Hi, {{ firstName | truncate(7) }}</strong>
              </a>
              <div class="pt-3 dropdown-menu">
                <a class="dropdown-item" @click="$router.push('/profile')"
                  >View Profile</a
                >
                <a class="dropdown-item" @click="$router.push('/myfavourites')"
                  >Favourites</a
                >
                <!-- <a class="dropdown-item" href="#">View Other Events</a> -->
              </div>
            </div>

            <button class="ml-2 registerBtn btn btn-white" @click="logout()">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <!-- POP UP FORM START -->
    <div class="modal fade" id="mymodel">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class=" w-100 form_header d-flex justify-content-center font-weight-bold"
            >
              {{ isLogIN ? "Login Form" : "Registration Form" }}
            </h5>
            <button class="close button" data-dismiss="modal">&times;</button>
          </div>

          <div class="modal-body">
            <div v-if="errMessage" class="alert alert-danger" role="alert">
              {{ errMessage }}
            </div>

            <!-- Registration Form Start -->
            <div v-if="!isLogIN">
              <div class="row form-group w-100" style="padding-left:50px">
                <label class="w-100">
                  <i class="pb-2 fa fa-user fa-2x" aria-hidden="true"></i>
                  Full Name:<span class="text-danger">*</span>
                  <input
                    type="text"
                    autocomplete="true"
                    @blur="$v.registeredFullName.$touch()"
                    v-model="registeredFullName"
                    name="username"
                    class="pt-2 form-control w-100"
                  />

                  <p
                    class="pt-2 mb-0 text-danger"
                    v-if="!$v.registeredFullName.required && err"
                  >
                    Username is required
                  </p>
                </label>
              </div>

              <div class="row w-100 form-group" style="padding-left:50px">
                <label class="w-100"
                  ><i
                    class="pb-2 fa fa-envelope fa-2x"
                    aria-hidden="true w-100"
                  ></i>
                  Email: <span class="text-danger">*</span>
                  <input
                    type="email"
                    autocomplete="true"
                    @blur="$v.registeredEmail.$touch()"
                    v-model="registeredEmail"
                    name="email"
                    class="form-control w-100"
                  />
                  <p
                    class="pt-2 mb-0 text-danger"
                    v-if="!$v.registeredEmail.required && err"
                  >
                    Email is required
                  </p>
                  <p
                    class="pt-2 mb-0 text-danger"
                    v-if="!$v.registeredEmail.email && err"
                  >
                    Enter a valid email
                  </p>
                </label>
              </div>

              <div class="row form-group w-100" style="padding-left:50px">
                <label class="w-100"
                  ><i class="pb-2 fa fa-lock fa-2x" aria-hidden="true"></i>
                  Password: <span class="text-danger">*</span>
                  <input
                    type="password"
                    @blur="$v.registeredPassword.$touch()"
                    v-model="registeredPassword"
                    name="password"
                    class="form-control w-100"
                  />
                  <p
                    class="pt-2 mb-0 text-danger"
                    v-if="!$v.registeredPassword.required && err"
                  >
                    Password is required
                  </p>
                  <p
                    class="pt-2 mb-0 text-danger"
                    v-if="!$v.registeredPassword.minLength && err"
                  >
                    minimum 6 letters are required
                  </p>
                </label>
              </div>
              <div class="row form-group w-100" style="padding-left:50px">
                <label class="w-100"
                  ><i class="fa fa-2x fa-mobile pb-2" aria-hidden="true"></i>

                  Mobile No.
                  <input
                    type="number"
                    v-model="mobileNo"
                    name="password"
                    class="form-control w-100"
                  />
                  <!-- <p
                    class="pt-2 mb-0 text-danger"
                    v-if="!$v.registeredPassword.required && err"
                  >
                    Password is required
                  </p>
                  <p
                    class="pt-2 mb-0 text-danger"
                    v-if="!$v.registeredPassword.minLength && err"
                  >
                    minimum 6 letters are required
                  </p> -->
                </label>
              </div>
            </div>
            <!-- registration Form End -->

            <!-- Login Form Start -->

            <div v-if="isLogIN">
              <div class="row form-group w-100" style="padding-left:50px">
                <label class="w-100"
                  ><i class="pb-2 fa fa-envelope fa-2x" aria-hidden="true"></i>
                  Email:
                  <input
                    type="email"
                    v-model="userEmail"
                    @blur="$v.userEmail.$touch()"
                    name="email"
                    class="form-control w-100"
                  />
                  <p
                    class="pt-2 mb-0 text-danger"
                    v-if="!$v.userEmail.required && err"
                  >
                    Email is required
                  </p>
                </label>
              </div>

              <div class="row form-group w-100" style="padding-left:50px">
                <label class="w-100"
                  ><i class="pb-2 fa fa-lock fa-2x" aria-hidden="true"></i>
                  Password:
                  <input
                    type="password"
                    v-model="userPassword"
                    @blur="$v.userPassword.$touch()"
                    name="password"
                    class="form-control w-100"
                  />
                  <p
                    class="pt-2 mb-0 text-danger"
                    v-if="!$v.userPassword.required && err"
                  >
                    Password is required
                  </p>
                </label>
              </div>

              <div
                class="container theme-color form-group d-flex justify-content-end"
              >
                <span @click="forgotPassword"> Forgot Password ?</span>
              </div>
            </div>

            <!-- Login Form End -->
          </div>
          <div class="modal-footer" v-show="!isAuthProcessing">
            <div
              class="justify-content-left w-50"
              style="color:#ff6400"
              v-if="!isLogIN"
            >
              <a style="cursor:pointer" @click="isLogIN = true">
                Have an account<i
                  class="pl-2 fa fa-arrow-right"
                  aria-hidden="true"
                ></i
              ></a>
            </div>
            <div
              class="justify-content-left w-50"
              style="color:#ff6400"
              v-if="isLogIN"
            >
              <a style="cursor:pointer" @click="isLogIN = false"
                >Create Account
                <i class="pl-2 fa fa-arrow-right" aria-hidden="true"></i
              ></a>
            </div>
            <div
              class=" d-flex justify-content-end w-50"
              v-if="!isAuthProcessing"
            >
              <button
                v-if="isLogIN"
                @click="
                  submit($v.userEmail.$invalid, $v.userPassword.$invalid, false)
                "
                class="text-white btn themeBgColor"
              >
                Login
              </button>

              <button
                v-if="!isLogIN"
                @click="
                  submit(
                    $v.registeredEmail.$invalid,
                    $v.registeredPassword.$invalid,
                    $v.registeredFullName.$invalid
                  )
                "
                class="text-white btn themeBgColor"
              >
                Sign Up
              </button>
            </div>
          </div>

          <div class="modal-footer" v-show="isAuthProcessing">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- POP UP FORM END -->

    <!-- Forgot Password Popup start -->
    <div
      class="modal fade "
      id="forgotPasswordModal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Forgot Password</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body position-relative">
            <div
              class="alert alert-primary"
              role="alert"
              v-if="showSuccessMessage"
            >
              {{ msg }}
            </div>
            <!-- <div class="pl-3">     <strong><label for="">Kindly Enter Your Email For Reset The Password:</label></strong></div> -->

            <i
              class="pt-2 pl-3 fa fa-envelope-o position-absolute"
              aria-hidden="true"
            ></i>
            <input
              class="pl-5 form-control rounded-pill"
              @blur="$v.fpEmail.$touch()"
              v-model="fpEmail"
              placeholder="Enter Email"
            />

            <p class="pt-2 mb-0 text-danger" v-if="!$v.fpEmail.required && err">
              Email is required
            </p>
            <p class="pt-2 mb-0 text-danger" v-if="!$v.fpEmail.email && err">
              Enter a valid email
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              v-if="!isAuthProcessing"
              class="text-white btn registerBtn"
              @click="requestToResetPassword($v.fpEmail.$invalid)"
            >
              Submit
            </button>
            <div class="spinner-border" v-if="isAuthProcessing" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Forgot Password Popup End -->
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";

// import $ from 'jquery'

import axios from "axios";
import sideBar from "./sideBar.vue";
import { required, email, minLength } from "vuelidate/lib/validators";
import { bus } from "../../main.js";

export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        prevArrow: "#gallery-prev",
        nextArrow: "#gallery-next",
      },

      fpEmail: null,
      mobileNo: null,
      loginResponseData: null,
      showErrorMsg: false,
      registerResponseData: null,
      loggedIn: false,
      loginError: null,
      registerError: null,
      isLogIN: Boolean,
      searchValue: null,
      tentiveSearchDataValues: null,
      searchResultData: null,
      isSearchBarIsBlank: true,
      isAuthProcessing: false,
      // userRegistrationData:{
      //     fullName:null,
      //     email:null,
      //     password:null
      // },
      registeredFullName: null,
      registeredEmail: null,
      registeredPassword: null,

      // userLoginData:{
      //     email:null,
      //     password:null
      // },
      userEmail: null,
      userPassword: null,
      err: false,
      errMessage: null,
      firstName: "",
      showSuccessMessage: false,
      msg: null,
    };
  },

  components: {
    "app-sideBar": sideBar,
  },

  mixins: [Vue2Filters.mixin],

  mounted() {
    bus.$on("openlogin", () => {
      this.login();
    });
    bus.$on("openRegister", () => {
      this.register();
    });

    bus.$on("openRegister", () => {
      this.logout();
    });
    bus.$on("logout", () => {
      this.logout();
    });
    // console.log(this.$route.params.value)
    var val = localStorage.getItem("dataStatsAuthToken");
    // console.log(val)
    if (val) {
      this.$store.state.isAuthenticated = true;
      axios({
        method: "GET",
        url: this.$store.state.courseApi.getUserProfile,
        headers: { Authorization: val },
      }).then((res) => {
        console.log(res);
        this.getFirstName(res.data.fullName);
        this.$store.state.userData.email = res.data.email;
        this.$store.state.userData.fullName = res.data.fullName;
        this.$store.state.userData.address = res.data.address;
        this.$store.state.userData.mobNo = res.data.mobNo;
        this.$store.state.userData.college = res.data.college;
        this.$store.state.userData.country = res.data.country;
        this.$store.state.userData.skills = res.data.skills;
      });
    } else {
      this.$store.state.isAuthenticated = false;
    }
  },
  updated() {
    // console.log("naman")
  },

  validations: {
    registeredFullName: { required },
    registeredEmail: { required, email },
    registeredPassword: { required, minLength: minLength(6) },
    userEmail: { required },
    userPassword: { required },
    fpEmail: { required, email },
  },

  methods: {
    showSideBar() {
      bus.$emit("showSidebar");
    },
    showSearch() {
      document.getElementsByClassName("mobile_search")[0].style.display =
        "flex";
      document.getElementsByClassName("mobileIcons")[0].style.display = "none";
      document.getElementsByClassName("hamburg")[0].style.display = "none";
      document.getElementsByClassName("logo")[0].style.display = "none";
    },
    requestToResetPassword(invalid) {
      console.log(invalid);
      if (invalid) {
        this.err = true;
      } else {
        this.isAuthProcessing = true;
        this.err = false;

        axios
          .post(this.$store.state.courseApi.reqNewPassword, {
            email: this.fpEmail,
          })
          .then((res) => {
            this.isAuthProcessing = false;
            console.log(res);
            this.fpEmail = null;
            this.showSuccessMessage = true;
            this.msg = res.data.message;
          });
      }
    },
    forgotPassword() {
      this.err = false;
      this.hidePopup();

      window.$("#forgotPasswordModal").modal("toggle");
      window.$("#forgotPasswordModal").modal("show");
    },

    submit(isEmailInvalid, isPasswordInvalid, isFullNameInvalid) {
      this.isAuthProcessing = true;

      console.log(this.isAuthProcessing);

      console.log(isEmailInvalid, isPasswordInvalid, isFullNameInvalid);
      if (isEmailInvalid || isPasswordInvalid || isFullNameInvalid) {
        this.err = true;
        this.isAuthProcessing = false;
      } else {
        console.log("naman");
        this.err = false;
        setTimeout(() => {
          this.isAuthProcessing = true;
        }, 0);
        const axios = require("axios");
        if (!this.isLogIN) {
          // console.log(this.userLoginData)
          console.log(this.mobileNo);
          this.mobileNo = parseInt(this.mobileNo);
          console.log(typeof this.mobileNo);

          axios
            .post(this.$store.state.courseApi.registerUser, {
              fullName: this.registeredFullName,
              email: this.registeredEmail,
              mobNo: this.mobileNo,
              password: this.registeredPassword,
            })
            .then((resData) => {
              this.isAuthProcessing = false;
              //    console.log(resData)
              this.registerResponseData = resData;
              if (this.registerResponseData.data.code == 3) {
                this.$swal({
                  text: "Kindly Check the Inbox or Spam to verify the email",
                  icon: "success",
                });
                // alert("Kindly verify the account on mail")
                this.isLogIN = true;
              } else {
                this.showErrorMsg = true;
                this.errMessage = this.registerResponseData.data.message;

                this.$swal({
                  title: this.errMessage,
                  // text:"Once deleted, you will not be able to recover this imaginary file!",
                  icon: "warning",
                  //   buttons: true,
                  dangerMode: true,
                });
                //         .then((willDelete) => {
                //             if (willDelete) {
                //                 swal("Poof! Your imaginary file has been deleted!", {
                //                 icon: "success",
                //                         });
                //   } else {
                //             swal("Your imaginary file is safe!");
                //         }
                //             });
                // console.log(this.errMessage)
              }
            })
            .catch((err) => {
              this.loginError = err;
              // console.log(this.error)
              this.$swal({
                title: this.loginError,
                // text:"Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                //   buttons: true,
                dangerMode: true,
              });
              this.isAuthProcessing = false;
              this.showErrorMsg = true;
              setTimeout(() => {
                this.showErrorMsg = false;
              }, 2000);
              this.isLogin = true;
            });
        } else {
          axios
            .post(this.$store.state.courseApi.loginUser, {
              email: this.userEmail,
              password: this.userPassword,
            })
            .then((resData) => {
              this.isAuthProcessing = false;
              // console.log('naman')
              this.loginResponseData = resData;
              console.log(resData);

              if (this.loginResponseData.data.code == 0) {
                this.errMessage = this.loginResponseData.data.message;
                this.showErrorMsg = true;
                // console.log(this.errMessage)
              } else if (this.loginResponseData.data.code == 1) {
                this.errMessage = this.loginResponseData.data.message;
                this.showErrorMsg = true;
              } else if (this.loginResponseData.data.code == 2) {
                this.errMessage = this.loginResponseData.data.message;
                this.showErrorMsg = true;
              } else {
                localStorage.setItem(
                  "dataStatsAuthToken",
                  this.loginResponseData.data.token
                );
                this.loggedIn = true;
                setTimeout(() => {
                  this.$store.state.isAuthenticated = true;
                  //   window.$('#mymodel').modal('hide')
                  this.hidePopup();
                  this.$router.push("/dashboard");
                }, 100);
              }
            })
            .catch((err) => {
              this.isAuthProcessing = false;
              this.registerError = err;
              // console.log(this.registerError)
              this.showErrorMsg = true;
              setTimeout(() => {
                this.showErrorMsg = false;
              }, 2000);
            });
        }
        this.isAuthProcessing = false;
      }
    },

    closeMobileSearch() {
      document.getElementsByClassName("mobile_search")[0].style.display =
        "none";
      document.getElementsByClassName("mobileIcons")[0].style.display = "flex";
      document.getElementsByClassName("hamburg")[0].style.display = "flex";
      document.getElementsByClassName("logo")[0].style.display = "flex";
    },
    getFirstName(name) {
      console.log(name.length);
      name;
      for (let i = 0; i < name.length; i++) {
        console.log("1");
        this.firstName = this.firstName + name[i];
      }
      this.$store.state.userName = this.firstName;
      console.log(this.firstName);
    },
    changeStatus(val) {
      this.isLogIN = val;
      this.errMessage = null;
      this.userEmail = null;
      this.userPassword = null;
      this.registeredFullName = null;
      this.registeredEmail = null;
      this.registeredPassword = null;
      // console.log(this.userEmail)
      // window.$("#mymodel").modal({})
    },
    hidePopup() {
      window.$("#mymodel").modal("hide");
    },
    logout() {
      localStorage.removeItem("dataStatsAuthToken");
      this.$store.state.isAuthenticated = false;
      this.$router.push("/");
    },

    Trainer() {
      this.$router.push("/sendToTrainer");
    },

    goToHomePage() {
      this.$router.push("/");
    },

    mySearchAutoComplete() {
      // console.log("mysearch")
      const axios = require("axios");
      axios
        .get(this.$store.state.courseApi.autoCompleteSearch + this.searchValue)
        .then((resData) => {
          if (resData.status == 200) {
            this.tentiveSearchDataValues = resData.data.label;
            if (this.searchValue == "") {
              this.tentiveSearchDataValues = null;
              this.isSearchBarIsBlank = true;
            } else {
              this.isSearchBarIsBlank = false;
            }
          }
        });
    },

    openModal() {
      window.$("#mymodel").modal("toggle");

      window.$("#myModal").modal("toggle");
    },
    login() {
      this.isLogIN = true;
      window.$("#mymodel").modal("toggle");

      window.$("#myModal").modal("toggle");
    },
    register() {
      console.log("nk");
      this.isLogIN = false;
      window.$("#mymodel").modal("toggle");

      window.$("#myModal").modal("toggle");
    },
    completeSearch() {
      // console.log("namna")
      const axios = require("axios");
      axios
        .get(this.$store.state.courseApi.completeSearch + this.searchValue)
        .then((resData) => {
          if (resData.status == 200) {
            // console.log(resData.data);
            this.$store.state.searchResults = resData.data;
            this.$emit("searchResult", resData.data);
            // console.log(this.$store.state.searchResults)
            this.$router.push("/find/" + this.searchValue);
          }
        });
    },

    assignValueInSearchBar(tentiveSearchDataValue) {
      // console.log("naman")
      this.searchValue = tentiveSearchDataValue;
      this.isSearchBarIsBlank = true;
      this.completeSearch();
    },
  },

  watch: {},
  created() {
    bus.$on("register", () => {
      // console.log("naman")
      this.isLogIN = false;
      this.openModal();
    });
  },
};
</script>

<style scoped>
.btnLogin {
  border: 1px solid #6c757d;
  color: #6c757d;
  background: white;
}
.btnLogin:hover {
  transition: 0.5s;
  border: 1px solid #6c757d;
  color: white;
  background: #6c757d;
}
.asd:hover {
  color: #ff6400;
}
.fav:hover {
  color: #ff6400;
}
.logoName {
  color: #ff6400;
}
a {
  cursor: pointer;
}

.themeBgColor {
  background: #ff6400;
}

.search-box {
  position: absolute;
  top: 0;
  left: 70px;
  border: 0px;

  /* transform: translate(6%,-6%); */
}
.spinner-border {
  color: #ff6400;
}
.search-box input {
  height: 50px;
  /* width: 500px; */
  width: 380px;
  padding: 0px 45px;
  border-radius: 50px;
  border: 0px;
}

/* input{
        width: 400px;
    } */

.search-box input:focus {
  outline: none;
}
.form-control {
  padding-left: 10px;
}
/* div>nav>ul>li>button.registerBtn {
       opacity: 0.7;
   }

   div>nav>ul>li>button.registerBtn :hover{
       opacity: 1;
   } */

.form_header {
  color: #ff6400;
}

.search-box:before {
  content: "\F002";
  font-family: "FontAwesome";
  position: absolute;
  left: 12px;
  line-height: 50px;
  color: #ff6400;
  font-size: 25px;
}

.loginButton {
  border: 2px solid #ff6400;
}

.loginButton:hover {
  border: 2px solid #ff6400;
  background-color: #ff6400;
}

.registerBtn {
  color: white;
  background-color: #ff6400;
}

.registerBtn:hover {
  background: transparent;
  border: 1px solid #ff6400;
  color: black;
  transition: 0.5s all;
}

nav > ul > li button .registerBtn :hover {
  color: black;
}

ul li button.registerBtn :hover {
  background-color: #ff00;
}

/* nav>ul>li>a. :hover{
        background-color: #ff6400;
    } */

.navbar-light .navbar-nav . {
  color: black;
}

.navbar-light .navbar-nav .:hover {
  color: #ff6400;
}

.navbar-light .navbar-nav .nav-item .btn-group .:hover {
  color: #ff6400;
}

.navbar-light .navbar-nav .nav-link .registerBtn:hover {
  background-color: #ff5900;
}

.fade {
  /* display: inline-block; */
}

.theme-color {
  color: #ff6400;
  cursor: pointer;
}
.mobile_search {
  display: none;
}
.desktop_view {
  display: flex;
}
@media screen and (max-width: 768px) {
  .desktop_view {
    display: none;
  }
  .mobileIcons {
    top: 12px;
  }
  .mobile_view {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .mobileIcons {
    display: none;
  }
  .mobile_view {
    display: none;
  }

  input {
    width: 400px;
  }
}

.logo {
  display: flex;
}

.link:hover {
  color: #ff6400;
}
</style>
