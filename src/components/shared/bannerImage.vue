<template>
  <div class="">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <!-- <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
        <!-- <li data-target="#carouselExampleIndicators" data-slide-to="3"></li> -->
      </ol>
      <div class="carousel-inner">
        <!-- <div
          class="carousel-item active "
          style="cursor:pointer"
          @click="$router.push('/courseDetails/5fe329398dd6d90c689f3012')"
        >
          <img
            class="d-block w-100"
            src="../../assets/ml_1_final_compressed.jpg"
            alt="First slide"
          />
        </div> -->
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="../../assets/ny_final_compressed.jpg"
            alt="First slide"
          />
        </div>

        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../../assets/industrial-coursesUpdated.jpg"
            alt="First slide"
          />
        </div>
        <!-- <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../../assets/pool-infographicUpdated.jpg"
            alt="Second slide"
          />
        </div> -->

        <!-- <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div> -->
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- <div
      id="carouselExampleIndicators"
      data-interval="5000"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active position-relative">
          <img
            class="d-block w-100"
            src="../../assets/flow.jpg"
            alt="First slide"
          />
          <div
            class="position-absolute d-none d-md-block"
            style="top:0;left:90px"
          >
            <div class="pt-5 pl-5 mt-5 ml-5 align-self-center">
              <h5 class="text-white ml16">Learn Pool Courses at 400 Rupees.</h5>
              <h5 class="text-white add ml3">Earn while Learning.</h5>

              <div class="mt-4 card ">
                <div class="card-body">
                  <p class="pl-2 text-black ">
                    <strong>Solve all your doubts regarding the courses</strong>
                  </p>

                  <div class="">
                    <div class=" position-relative">
                      <i
                        class="position-absolute fa fa-envelope"
                        aria-hidden="true"
                      ></i>
                      <input
                        class="pl-5 form-control rounded-pill "
                        @blur="$v.email.$touch()"
                        v-model="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <p
                      class="pt-2 pl-3 text-danger "
                      v-if="!$v.email.required && err"
                    >
                      email is required
                    </p>
                    <p class="pl-3 text-danger " v-if="!$v.email.email && err">
                      email is not valid
                    </p>

                    <div class="w-100 d-flex justify-content-center">
                      <button
                        @click="bookUser($v.$invalid)"
                        class="mt-2 text-white rounded-pill btn"
                      >
                        Book a FREE Demo
                      </button>
                    </div>
                  </div>
                  <div
                    class="ml-5 alert alert-success w-50"
                    role="alert"
                    v-if="showSuccessMessage"
                  >
                    {{ message }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item position-relative">
          <img
            class="d-block w-100"
            src="../../assets/a5_updated.png"
            alt="First slide"
          />
          <div
            class="position-absolute d-none d-md-block"
            style="top:0;left:90px"
          >
            <div class="pt-5 pl-5 mt-5 ml-5 align-self-center">
              <h5 class="text-white ml16">Hands-On Learning</h5>
              <h5 class="text-white add ml3">Internship Opportunities</h5>

              <div class="mt-4 card ">
                <div class="card-body">
                  <p class="pl-2 text-black ">
                    <strong>Solve all your doubts regarding the courses</strong>
                  </p>

                  <div class="">
                    <div class=" position-relative">
                      <i
                        class="position-absolute fa fa-envelope"
                        aria-hidden="true"
                      ></i>
                      <input
                        class="pl-5 form-control rounded-pill "
                        @blur="$v.email.$touch()"
                        v-model="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <p
                      class="pt-2 pl-3 text-danger "
                      v-if="!$v.email.required && err"
                    >
                      email is required
                    </p>
                    <p class="pl-3 text-danger " v-if="!$v.email.email && err">
                      email is not valid
                    </p>

                    <div class="w-100 d-flex justify-content-center">
                      <button
                        @click="bookUser($v.$invalid)"
                        class="mt-2 text-white rounded-pill btn"
                      >
                        Book a FREE Demo
                      </button>
                    </div>
                  </div>
                  <div
                    class="ml-5 alert alert-success w-50"
                    role="alert"
                    v-if="showSuccessMessage"
                  >
                    {{ message }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item position-relative">
          <img
            class="d-block w-100"
            src="../../assets/a1_updated.png"
            alt="First slide"
          />
          <div
            class="position-absolute d-none d-md-block"
            style="top:0;left:90px"
          >
            <div class="pt-5 pl-5 mt-5 ml-5 align-self-center">
              <h5 class="text-white ml16">Mock Interviews.</h5>
              <h5 class="text-white add ml3">Project Based Learning</h5>

              <div class="mt-4 card ">
                <div class="card-body">
                  <p class="pl-2 text-black ">
                    <strong>Solve all your doubts regarding the courses</strong>
                  </p>

                  <div class="">
                    <div class=" position-relative">
                      <i
                        class="position-absolute fa fa-envelope"
                        aria-hidden="true"
                      ></i>
                      <input
                        class="pl-5 form-control rounded-pill "
                        @blur="$v.email.$touch()"
                        v-model="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <p
                      class="pt-2 pl-3 text-danger "
                      v-if="!$v.email.required && err"
                    >
                      email is required
                    </p>
                    <p class="pl-3 text-danger " v-if="!$v.email.email && err">
                      email is not valid
                    </p>

                    <div class="w-100 d-flex justify-content-center">
                      <button
                        @click="bookUser($v.$invalid)"
                        class="mt-2 text-white rounded-pill btn"
                      >
                        Book a FREE Demo
                      </button>
                    </div>
                  </div>
                  <div
                    class="ml-5 alert alert-success w-50"
                    role="alert"
                    v-if="showSuccessMessage"
                  >
                    {{ message }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div> -->

    <!-- <img class="img-fluid" src="../../assets/new_fontSize22.jpg" /> -->

    <div class="mx-0 row d-md-flex justify-content-center">
      <!-- <div class="col-md-12 d-none d-md-flex justify-content-center">
              <div class="mt-5 bannerImage">
                    <div class="pt-5 pl-5 mt-5 align-self-center position-absolute">

                 <h5 class="text-white ml16">Training on Trending Technologies at Rs. 400</h5>
                 <h5 class="text-white add ml3">Job Ready Trainings</h5>

            <div class="mt-4 card ">
              <div class="card-body">
    
                  <p class="pl-2 text-black "><strong>Solve all your doubts regarding the courses</strong></p>
              

              <div class="">
            <div class=" position-relative">
                <i class="position-absolute fa fa-envelope"   aria-hidden="true"></i>
                <input class="pl-5 form-control rounded-pill " @blur="$v.email.$touch()" v-model="email" placeholder="Enter Email" >
     
            </div>
                  <p class="pt-2 pl-3 text-danger " v-if="!$v.email.required && err">email is required</p>
                <p class="pl-3 text-danger " v-if="!$v.email.email && err">email is not valid</p>

                <div class="w-100 d-flex justify-content-center">
                <button @click="bookUser($v.$invalid)" class="mt-2 text-white rounded-pill btn" >Book a FREE Demo</button>
                </div>
          </div>
            <div class="ml-5 alert alert-success w-50" role="alert" v-if="showSuccessMessage">
              {{message}}
            </div>
              
              </div>
            </div>
 
          </div>
              </div>

              
             
            </div> -->

      <!-- <div class="d-flex justify-content-center d-md-none h-100">
        <div class="m-2 shadow card">
          <div class="card-body">
            <p class="pl-2 text-black ">
              <strong>Solve all your doubts regarding the courses</strong>
            </p>

            <div class="">
              <div class=" position-relative">
                <i
                  class="position-absolute fa fa-envelope"
                  aria-hidden="true"
                ></i>
                <input
                  class="pl-5 form-control rounded-pill "
                  @blur="$v.email.$touch()"
                  v-model="email"
                  placeholder="Enter Email"
                />
              </div>
              <p
                class="pt-2 pl-3 text-danger "
                v-if="!$v.email.required && err"
              >
                email is required
              </p>
              <p class="pl-3 text-danger " v-if="!$v.email.email && err">
                email is not valid
              </p>

              <div class="w-100 d-flex justify-content-center">
                <button
                  @click="bookUser($v.$invalid)"
                  class="mt-2 text-white rounded-pill btn"
                >
                  Book a FREE Demo
                </button>
              </div>
            </div>
            <div
              class="ml-5 alert alert-success w-50"
              role="alert"
              v-if="showSuccessMessage"
            >
              {{ message }}
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import { required, email } from "vuelidate/lib/validators";
import anime from "animejs/lib/anime.es.js";
// import {bus} from '../../main.js';
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      showSuccessMessage: false,
      message: "",
      err: false,
    };
  },

  mounted: function() {
    // this.animation();
    // this.animation1();
    // this.animation2();
  },
  validations: {
    email: {
      email,
      required,
    },
  },

  methods: {
    // Register(){
    //     console.log("hello")
    //     bus.$emit('register')
    // },
    animation2() {
      console.log("anim1");
      var textWrapper = document.querySelector(".ml3");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml3 .letter",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i + 1),
        })
        .add({
          targets: ".ml3",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    },

    bookUser(invalid) {
      console.log(invalid);
      if (invalid) {
        this.err = true;
      } else {
        this.err = false;
        axios
          .post(this.$store.state.courseApi.bookFreeDemo, { email: this.email })
          .then((res) => {
            console.log(res);
            if (res.data.code == 3) {
              this.message = res.data.message;
              this.showSuccessMessage = true;
              this.email = null;
              setTimeout(() => {
                this.showSuccessMessage = false;
              }, 3000);
            }
          });
      }
    },

    animation1() {
      console.log("animation2");
      var textWrapper = document.querySelector(".ml16");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml16 .letter",
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 30 * i,
        })
        .add({
          targets: ".ml16",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    },

    animation() {
      console.log("anim3");
      var textWrapper = document.querySelector(".ml2");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml2 .letter",
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70 * i,
        })
        .add({
          targets: ".ml2",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    },
  },
};
</script>

<style scoped>
.carousel-control-next {
  z-index: 0.5;
}
.carousel-indicators li {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 5px;
  text-indent: 0;
  cursor: pointer;
  border: none;
  background-color: #ff6400;
  opacity: 0.7;
  border-radius: 50%;
}
.carousel-indicators .active {
  width: 5px;
  height: 5px;
  margin: 5px;
  opacity: 1;
  border-radius: 50%;
  background-color: #ff6400;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  background-image: none;
}

.carousel-control-next-icon:after {
  content: ">";
  font-size: 40px;
  color: #ff6400;
}

.carousel-control-prev-icon:after {
  content: "<";
  font-size: 40px;
  color: #ff6400;
}
.bannerImage {
  width: 87%;
  height: 400px;
  background-image: url("../../assets/a4.jpg");
}

.btn {
  background-color: #ff6400;
}

.btn:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ml2 .letter {
  display: inline-block;
}

.add {
  color: #ff6400;
}

.fa-envelope {
  left: 20px;
  top: 11px;
}

.ml16 {
  overflow: hidden;
}

.ml16 .letter {
  display: inline-block;
  line-height: 1em;
}

@media screen and (min-width: 768px) {
}

@media screen and (max-width: 578px) {
}

@media (min-width: 579px) and (max-width: 1920px) {
}
</style>
