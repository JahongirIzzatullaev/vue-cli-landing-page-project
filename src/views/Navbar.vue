<template>
  <div class="navbar">
    <nav :class="{activenav:show}">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul>
              <li class="navbar-items">
                <a href="#" class="logo"><img src="../assets/images/logo-final.svg" alt=""></a>
              </li>
              <li class="navbar-items">
                <a href="#" class="item-right">about</a>
              </li>
              <li class="navbar-items">
                <a href="#" class="item-right">blog</a>
              </li>
              <li class="navbar-items">
                <a href="#" class="item-right">our goal</a>
              </li>
              <li class="navbar-items">
                <a href="#" class="item-right">our team</a>
              </li>
              <li class="navbar-items">
                <a href="#" class="item-right">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>

export default {
  name: "Navbar", data() {
    return {
      show: false
    }
  }, mounted() {
    setTimeout(() => {
      this.show = true
    }, 6500)
  }

}

</script>
<style lang="scss">
.navbar nav {
  opacity: 0;
  transition: all 1s ease;
}

.navbar nav.activenav {
  opacity: 1;
}
</style>
