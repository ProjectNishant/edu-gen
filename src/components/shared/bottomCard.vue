<template>
  <div class="" v-if="!removeCard">
    <!-- <button class="w-full h-full bg-dark" style="opacity:0.5"></button> -->
    <div class="mb-5 mr-5 shadow-lg card">
      <div
        class="card-body"
        :class="{ 'd-none': !showCard, 'd-block': showCard }"
      >
        <h6 class="text-center">Attend Free Demo Session.</h6>
        <!-- {{ removeCard }} -->

        <div class="form-group">
          <label for="exampleInputEmail1">*</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            @blur="$v.email.$touch()"
            v-model="email"
          />
          <!-- <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          > -->
          <p class="pt-2 mb-0- text-danger" v-if="!$v.email.required && err">
            email is required.
          </p>
          <p class="pt-2 mb-0- text-danger" v-if="!$v.email.email && err">
            email is not valid.
          </p>
        </div>
        <div class="form-group">
          <!-- <label for="exampleInputEmail1"></label> -->
          <input
            type="number"
            @blur="$v.mobNo.$touch()"
            class="form-control"
            id="exampleInputEmail1"
            v-model="mobNo"
            aria-describedby="emailHelp"
            placeholder="Enter Mobile No."
          />
          <!-- <small id="emailHelp" class="form-text text-muted">Optional</small> -->
          <p class="pt-2 mb-0- text-danger" v-if="!$v.mobNo.minLength && err">
            Minimum 10 digit is required.
          </p>
        </div>

        <div class="dropdown show">
          <a
            class="btn btn-secondary btn-sm dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span v-if="!course"> Select Course</span>
            <span v-else>{{ course }}</span>
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" @click="course = 'Pool Courses'" href="#"
              >Pool Courses</a
            >

            <a
              class="dropdown-item"
              @click="course = 'Industry Ready Courses'"
              href="#"
              >Industry Ready Courses</a
            >
          </div>

          <p class="pt-2 mb-0- text-danger" v-if="!$v.course.required && err">
            Course is required
          </p>
        </div>
        <div class="mt-4 d-flex justify-content-center">
          <button
            type="button"
            class="text-white btn"
            style="background:#ff6400"
            @click="Submit($v.$invalid)"
          >
            <span v-if="!isLoading"> Submit</span>
            <div class="spinner-border text-light " v-else role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </button>
        </div>
      </div>

      <div
        @click="showCard = !showCard"
        class="py-2 text-center text-white w-100 bg-secondary btn rounded-bottom"
        :class="{ rounded: !showCard }"
        style="cursor:pointer"
      >
        Book a FREE Demo

        <i class="pl-2 fa fa-angle-up" v-if="!showCard" aria-hidden="true"></i>
        <i class="pl-2 fa fa-angle-down" v-else aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main.js";
import { required, email, minLength } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  data() {
    return {
      isLoading: false,
      showCard: false,
      removeCard: false,
      courseName: null,
      email: null,
      course: null,
      mobNo: null,
      err: false,
      message: null,
      showSuccessMessage: null,
    };
  },
  validations: {
    course: { required },
    err: false,
    email: { email, required },
    mobNo: { minLength: minLength(10) },
  },

  mounted() {
    bus.$on("courseName", (val) => {
      console.log("nman");
      console.log(val, "card");
      this.courseName = val;
      console.log(this.courseName);
    });
  },
  methods: {
    Submit(invalid) {
      console.log(invalid);

      if (invalid) {
        this.err = true;
        console.log(this.err);
      } else {
        this.err = false;

        console.log("naman");
        this.isLoading = true;

        axios
          .post(this.$store.state.courseApi.bookFreeDemo, {
            email: this.email,
            courseName: this.course,
            mobNo: this.mobNo,
          })
          .then((res) => {
            console.log(res);
            this.isLoading = false;
            if (res.data.code == 3) {
              this.message = res.data.message;
              this.showSuccessMessage = true;
              this.email = null;
              this.courseName = null;
              this.mobNo = null;

              this.$swal({
                text: "Your Demo has been booked successfully!",
                icon: "success",
              }).then(() => {
                console.log("this.$ne");

                this.removeCard = true;
                // this.$nextTick(() => {
                //   this.removeCard = true;
                //   console.log(this.removeCard);
                // });

                setImmediate(() => {
                  this.removeCard = true;
                  console.log(this.removeCard);
                });
              });
              // setTimeout(() => {
              //   this.showSuccessMessage = false;
              // }, 3000);
            }
          });
      }
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  /* .card {
    width: 24rem;
  } */
}

.btn {
  cursor: pointer;
}

.card {
  width: 300px;
}

.hideCard {
  display: none;
}

.showCard {
  display: block;
}
</style>
