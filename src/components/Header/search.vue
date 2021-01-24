<template>
  <div>
    <div class="search">
      <form action="/search/" role="search" method="GET" class="full-width">
        <!-- Search form -->
        <input
          class="form-control"
          type="text"
          name="result"
          v-model="search"
          placeholder="Nhập từ khóa..."
          aria-label="Search"
        />
        <router-link type="button" v-bind:to="'/search'">
          <button type="button" class="color-b9 font-size-18">
            <i class="fa fa-search"></i>
          </button>
        </router-link>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      search: null,
      infos: [
        {
          id: "",
          category_id: "",
          ten: "",
          anh: "",
          gia_sp: "",
          so_luong: "",
          thong_tin_cu_the: "",
        },
      ],
    };
  },
  computed: {
    result() {
      if (this.search) {
        return this.infos.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.ten.toLowerCase().includes(v));
        });
      } else {
        return this.infos;
      }
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => (this.infos = response.data))
      .catch((error) => console.log(error));
    console.log("Menu mounted");
  },
};
</script>