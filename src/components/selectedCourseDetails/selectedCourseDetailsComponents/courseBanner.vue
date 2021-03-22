<template>
  <div class="course_banner position-relative">
    <div class="text-white complete_banner">
      <div class="course_description h-100">
        <div class="container pt-5">
          <div class="row">
            <!--     -->
            <a
              class="col-md-6 col-12 d-flex d-md-none"
              :href="bannerDetails.brochureURL"
              target="_blank"
            >
              <a
                type="button"
                :href="bannerDetails.brochureURL"
                target="_blank"
                class="bg-white btn text-dark"
                ><i class="fa fa-download" aria-hidden="true"></i
                ><span>Download Course</span></a
              ></a
            >

            <div class="col-md-7 col-12">
              <div class="pt-3 row">
                <h4 class="ml-1 col-md-7 col-12 d-inline ">
                  {{ bannerDetails.courseName }}
                </h4>
                <a class="col-md-3 col-12 d-md-inline d-none">
                  <!-- :href="bannerDetails.brochureURL"
                    target="_blank" -->
                  <a
                    type="button"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                    class=" viewCourseBtn btn"
                    ><i class="fa fa-download" aria-hidden="true"></i>View
                    Course</a
                  ></a
                >
              </div>

              <div
                class="modal fade bd-example-modal-lg"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <!-- "http://www.africau.edu/images/default/sample.pdf#toolbar=0" -->
                    <iframe
                      @contextmenu="handle($event)"
                      @click.right="handlerr($event)"
                      :src="bannerDetails.brochureURL + '#toolbar=0'"
                      height="500px"
                    >
                    </iframe>
                  </div>
                </div>
              </div>

              <p class="pt-2 pl-3 row h2 ">
                <small v-if="bannerDetails.discount != 0">
                  <del> Rs {{ bannerDetails.price }}/month.</del>&nbsp;
                  {{ "Rs. " + afterDiscount }}/month
                </small>
                <small v-else>
                  Begin your master today by paying Rs
                  {{ bannerDetails.price }}/month.
                </small>
              </p>

              <div class="pt-3 row">
                <p class="pt-2 col-md-8">{{ bannerDetails.summary }}</p>
              </div>

              <!-- <div class="row">
                <p class="pt-2 col-md-8">{{ bannerDetails.summary }}</p>
              </div> -->

              <!-- <div class="pt-3 row">
                <div class="col-md-7">
                  <u
                    class="bookDemo"
                    v-if="!courseEnrolled"
                    href="#demo"
                    data-toggle="modal"
                  >
                    Click Here to Book your Free Demo Session
                  </u>
                </div>
              </div> -->

              <div class="pt-2 row">
                <div class="col-md-7 d-flex align-items-center">
                  <button
                    class=" btn apply_btn"
                    v-if="!courseEnrolled"
                    @click="enrollTheCourse()"
                  >
                    Enroll Course
                  </button>
                  <button
                    class=" btn apply_btn"
                    v-if="courseEnrolled"
                    @click="startLearning()"
                  >
                    Start Learning
                  </button>
                </div>
                <!-- intro video -->
                <div class="pt-2 col-md-5 col-12">
                  <!-- <h5>
                    <button
                      href="#intro"
                      data-toggle="modal"
                      class="bg-white btn btn-white play"
                      style="border-radius:50px; height:50px; width: 50px"
                    >
                      <a
                        ><i
                          class="pl-1 fa fa-play text-danger "
                          aria-hidden="true"
                        ></i
                      ></a></button
                    >&nbsp;&nbsp;&nbsp;Watch Intro video
                  </h5> -->

                  <!-- <div class="bs-example">
                    <div id="intro" class="modal fade">
                      <div class="modal-dialog modal-lg modal-dialog-centered ">
                        <div class="modal-content" style="">
                          <div class="modal-header">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              ×
                            </button>
                          </div>
                          <div class="modal-body"></div>
                        </div>
                      </div>
                    </div>
                  </div> -->

                  <!-- book demo starts -->

                  <!-- <div
                    class="modal fade "
                    id="demo"
                    tabindex="-1"
                    role="dialog"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title text-dark">
                            Book a FREE Demo Session
                          </h5>
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
                            {{ message }}
                          </div>

                          <i
                            class="pt-2 pl-3 text-dark fa fa-envelope-o position-absolute"
                            aria-hidden="true"
                          ></i>
                          <input
                            class="pl-5 form-control rounded-pill"
                            @blur="$v.email.$touch()"
                            v-model="email"
                            placeholder="Enter Email"
                          />

                          <p
                            class="pt-2 mb-0 text-danger"
                            v-if="!$v.email.required && err"
                          >
                            Email is required
                          </p>
                          <p
                            class="pt-2 mb-0 text-danger"
                            v-if="!$v.email.email && err"
                          >
                            Enter a valid email
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="text-white btn registerBtn"
                            @click="bookUser($v.$invalid)"
                            style="background:#ff6400"
                          >
                            Submit
                          </button>
                        
                        </div>
                      </div>
                    </div>
                  </div> -->

                  <!-- Book demo ends -->

                  <!--  -->
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <iframe
                id="intro1"
                width="100%"
                height="300px"
                v-if="true"
                :src="bannerDetails.introUrl"
                frameborder="0"
                allowfullscreen
              >
              </iframe>
            </div>

            <!-- <div class="pt-3 col-md-5">
              <button
                class=" btn apply_btn"
                v-if="!courseEnrolled"
                href="#demo"
                data-toggle="modal"
              >
                Book Free Demo Session
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="container desc_card">
      <div class="container card card_desc position-absolute">
        <div class="pt-4 card-body">
          <div class="row">
            <div class="col-md-2">
              <h4 class="text-center">{{ bannerDetails.noOfProjects }}</h4>
              <p class="text-center text-secondary">Numbers of projects</p>
            </div>
            <div class="col-md-3">
              <h4 class="text-center">
                {{ bannerDetails.durationOfCourse }}
              </h4>
              <p class="text-center text-secondary ">Duration</p>
            </div>

            <div class="pl-4 col-md-2">
              <h4>{{ getDate(bannerDetails.startDate) }}</h4>
              <p class="pl-4 text-secondary">Start Date</p>
            </div>

            <div class="col-md-3 ">
              <h4 class="text-center ">
                {{ bannerDetails.startCourseTime }} IST
              </h4>
              <p class="text-center text-secondary">Start Time</p>
            </div>

            <div class="col-md-2">
              <h4 class="text-center">{{ bannerDetails.noOfLiveSessions }}</h4>
              <p class="text-center text-secondary">Live Sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../../../main.js";
import axios from "axios";
import { required, email } from "vuelidate/lib/validators";
// import pdf from "vue-pdf";

// import $ from "jquery";
// import Razorpay from 'razorpay';

export default {
  data() {
    return {
      err: null,
      afterDiscount: null,
      courseId: null,
      courseEnrolled: false,
      enrolledCourses: [],
      email: null,
      // showSuccessMessage: false,
    };
  },
  validations: {
    email: {
      email,
      required,
    },
  },

  mounted() {
    if (!this.courseEnrolled) {
      setTimeout(() => {
        window.$("#demo").modal("toggle");
      }, 20000);
    }

    window.oncontextmenu = (e) => {
      e.preventDefault();
    };
  },
  components: {
    // pdf,
  },
  methods: {
    // bookUser(invalid) {
    //   console.log(invalid);
    //   if (invalid) {
    //     this.err = true;
    //   } else {
    //     this.err = false;
    //     axios
    //       .post(this.$store.state.courseApi.bookFreeDemo, { email: this.email })
    //       .then((res) => {
    //         console.log(res);
    //         if (res.data.code == 3) {
    //           this.message = res.data.message;
    //           this.showSuccessMessage = true;
    //           this.email = null;
    //           setTimeout(() => {
    //             this.showSuccessMessage = false;
    //           }, 3000);
    //         }
    //       });
    //   }
    // },
    handle(e) {
      console.log("naman");
      console.log(e);
    },
    checkEnrolledCourse() {
      console.log("naman");

      this.enrolledCourses.some((course) => {
        if (this.$route.params.id == course._id) {
          this.courseEnrolled = true;
          return true;
        } else {
          this.courseEnrolled = false;
        }
        console.log(this.courseEnrolled);
      });
    },
    getEnrolledCourses() {
      var val = localStorage.getItem("dataStatsAuthToken");

      axios({
        method: "GET",
        url: this.$store.state.courseApi.getEnrolledCourses,
        headers: { authorization: val },
      })
        .then((resData) => {
          // console.log(resData)
          this.enrolledCourses = resData.data.useCaseDetails;
          this.checkEnrolledCourse();
          // console.log(this.myCourses)
        })
        .catch((err) => {
          // console.log(err)
          err;
        });
    },

    startLearning() {
      this.$router.push("/learning/" + this.$route.params.id);
    },

    // addToCart(){
    //     this.cart=JSON.parse(localStorage.getItem("dataStatsCourseCart"))

    //     if(this.cart){

    //     this.cart.push(this.courseId)
    //     console.log(this.cart)
    //     localStorage.setItem("dataStatsCourseCart", JSON.stringify(this.cart))
    //     }

    //     else{
    //         this.cart=[]
    //         this.cart.push(this.courseId)
    //         localStorage.setItem("dataStatsCourseCart",JSON.stringify(this.cart))
    //     }

    //     console.log(JSON.parse(localStorage.getItem("dataStatsCourseCart")))
    // },
    enrollTheCourse() {
      var val = localStorage.getItem("dataStatsAuthToken");
      var razorOrderId = null;
      var razorPaymentId = null;
      var razorSignature = null;
      var id = this.courseId;

      //    console.log(val)
      if (val) {
        axios({
          mathod: "GET",
          url:
            "https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/pay/generateOrderIdForCourse/" +
            this.courseId,
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzODY2YmEwNjY2ODAxOTE5ZDYyYTciLCJpYXQiOjE1OTc0MDU2MTF9.FogZu9rrw7zKPRy8XDrpldZ05TbRchiwjniY48AsR08",
          },
        })
          .then((resData) => {
            console.log(resData);

            var options = {
              // key_id: "rzp_test_vhsfxnSM8g4PUf",
              // key_secret: "9dQE8o5zOK1gJYScj0U2kJrE",
              key_id: "rzp_test_vhsfxnSM8g4PUf",
              key_secret: "iy1sFV8tr5MhXHLarSK5zNYO",

              amount: resData.data.amount,
              currency: resData.data.currency,
              name: "Edugenix",
              description: "Payment for course",
              // "image":"https://www.data-stats.com/wp-content/uploads/2020/06/cropped-DS-3-1.png",
              // "image":"https://www.edugenix.co/img/logo.f46eb7da.png",
              order_id: resData.data.id,
              handler: function(response) {
                (razorOrderId = response.razorpay_order_id),
                  (razorPaymentId = response.razorpay_payment_id),
                  (razorSignature = response.razorpay_signature);

                axios
                  .post(
                    "https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/pay/addPaymentDetailsForCourse/" +
                      id,
                    {
                      razorOrderId: razorOrderId,
                      razorPaymentId: razorPaymentId,
                      razorSignature: razorSignature,
                    },
                    { headers: { Authorization: val } }
                  )
                  .then((res) => {
                    console.log(res);
                    setTimeout(() => {
                      this.courseEnrolled = true;
                      console.log(this.courseEnrolled);
                      //  this.$router.push('/my-course')
                      alert("You have enrolled the course successfully");
                      location.reload();
                    }, 0);
                    // this.startLearning()

                    console.log(this.courseEnrolled);
                    res;
                  });
              },
              prefill: {
                // "name":"naman",
                email: this.$store.state.userData.email,
              },
              theme: {
                color: "#4682B4",
              },
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
          })
          .catch((err) => {
            console.log(err);
            err;
          });
      } else {
        bus.$emit("register");
      }
    },

    handlerr(e) {
      e.preventDefault();
      console.log("namanaman");
    },

    getTimeDuration(starting, ending) {
      var startDate = starting[0] + starting[1];
      var endDate = ending[0] + ending[1];

      var startMonth = starting[3] + starting[4];
      var endMonth = ending[3] + ending[4];

      var startYear = starting[6] + starting[7] + starting[8] + starting[9];
      var endYear = ending[6] + ending[7] + ending[8] + ending[9];

      var newStartDate = new Date(
        startMonth + "/" + startDate + "/" + startYear
      );
      var newEndDate = new Date(endMonth + "/" + endDate + "/" + endYear);

      var difference_in_time = newEndDate.getTime() - newStartDate.getTime();

      var difference_in_days = difference_in_time / (1000 * 3600 * 24) + 1;

      // return (
      //   Math.floor(difference_in_days / 30) +
      //   " " +
      //   "Month" +
      //   "," +
      //   (difference_in_days % 30) +
      //   " " +
      //   "Days"
      // );

      var months = "";
      var days = "";
      if (Math.floor(difference_in_days / 30) != 0) {
        months = Math.floor(difference_in_days / 30) + " " + "Month,";
      }

      if (difference_in_days % 30 != 0) {
        days = (difference_in_days % 30) + " " + "Days";
      }

      // return Math.floor(difference_in_days/30)+' '+ 'Month'+',' + (difference_in_days % 30)+' '+  'Days'
      return months + days;
    },

    getDate(startDate) {
      var monthNames = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      var date = startDate[0] + startDate[1];
      var month = startDate[3] + startDate[4];
      var year = startDate[6] + startDate[7] + startDate[8] + startDate[9];
      var selectedMonthName = monthNames[parseInt(month - 1)];

      return selectedMonthName + " " + date + "," + year;
    },
  },
  props: {
    bannerDetails: {
      type: Object,
    },
  },
  updated() {
    console.log(this.bannerDetails);
  },
  created() {
    this.courseId = this.$route.params.id;
    console.log(this.bannerDetails);
    this.afterDiscount = this.bannerDetails.price - this.bannerDetails.discount;
    this.getEnrolledCourses();
  },
};
</script>

<style scoped>
.courseDetails {
  /* background:#C2DFFF; */
  color: black;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

.course_description {
  background-color: #0e0d0d;
}

.complete_banner {
  height: 95%;
}
.viewCourseBtn {
  color: white;
  background: #ff6400;
  transition: 1s all;
}
.bookDemo {
  color: white;
}

.bookDemo:hover {
  color: #f5f5f5;
}

.viewCourseBtn:hover {
  opacity: 0.8;
}

.card_desc {
  height: 120px;
  background: #c2dfff;
  opacity: 1;
  bottom: -26px;
}
.card_desc:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 1s all;
}

.apply_btn {
  width: 200px;
  background-color: #ff6400;
  color: white;
}

.apply_btn:hover {
  width: 200px;
  background-color: white;
  color: black;
  transition: 1s all;
}

@media (min-width: 576px) {
  .course_banner {
    height: 570px;
  }
}

@media (max-width: 576px) {
  .desc_card {
    display: none;
  }
}
</style>
