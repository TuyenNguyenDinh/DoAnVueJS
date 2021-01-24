<template>
    <div>
        <div class="products-tab display-flex-center content-space-between">
            <ul class="nav nav-pills" style="padding-bottom: 12px;">
                <li class="nav-item">
                     <router-link class="nav-link active" data-toggle="tab" :to="{ name: 'hotproduct' }">Sản phẩm nổi bật</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'newproduct'}">Sản phẩm mới</router-link>
                </li>
            </ul>
        </div>
        <div class="products-tab-content">
                <router-view/>   
        </div>
    </div>
    
</template>
<script>
import axios from "axios";
export default {
    name: "productshot"
    ,
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
          thong_tin_cu_the: ""
        },
      ],
    };
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => (this.products = response.data))
      .catch((error) => console.log(error));
  },
}
</script>