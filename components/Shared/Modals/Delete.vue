<template>
  <div>
    <p class="mb-3">
      Are you sure you want to delete {{ modalData.first_name }}
      {{ modalData.last_name }}
    </p>
    <div class="mb-3">
      <b-button variant="danger" @click="onSubmit"
        ><b-spinner
          v-if="isLoading"
          variant="primary"
          class="text-light"
          small
          label="Small Spinner"
        ></b-spinner>
        &nbsp;Delete</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "delete-modal",
  props: ["modalId", "modalData"],
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    getAllUsers(data) {
      const postData = {
        page: 1
      };
      this.$store
        .dispatch("getAllUsers", postData)
        .then(() => {
          this.$toasted.success("User deleted successfully", {
            duration: 3000,
            position: "top-right",
            theme: "bubble"
          });
        })
        .catch(() => {
          this.$toasted.danger("Something went wrong", {
            duration: 3000,
            position: "top-right",
            theme: "bubble"
          });
        });
    },
    onSubmit() {
      this.isLoading = true;

      this.$store.dispatch("deleteUser", this.modalData.id).then(response => {
        this.isLoading = false;
        this.$bvModal.hide(this.modalId);
        this.getAllUsers();
      });
    }
  }
};
</script>
