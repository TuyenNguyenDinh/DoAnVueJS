<template>
  <div class="container">
    <div id="wrap-inner" class="col-md-10" style="padding-top: 26px">
      <div id="row list-product-info">
        <div class="clearfix"></div>
        <h3>{{ products.ten }}</h3>
        <div class="row">
          <div
            id="product-img"
            class="col-xs-12 col-sm-12 col-md-5 text-center"
          >
            <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
              <img
                class="d-block w-100"
                src="@/assets/image/samsung.jpg"
                alt="First slide"
              />
              <img
                class="d-block w-100"
                src="@/assets/image/samsung1.jpg"
                alt="Second slide"
              />
              <img
                class="d-block w-100"
                :src="'http://127.0.0.1:8000/upload/' + products.anh"
                alt="Third slide"
              />
            </VueSlickCarousel>
          </div>
          <div id="product-details" class="col-xs-12 col-sm-12 col-md-6">
            <p>
              Giá:
              <span class="price"
                >{{ Number(products.gia_sp).toLocaleString() }}₫</span
              >
            </p>
            <p>Bảo hành: 1 đổi 1 trong 12 tháng</p>
            <p>Phụ kiện: Dây cáp sạc, tai nghe</p>
            <p>Tình trạng: Máy mới 100%</p>
            <p>
              Khuyến mại: Hỗ trợ trả góp 0% dành cho các chủ thẻ Ngân hàng
              Sacombank
            </p>
            <p>Còn hàng: Còn {{ products.so_luong }} sản phẩm</p>
            <p class="add-cart text-center">
              <a href="#">Đặt hàng online</a>
            </p>
          </div>
        </div>
      </div>
      <div id="product-detail">
        <h3>Chi tiết sản phẩm</h3>
        <p class="text-justify" v-html="products.thong_tin_cu_the">
          {{ rawInfo }}
        </p>
      </div>
      <div id="comment">
        <h3>Bình luận</h3>
        <div class="comment">
          <form>
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                required
                type="email"
                class="form-control"
                id="email"
                name="email"
              />
            </div>
            <div class="form-group">
              <label for="name">Tên:</label>
              <input
                required
                type="text"
                class="form-control"
                id="name"
                name="name"
              />
            </div>
            <div class="form-group">
              <label for="cm">Bình luận:</label>
              <textarea
                required
                rows="10"
                id="cm"
                class="form-control"
                name="content"
              ></textarea>
            </div>
            <div class="form-group text-right">
              <button type="submit" class="btn btn-send btn-default">
                Gửi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "details",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      rawInfo: null,
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
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
      },
    };
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/products/" + this.$route.params.id)
      .then((response) => (this.products = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
<style scoped>
.add-cart {
  background: -webkit-linear-gradient(#fe0000, #d10000);
}
</style>