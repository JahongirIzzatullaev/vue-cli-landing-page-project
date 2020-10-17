<template>
  <div id="app">
    <loading-screen :is-loading="isLoading"></loading-screen>
<!--    <div id="main" :style="{ backgroundImage: `url(${BackImg})` }">-->
      <Navbar/>
      <Main/>
<!--    </div>-->
  </div>
</template>

<script>
import Loader from "./components/Loader"
import Navbar from "@/views/Navbar";
import Main from "@/views/Main"
// import BackImg from "@/assets/images/bg-img.jpg"
export default {
  components: {
    'loading-screen': Loader, Navbar, Main
  },
  data() {
    return {
      isLoading: true
      // BackImg
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 5000)
  }
}
</script>

<style lang="scss">
@import "src/assets/css/style";

</style>
