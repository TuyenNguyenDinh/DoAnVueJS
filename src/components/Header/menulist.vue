<template>
  <div class="col-nav nav-menu">
    <button class="dropbtn btn btn-secondary" type="buttom">
      <i class="fas fa-bars"></i>
      Danh mục
    </button>
    <div class="dropdown-content">
      <router-link
        class="nav-link active"
        data-toggle="tab"
        v-for="info in infos"
        :key="info.id"
        v-bind:to="'/category/' + info.id"
        >{{ info.name }}</router-link
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "menulist",
  data() {
    return {
      search: null,
      infos: [
        {
          id: "",
          name: "",
        },
      ],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then((response) => (this.infos = response.data))
      .catch((error) => console.log(error));
    console.log("Menu mounted");
  },
};
</script>