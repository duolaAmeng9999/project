<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        v-model.trim.lazy="searchName"
        placeholder="enter the name you search"
      />
      <button @click="handleSearch">Search</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "v-header",
  methods: {
    ...mapActions("usersAbout", ["getUsers"]),
    handleSearch() {
      this.getUsers();
    },
  },
  computed: {
    searchName: {
      get() {
        return this.$store.state.userName;
      },
      set(newValue) {
        this.$store.dispatch("usersAbout/getUserName", newValue);
      },
    },
  },
};
</script>

<style scoped>
</style>