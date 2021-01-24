<template>
  <div>
    <div id="hot-products">
      <h3>Sản phẩm</h3>
      <div class="product-list row">
        <div
          class="product-item col-md-3 col-sm-6 col-xs-12"
          v-for="product of products"
          :key="product.id"
        >
          <a href="#"
            ><img
              :src="
                'http://127.0.0.1:8000/upload/' + product.anh
              "
              style="height: 100px"
              class="img-thumbnail"
          /></a>
          <p>
            <a href="#">{{ product.ten }}</a>
          </p>
          <p class="price">{{ Number(product.gia_sp).toLocaleString() }}₫</p>
          <div class="marsk">
            <router-link v-bind:to="'details/' + product.id">Xem chi tiết</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "productnew",
  data() {
    return {
      products: [
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

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/productsnew")
      .then((response) => (this.products = response.data))
      .catch((error) => console.log(error));
    console.log("Menu mounted");
  },
};
</script>