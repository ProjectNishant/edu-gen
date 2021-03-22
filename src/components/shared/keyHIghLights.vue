<template>
  <div class="" style="background:#f5f5f5">
    <div class="container mt-2 ">
      <h2 class="mt-5 text-center text-black">Why Choose Us?</h2>

      <div class="mt-5 mb-5 row ">
        <div class="mt-4 d-flex justify-content-center col-6 col-md-4">
          <div
            class="ml-md-5 mr-md-5 shadow d-flex text-center align-items-center frame"
          >
            <h5 class="mx-1">Live & Affordable Sessions</h5>
          </div>
        </div>
        <div class="mt-4 d-flex justify-content-center col-6 col-md-4">
          <div
            class="ml-md-5 mr-md-5 text-center shadow frame d-flex align-items-center"
          >
            <h5>Project based Learning</h5>
          </div>
        </div>
        <div class="mt-4 d-flex justify-content-center col-6 col-md-4">
          <div
            class="ml-md-5 mr-md-5 shadow frame d-flex justify-content-center align-items-center"
          >
            <h5 class="text-center w-full">Ask Q&A ?</h5>
          </div>
        </div>
        <div class="mt-5 col-6 col-md-4 d-flex justify-content-center">
          <div
            class="ml-md-5 mr-md-5 shadow frame d-flex text-center align-items-center"
          >
            <h5>Earn Monetory Rewards</h5>
          </div>
        </div>
        <div class="mt-5 col-6 d-flex justify-content-center col-md-4">
          <div
            class="ml-md-5 mr-md-5 shadow frame d-flex justify-content-center align-items-center"
          >
            <h5>1-1 Mentorship</h5>
          </div>
        </div>
        <div class="mt-5 col-6 col-md-4 d-flex justify-content-center">
          <div
            class="ml-md-5 mr-md-5  text-center d-flex justify-content-center shadow frame d-flex align-items-center"
          >
            <h5>Interview Questions</h5>
          </div>
        </div>
      </div>

      <p style="color:#ff6400" class=" text-center">
        * 7 Days Refund Policy without any questions asked.
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.servicesImage {
  margin-top: 50px;
  background-image: url("../../assets/a3.jpg");
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
