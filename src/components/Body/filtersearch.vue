<template>
<div>
<div id="wrap-inner" class="col-md-12">
    <input class="form-control" type="text" v-model="search" placeholder="Search" />
    <div class="products">
        <h2>Tìm thấy  sản phẩm</h2>
        <div class="product-list row" >
            <div class="product-item col-md-3 col-sm-6 col-xs-12" v-for="info in result" :key="info.id">
                <a href="#"><img :src="'http://127.0.0.1:8000/upload/' + info.anh" style="height: 100px;" class="img-thumbnail"></a>
                <p><a href="#">{{ info.ten}}</a></p>
                <p class="price">{{ Number(info.gia_sp).toLocaleString() }}₫</p>
                <div class="marsk">
            <router-link v-bind:to="'details/' + info.id">Xem chi tiết</router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
   name: "filtersearch",
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
  computed:{
     result(){
      if(this.search){
      return this.infos.filter((item)=>{
        return this.search.toLowerCase().split(' ').every(v => item.ten.toLowerCase().includes(v))
      })
      }else{
        return this.infos;
      }
    }
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