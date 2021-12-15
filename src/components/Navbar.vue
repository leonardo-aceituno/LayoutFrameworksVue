<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="px-5">
      <b-navbar-brand href="/"> #BootstrapVue</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item
            v-for="(item, index) in rutas"
            :key="index"
            :to="item.to"
            >{{ item.name }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rutas: [
        { name: "Home", to: "/" },
        { name: "Characters", to: "/characters" },
      ],
    };
  },
};
</script>
