<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <h6>About us</h6>
      <p class="text-justify">
        Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help
        the upcoming programmers with the code. Scanfcode focuses on providing
        the most efficient code or snippets as the code wants to be simple. We
        will help programmers build up concepts in different programming
        languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript,
        PHP, Android, SQL and Algorithm.
      </p>
    </div>
    <div class="col-xs-6 col-md-3">
      <h6>Categories</h6>
      <ul class="footer-links">
        <li v-for="info in infos"
            :key="info.id">
          <a
            :href="'/category/' + info.id + '.html'"
            >{{ info.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="col-xs-6 col-md-3">
      <h6>Quick Links</h6>
      <ul class="footer-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Contribute</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Sitemap</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "footer",
  data() {
    return {
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

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then((response) => (this.infos = response.data))
      .catch((error) => console.log(error));
    console.log("Menu mounted");
  },
};
</script>