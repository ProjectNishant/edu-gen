<template>
  <div id="events" class="container">
    <div class="row ">
      <div class="col-md-3 mb-5" v-for="data in eventData" :key="data.id">
        <div class="card h-100">
          <img class="card-img-top" :src="data.imageUrl" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title" style="font-size:1.125rem;">
              {{ data.eventName }}
            </h5>
            <p >{{ data.summary }}</p>
            <!-- <br /> -->
            <hr />
            <p
              class="card-text lg-3 font-weight-bold text-uppercase pl-3"
              id="design"
            >
              Hurry Up!! Last Date:
              <br />
              <small class="pl-3" id="date">{{ data.endDate }}</small>
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted"
              >and 88 others have already enrolled..</small
            >
            <button class="btn btn-outline-info btn-sm">View More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      eventData: [],
    };
  },

  mounted: function() {
    this.getEventInfo();
  },
  methods: {
    getEventInfo: function() {
      axios
        .get(
          this.$store.state.courseApi.getEventInfo
        )
        .then((res) => {
          this.eventData = res.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.card img {
  width: 100%;
}
.card-subtitle {
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
}

.card-title {
  font-weight: 700;
  font-size: 1.225rem;
  margin: 0 0 0.5rem 0;
  transition: 0.3s ease;
}

.card-title:hover {
  color: #ff7c4d;
  font-size: 1.125rem;
  line-height: 1.4;
}
.card-text {
  font-family: "Roboto";
  font-size: 0.75rem;
}
#design {
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  color: #323437;
}
#date {
  font-size: 14px;
  font-weight: 600;
  color: #ff7c4d;
}
.card-footer {
  display: inline-block;
}
.card-footer button {
  float: right;
}
</style>
