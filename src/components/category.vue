<template>
  <div class="container">
    <ul class="breadcrumb">
      <li><a href="/">Home</a></li>
      <li><a>Category</a></li>
      <li class="active">{{ cate.name}}</li>
    </ul>
    <div id="wrap-inner" class="col-md-12">
      <div class="products">
        <div class="page-title">
          <h3>{{ products.name }}</h3>
          <span>Tìm thấy: {{ products.lenght }} sản phẩm</span>
        </div>
        <div class="product-list row">
          <div class="product-item col-md-3 col-sm-6 col-xs-12" v-for="product in products" :key="product.id">
            <a :href="'#'" ><img
                :src="'http://127.0.0.1:8000/upload/'+ product.anh"
                style="height: 100px"
                class="img-thumbnail"/></a>
            <p>
              <a href="#">{{ product.ten}}</a>
            </p>
            <p class="price">{{ Number(product.gia_sp).toLocaleString() }}₫</p>
            <div class="marsk">
            <router-link v-bind:to="'/details/' + product.id">Xem chi tiết</router-link>
            </div>
          </div>         
        </div>
      </div>
      <div id="pagination">
        
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "category",
  data() {
    return {
        cate:[{
            id:'',
            name:'',
        }],
      products: [
        {
          id: '',
          category_id: '',
          ten: '',
          anh: '',
          gia_sp: '',
          so_luong: '',
          thong_tin_cu_the: '',
        },
      ],
    };
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/categories/products/" +  this.$route.params.id)
      .then((response) => {
          this.products = response.data
          })
      axios
      .get("http://127.0.0.1:8000/api/categories/" +  this.$route.params.id)
      .then((response) => {(this.cate = response.data)})
  },
};
</script>