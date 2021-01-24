<template>
    <div class="container">
        <div class="row">
          <div class="col-md-9">
            <Slide></Slide>
          </div>
          <div class="col-lg-3 col-md-12 col-sm-12">
            <Features></Features>
          </div>
          <div id="wrap-inner">
            <div class="products">
              <Products></Products>
            </div>
            <Boxsearch></Boxsearch>
          </div>
        </div>
      </div>
</template>
<script>
import Slide from "./slide";
import Features from "./features";
import Products from "./Product/products";
import Boxsearch from "./box";
export default {
    name: "body",
    components:{
        Slide,
        Features,
        Products,
        Boxsearch
    }
}
</script>