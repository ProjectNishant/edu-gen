<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <div class="container my-5">
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
    </div>

    <h4 class="text-center" style="color:#ff6400">OUR TEAM</h4>

    <app-member></app-member>
  </div>
</template>

<script>
import header from "../shared/Header.vue";
import menu from "../shared/MenuBar.vue";
import member from ".//member.vue";
export default {
  components: {
    "app-header": header,
    "app-menu": menu,
    "app-member": member,
  },
};
</script>

<style scoped></style>
