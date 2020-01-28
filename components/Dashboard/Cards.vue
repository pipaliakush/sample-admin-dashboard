<template>
  <div class="col-lg-3 col-md-3 col-sm-6 p-2">
    <b-card id="example2">
      {{ name }}
      <div class="row">
        <div class="col">
          <h1>{{ val }}</h1>
        </div>
        <div class="col text-center">
          <i :class="icon" aria-hidden="true" style="color:#9B30FF;"></i>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    val: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
/* #example2 {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #888888;
} */
</style>