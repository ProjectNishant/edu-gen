<template>
  <div class="service">
    <app-header></app-header>
    <app-menu></app-menu>

    <div class=" d-flex justify-content-center">
      <!-- <div class="image-wrapper servicesImage ">
        <h1 class="text-white align-self-center">Our Services</h1>
      </div> -->
      <img src="../../assets/service.jpg" class="h-auto w-100" />
    </div>

    <div class="container">
      <p class="mt-5 mb-3 text-justify" style="">
        In today's day and age, being well-educated is not enough. Being
        well-trained and skilled for the job holds equal importance.
      </p>
      <p class="mb-5 text-justify" style="font-size:20px; ">
        We as an eduTech startup are focusing to play a key role in bridging a
        gap between company's expectations and student's aspirations. We are
        also providing a single-platform where students and professionals can
        access the open source software usecases to get the hands on learning.
      </p>

      <p style="font-size:20px">
        <strong style="color:#ff6400">Mision:</strong> <br />
        We are passionate about delivering the project based trainings. Our
        mission is to help the candidates to acquire the skills in a short span
        of time.<br />
        <br /><strong style="color:#ff6400">Vision:</strong> <br />Prepare the
        course curriculum in such a way that candidates can be well-trained in
        the particular technologies and ready for the industry projects in a
        short span of time.
      </p>
      <hr />
    </div>
    <!-- Our Services content -->
    <div class="bg-secondary">
      <div class="container mt-2 ">
        <h2 class="mt-5 text-center text-white">Why Choose Us?</h2>

        <div class="mt-5 mb-5 row ">
          <div class="mt-4 col-md-4">
            <div
              class="ml-5 mr-5 text-center shadow d-flex align-items-center frame"
            >
              <h5 class="mx-1">Live & Affordable Sessions</h5>
            </div>
          </div>
          <div class="mt-4 col-md-4">
            <div
              class="ml-5 mr-5 text-center shadow frame d-flex align-items-center"
            >
              <h5>Project based Learning</h5>
            </div>
          </div>
          <div class="mt-4 col-md-4">
            <div
              class="ml-5 mr-5 shadow frame d-flex justify-content-center align-items-center"
            >
              <h5 class="w-full text-center">Ask Q&A ?</h5>
            </div>
          </div>
          <div class="mt-5 col-md-4">
            <div
              class="ml-5 mr-5 text-center shadow frame d-flex align-items-center"
            >
              <h5>Earn Monetory Rewards</h5>
            </div>
          </div>
          <div class="mt-5 col-md-4">
            <div
              class="ml-5 mr-5 shadow frame d-flex justify-content-center align-items-center"
            >
              <h5>1-1 Mentorship</h5>
            </div>
          </div>
          <div class="mt-5 col-md-4">
            <div
              class="ml-5 mr-5 text-center shadow frame d-flex align-items-center"
            >
              <h5>Interview Questions</h5>
            </div>
          </div>
        </div>

        <p class="text-center text-white">
          * 7 Days Refund Policy without any questions asked.
        </p>
        <hr />
      </div>
    </div>

    <!-- courses we offer -->
    <div class="container">
      <h2 class="mt-5 text-center">Courses We Offer</h2>
      <div class="mt-5 mb-5 row course-wrapper">
        <!-- pool courses -->
        <div class="mt-4 offset-lg-2 col-md-4 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title stdColor">Pool Courses</h5>
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
              <h5 class="card-title stdColor">
                Job Ready Courses
              </h5>
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
              <h5 class="card-title stdColor">
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
    <!-- Footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
// import Header from "./Header.vue";
// import Footer from "./Footer.vue";
import footer from "../shared/footerDetails.vue";
import Header from "../shared/Header.vue";
import menu from "../shared/MenuBar.vue";
export default {
  components: {
    // appHeader: Header,
    // appFooter: Footer,
    "app-header": Header,
    "app-menu": menu,
    "app-footer": footer,
  },
};
</script>

<style scoped>
.servicesImage {
  margin-top: 50px;
  background-image: url("../../assets/service.jpg");
  height: 350px;
  display: flex;
  justify-content: center;
  width: 90%;
}
* {
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
}
.stdColor {
  color: #ff6400;
}
.container h2 {
  font-weight: 600;
  font-size: 37px;
  /* color: #ff6d3b; */
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
.card-title:hover {
  font-style: italic;
}
.card-text {
  font-size: 16px;
}

.frame {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: white;
}

.frame:hover {
  background: #f5f5f5;
}
.zoomout img {
  height: 160px;
  width: 160px;
  -webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -ms-transition: all 2s ease;
  transition: all 2s ease;
}
.zoomout img:hover {
  width: 170px;
  height: 170px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .card {
    height: 316px;
  }
}
</style>
