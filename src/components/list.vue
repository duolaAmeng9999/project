<template>
  <div class="row">
    <div class="card" v-for="user in users" :key="user.id">
      <a :href="user.html_url">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
import { getUsers } from "../api/github";
import { mapGetters } from "vuex";
export default {
  name: "list",
  computed: {
    ...mapGetters("usersAbout", ["users"]),
  },
  mounted() {
    this.$bus.$on("handleSearch", async (userName) => {
      //接受userName 并发送请求
      const { items: users } = await getUsers(userName);
      this.users = users;
    });
  },
};
</script>

<style scoped>
</style>