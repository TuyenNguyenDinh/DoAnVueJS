<template>
  <nav class="navbar-header-mobile">
    <div class="navbar navbar-dark header-mobile">
      <div class="header-preload">
        <button class="header__button" id="btnNav" type="button">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <nav class="nav">
        <div class="nav__links">
          <a
            :href="'/category/' + info.id + '.html'"
            v-for="info in infos"
            :key="info.id"
            >{{ info.name }}</a
            >
        </div>
        <div class="nav__overlay"></div>
      </nav>
      <div class="header-mobile-logo">
        <a href="/">
          <img
            src="@/assets/image/logo.png"
            alt="shopA_Z"
            height="38px"
            width="144px"
          />
        </a>
      </div>
      <div class="header-preload1">
        <nav class="nav1">
          <div class="nav__links1">
            <!-- @guest -->
            <a href="login" class="nav__link1">Đăng nhập</a>
            <!-- @if (Route::has('register')) -->
            <a href="register" class="nav__link1" style="border-top: 1px solid"
              >Đăng ký</a
            >
          </div>
          <div class="nav__overlay1"></div>
        </nav>
        <button class="header__button1" id="btnNav1" type="button">
          <a class="header-mobile__right_btn" style="color: white">
            <i class="fa fa-user"></i>
          </a>
        </button>
      </div>
    </div>
    <div class="header-mobile-search">
      <div class="col-md-12">
        <form action="search" method="GET" class="full-width">
          <!-- Search form -->
          <input
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit" class="color-b9 font-size-18">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Headermobile",
  props: {
    msg: String,
  },
};
</script>