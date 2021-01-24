<template>
  <div class="wrapp">
    <nav class="navbar-header">
      <div class="header">
        <div class="hidden-sm hidden-xs header">
          <div class="head-main backgound-primary">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="line">
                    <logo></logo>
                    <menuCate></menuCate>
                  </div>
                </div>
                <div class="col-md-4">
                  <search></search>
                </div>
                <div class="col-md-4">
                  <!-- cart -->
                  <cart></cart>
                  <!-- cart -->
                  <div class="header-account main_account pull-right">
                    <router-link :to="{ name: 'login' }" class="btn-sign"
                      >Đăng nhập</router-link
                    >
                    <router-link
                      :to="{ name: 'register' }"
                      class="btn btn-login btn-secondary"
                      >Đăng ký</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Mobile -->
  </div>
</template>

<script>

import search from "./search"
import logo from "./logo";
import menuCate from "./menulist";
import cart from "./card";
export default {
  name: "Header",
  components:{
    search,
    logo,
    menuCate,
    cart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
