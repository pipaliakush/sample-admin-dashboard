<template>
  <div>
    <div id="mySidebar" class="sidebar">
      <h4>Qbook Admin Panel</h4>
      <a href="javascript:void(0)" class="text-prpl">
        <i class="fa fa-home" aria-hidden="true"></i>
        Dashboard
      </a>
    </div>

    <div id="main">
      <Navbar />
      <Users class="m-3" />
      <!-- <div class="p-3 row nomargin">
        <Cards name="OEMS" val="12" icon="fa fa-briefcase fa-3x" />
        <Cards name="PRODUCT TYPES" val="6" icon="fa fa-tag fa-3x" />
        <Cards name="PRODUCTS" val="742" icon="fa fa-list fa-3x" />
        <Cards name="ARCHIVED PRODUCTS" val="27" icon="fa fa-recycle fa-3x" />
      </div>
      <div class="pb-3 pr-3 pl-3 row nomargin">
        <BarChart :maxValue="30" class="p-3 col-lg-6 col-md-12 col-sm-12" />
        <Calender class="p-3 col-lg-6 col-md-6 col-sm-12" />
      </div> -->
    </div>
  </div>
</template>

<script>
import Navbar from "@/layouts/Navbar/index.vue";
// import Cards from "@/components/Dashboard/Cards.vue";
import Users from "@/components/users/index.vue";
// import Calender from "@/components/Dashboard/Calender.vue";

export default {
  components: {
    Navbar,
    Users
  },
  async asyncData({ store, query, app, redirect, route }) {
    // store.commit("isLoading", true);
    await store
      .dispatch("getAllUsers", query)
      .then(() => {
        // store.commit("isLoading", false);
      })
      .catch(() => {
        // store.commit("isLoading", false);
      });
  },
  head() {
    return {
      title: "Dashboard - Sample Demo"
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

/* here */
body {
  font-family: "Lato", sans-serif;
}

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #dcdcdc;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  white-space: nowrap;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  display: block;
  transition: 0.3s;
  white-space: nowrap;
}

.sidebar a:hover {
  color: #9b30ff;
  white-space: nowrap;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  font-size: 22px;
}

.sidebar h4 {
  margin-top: -42px;
  margin-left: 15px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  /* padding: 10px 15px; */
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

#main {
  transition: margin-left 0.5s;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}

.nomargin {
  margin-right: 0px !important;
}

.text-prpl {
  color: #9b30ff;
}

.text-prpl a:hover {
  color: #9b30ff;
}
</style>
