<template>
  <div class="contactUs">
    <!-- include Header -->
    <!-- <app-header></app-header> -->
    <app-header></app-header>
    <app-menu></app-menu>
    <div>
      <img
        src="../../assets/about.jpg"
        class="img-fluid"
        alt="Responsive image"
      />
    </div>
    <!-- About Us -->
    <div class="container">
      <h2 class="mt-5 text-center">About Us</h2>
      <p class="mt-5 mb-3 text-justify" style="font-size:20px; ">
        In today's day and age, being well-educated is not enough. Being
        well-trained and skilled for the job holds equal importance.
      </p>
      <p class="mb-5 text-justify" style="font-size:20px; ">
        <strong
          >We as an eduTech startup are focusing to play a key role in bridging
          a gap between company's expectations and student's
          aspirations.</strong
        >
        We are also providing a single-platform where students and professionals
        can access the open source software usecases to get the hands on
        learning.
      </p>
    </div>
    <!-- Services -->
    <div class="container">
      <h2 class="mt-5 text-center">What We Do?</h2>
      <p class="mt-5 mb-3 text-justify" style="font-size:20px; ">
        We provide Training on trending technologies with 1:1 mentorship.
        <strong>We offer the courses mentioned below </strong>
      </p>

      <!-- courses category -->
      <div class="row course-wrapper">
        <!-- pool courses -->
        <div class="mt-4 offset-lg-2 col-md-4 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Pool Courses</h5>
              <hr />
              <p class="card-text">
                Ever thought you can pool courses the same way you pool cabs ?
                Data-stats have your back! With pooled courses, any professional
                or college graduate can learn at minimal prices.
              </p>
            </div>
          </div>
        </div>
        <!-- job-ready courses -->
        <div class="mt-4 col-md-4 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Job ready courses</h5>
              <hr />
              <p class="card-text">
                Are you Job Ready? We have shortlisted some courses that you
                must absolutely pursue in order to be job ready in the
                post-covid economy.It is open for students, Professionals and
                Corporates.
              </p>
            </div>
          </div>
        </div>
        <!-- Advanced Courses -->
        <div class="mt-4 col-md-4 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Advanced Courses
              </h5>
              <hr />
              <p class="card-text">
                Looking for learning technologies in advance level at lesser
                cost in minimal time. This course is for you. It’s built for
                industry compliance and for your career advancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- redirect to careers page -->
    <h5 class="mt-4 mb-5 text-center">
      Want to be part of our team?
      <router-link to="/careers">JOIN US NOW</router-link>
    </h5>
    <!-- include footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "../shared/Header.vue";
import menu from "../shared/MenuBar.vue";

import footer from "../shared/footerDetails.vue";
export default {
  components: {
    "app-header": Header,
    "app-menu": menu,
    "app-footer": footer,
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
}
.container h2 {
  font-weight: 700;
  font-size: 37px;
  color: #ff6d3b;
}

.course-wrapper {
  margin-bottom: 4rem;
}

.card:hover {
  box-shadow: 0px 9px 10px -2px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 9px 10px -2px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 9px 10px -2px rgba(0, 0, 0, 0.7);
}
.card-title {
  font-weight: 700;
  font-size: 1.23rem;
  margin: 0 0 0.5rem 0;
  color: darkcyan;
  text-transform: uppercase;
}
.card-text {
  font-size: 16px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .card {
    height: 316px;
  }
}
</style>
