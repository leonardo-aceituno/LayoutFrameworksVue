<template>
  <!-- <b-col> -->
  <b-card
    :title="personaje.name"
    :img-src="personaje.image"
    :img-alt="personaje.name"
    img-top
  >
  </b-card>
  <!-- </b-col> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    personaje: { type: Object },
  },
};
</script>
