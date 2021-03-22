<template>
  <div class="">
    <div class="container ">
      <div class=" w-100">
        <!-- desktop view start -->
        <div class="row">
          <div class="col-9">
            <h3
              class="pt-3 d-none d-md-block"
              style="color:#ff6400;  font-family: Times New Roman, Times, serif;"
            >
              {{ $route.params.name }}<br />
            </h3>
            <h5
              class="d-block d-md-none "
              style="color:#ff6400;font-family: Times New Roman, Times, serif;"
            >
              {{ $route.params.name }}<br />
            </h5>
          </div>
        </div>

        <hr />
        <div class="pb-5 mt-2 w-100 position-relative desktop_view">
          <div class="row">
            <div
              class="col-md-4"
              v-for="(cardDetail, index) in courses"
              :key="index"
            >
              <div class="w-100 d-flex justify-content-center">
                <div
                  class="my-5 bg-white card position-relative programCard"
                  @click="$router.push(`/courseDetails/${cardDetail._id}`)"
                  style="cursor:pointer"
                >
                  <div class="cardImage">
                    <img
                      class="card-img-top"
                      :src="cardDetail.url"
                      alt="Card image cap"
                    />
                  </div>

                  <div class="pt-2 card decsCard">
                    <p class="position-absolute text-dark "></p>

                    <h6 class="pt-1 pl-4 row">
                      <span class="pr-2">
                        <strong>{{ cardDetail.courseName }} </strong></span
                      >

                      <span
                        class="text-white badge"
                        style="background-color:#ff6400"
                        >New</span
                      >
                    </h6>

                    <div class="pl-2 row no-gutters text-secondary">
                      <span class="col-md-9">
                        <i
                          class="pt-1 fa fa-hourglass-o"
                          aria-hidden="true"
                        ></i>
                        <span class="pl-1"
                          >Duration:
                          {{
                            getTimeDuration(
                              cardDetail.startDate,
                              cardDetail.endDate
                            )
                          }}</span
                        >
                      </span>
                      <span class="col-md-3 d-flex justify-content-center">
                        <app-wishlist :courseId="cardDetail._id"></app-wishlist>
                      </span>
                    </div>

                    <div class="pb-3 pl-4 row">
                      <p class="text-secondary">
                        <i class="pt-1 fa fa-calendar-check-o"></i>
                        <span class="pl-1 ">Start From: </span>
                      </p>
                      <p class="pl-1 text-primary font-weight-bold">
                        {{ getDate(cardDetail.startDate) }}
                      </p>
                    </div>
                  </div>

                  <div class="pt-5 card-body">
                    <p
                      class="pl-1 pr-3 row decription card-text text-secondary"
                    >
                      {{ cardDetail.summary | truncate(40) }}
                    </p>
                    <h6
                      class="pt-4 d-flex text-primary justify-content-end"
                      v-if="cardDetail.discount != 0"
                    >
                      <strong
                        >Rs.
                        {{ cardDetail.price - cardDetail.discount }} </strong
                      ><del class="pl-3">Rs. {{ cardDetail.price }}</del>
                    </h6>
                    <h6
                      class="pt-4 d-flex text-primary justify-content-end"
                      v-if="cardDetail.discount == 0"
                    >
                      <strong>Rs. {{ cardDetail.price }} </strong>
                    </h6>

                    <div class="float-left text-primary ">
                      <img
                        src="../../assets/logo.png"
                        width="44px"
                        height="auto"
                        alt="Card image cap "
                      />
                      <!-- <strong>      Edugenix</strong> -->
                    </div>

                    <p class="float-right pt-2 font-weight-bold">
                      <a
                        href="#"
                        style="color:#ff6400"
                        @click="showCourseDetails(index)"
                      >
                        View Course
                        <i
                          class="pl-3 fa fa-long-arrow-right"
                          style="color:#ff6400"
                          aria-hidden="true"
                        ></i
                      ></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Vue from 'vue';
// import { stringify } from 'querystring';
// import { type } from 'os'
// import spinner from './spinner.vue'
import wishlist from "./wishList.vue";
// import {bus} from '../../main.js'

// const axios = require('axios');

export default {
  data: function() {
    return {
      addColor: false,
      fav: [],
      // cardDetailsSets:[],+
      // isCardDataFetched:false,
      slickOptions: {
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 3,
        autoplay: false,
        arrows: false,
        centerPadding: "60px",

        infinite: false,
        addedToWishList: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,

              infinite: false,
              dots: true,
              centerMode: true,
              variableWidth: true,
            },
          },
        ],
      },
    };
  },

  props: {
    type: {
      type: String,
    },
    courses: {
      type: Array,
    },
    cardDetailsSets: {
      // type:Array
    },
    courseType: {
      // type:Array
    },
    isCardDataFetched: {
      type: Boolean,
      default: false,
    },
    index: {
      default: null,
    },
  },

  components: {
    // 'app-spinner':spinner,
    "app-wishlist": wishlist,
  },

  methods: {
    // card slider methods
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // card slider methods ends

    // numberOfCard(index){
    //     var totalNumberOfCard=index+1;
    //     if(totalNumberOfCard<=2){
    //         return true;
    //     }
    //     else{
    //         return false
    //     }
    // },
    showCourseDetails(index) {
      var id = this.cardDetailsSets[index]._id;

      this.$router.push("/courseDetails/" + id);
    },
    getDate(startDate) {
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var date = startDate[0] + startDate[1];
      var month = startDate[3] + startDate[4];
      var year = startDate[6] + startDate[7] + startDate[8] + startDate[9];
      var selectedMonthName = monthNames[parseInt(month) - 1];

      return selectedMonthName + " " + date + "," + year;
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

      return (
        Math.floor(difference_in_days / 30) +
        " " +
        "Month" +
        "," +
        (difference_in_days % 30) +
        " " +
        "Days"
      );
    },
  },

  mounted: function() {
    // console.log(this.courseType)
    console.log(this.cardDetailsSets);
    // console.log(this.isCardDataFetched)

    if (this.index == 1) {
      this.addColor = true;
    }
  },
};
</script>

<style scoped>
.card:hover {
  transform: scale(1.01);
  transition: 0.5s ease-in;
  transition: 0.5s ease-out;
}
.card {
}
.decription {
  padding-top: 55px;
  font-size: 14px;
}
.bedge {
  border-radius: 2px;
  font-size: 65%;
  line-height: 15px;
}

/* .fa-arrow-circle-right{
             right: -10px;
             top: 50%;
             z-index: 9;
     }

      .fa-arrow-circle-left{
           left: -10px;
            top: 50%;
            z-index: 9;
       } */

.viewBtn {
  background: #ff6400;
  cursor: pointer;

  color: white;
}
.viewBtn:hover {
  opacity: 0.8;
}

.btnrt {
  cursor: pointer;
  position: absolute;
  left: -30px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: 50%;
  z-index: 9;
  height: 50px;
  width: 50px;
}

.btnlt {
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  right: -30px;
  height: 50px;
  width: 50px;
  top: 50%;
  z-index: 9;
}

.programCard {
  height: 400px;
  width: 300px;
  /* left:20px; */
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.poolAndAdvance {
  background-color: #f0f0f0;
}

.card-img-top {
  height: 160px;
  width: 100%;
  border-radius: 10px;
}
.fa {
  color: black;
  border-radius: 50px;
}
.other {
  /* background-image: linear-gradient(155deg, #4661db, #4fb4c9) */
  background-color: #f5f5f5;
}

.decsCard {
  box-shadow: 0px 4px 16px rgba(189, 189, 189, 0.24);
  border-radius: 10px;
  margin-left: 8px;
  justify-content: center;
  position: absolute;
  top: 120px;
  height: 135px;
  width: 95%;
}
u {
  cursor: pointer;
}
p {
  margin-bottom: 0rem;
  padding: 0;
  margin: 0;
}

@media (max-width: 576px) {
  .Mobile_View {
    display: inline;
  }
  .desktop_view {
    /* display: none; */
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .desktop_view {
    display: block;
  }
  .Mobile_View {
    display: none;
  }
}
</style>
