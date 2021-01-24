<template>
  <div class="logo col-logo">
    <router-link :to="{ name: 'body', name: 'hotproduct' }">
      <img
        src="@/assets/image/logo.png"
        alt="shopA_Z"
        height="38px"
        width="144px"
      />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "logo",
};
</script>