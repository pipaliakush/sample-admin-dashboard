<template>
  <div>
    <b-navbar type="dark" variant="info" class="nav1">
      <button class="openbtn" @click="openNav" style="background-color:#9B30FF;">☰</button>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" class="black-clr">Home</b-nav-item>
        <b-nav-item href="#" class="black-clr">Quotes</b-nav-item>
        <b-nav-item href="#" class="black-clr">Admin Panel</b-nav-item>
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em style="color: black;">John Doe</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: false
    };
  },
  methods: {
    openNav() {
      if (!this.a) {
        document.getElementById('main').style.marginLeft = '250px';
        document.getElementById('mySidebar').style.width = '250px';
        this.a = !this.a;
      } else {
        document.getElementById('mySidebar').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
        this.a = !this.a;
      }
    }
  }
};
</script>

<style scoped>
.nav1 {
  background-color: #d3d3d3 !important;
}
.black-clr .nav-link {
  color: black;
}
</style>