<template>
<div>
<div class="product-feature" v-for="product of products" :key="product.id">
    <div class="product-feature_item">
      <div class="item-img pull-left">
        <a href="">
          <img
            :src="'http://127.0.0.1/doan-laravel/public/upload/'+ product.anh"
            alt=""
            style="height: 70px; width: 50px"
          />
        </a>
      </div>
      <div class="item-content pull-right">
        <h3 class="item">
          <a
            :href="'/detail/' +product.id+ '.html'">
            {{product.ten}}</a
          >
        </h3>
        <div class="product-feature_price">
          <span>{{Number(product.gia_sp).toLocaleString()}}₫</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
    return {
      products: [
        {
            id: '',
            category_id: '',
            ten: '',
            anh: '',
            gia_sp: '',
            so_luong: '',
            thong_tin_cu_the:''
        },
      ],
    };
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/productsdesc")
      .then((response) => (this.products = response.data))
      .catch((error) => console.log(error));
    console.log("features mounted");
  },
};
</script>