<template>
  <div>
    <p class="mb-3" v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
    <div class="mb-3">
      <label for="fname">First Name</label>
      <b-form-input
        v-model="form.first_name"
        placeholder="Enter your first name"
      ></b-form-input>
    </div>
    <div class="mb-3">
      <label for="lname">Last Name</label>
      <b-form-input
        v-model="form.last_name"
        placeholder="Enter your last name"
      ></b-form-input>
    </div>
    <div class="mb-3">
      <label for="lname">Email ID</label>
      <b-form-input
        v-model="form.email"
        placeholder="Enter your email id"
      ></b-form-input>
    </div>
    <div class="mb-3">
      <b-button variant="primary" @click="onSubmit"
        ><b-spinner
          v-if="isLoading"
          variant="primary"
          class="text-light"
          small
          label="Small Spinner"
        ></b-spinner>
        &nbsp;Save</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "edit-modal",
  props: ["modalData", "modalId"],
  data() {
    return {
      isLoading: false,
      errors: [],
      unique: [],
      form: {
        first_name: "",
        last_name: "",
        email: ""
      }
    };
  },
  mounted() {
    this.form.first_name = this.modalData.first_name;
    this.form.last_name = this.modalData.last_name;
    this.form.email = this.modalData.email;
  },
  methods: {
    getAllUsers(data) {
      const postData = {
        page: 1
      };
      this.$store
        .dispatch("getAllUsers", postData)
        .then(() => {
          this.$toasted.success("User updated successfully", {
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
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
      return re.test(String(email).toLowerCase());
    },
    removeDuplications(data) {

      data.forEach(element => {
        if(!this.unique.includes(element)) {
          this.unique.push(element)
        }
      });
      return this.unique;
    },
    onSubmit() {
      this.errors.splice(0, this.errors.length, ...this.unique);
      this.removeDuplications(this.errors)

      if(this.form.first_name == '') {
        this.errors.push('First Name is required');
        return false;
      }
      if(this.form.last_name == '') {
        this.errors.push('Last Name is required');
        return false;
      }
      if(this.form.email == '') {
        this.errors.push('Email ID is required');
        return false;
      } else {
        if(!this.validateEmail(this.form.email)) {
          this.errors.push('Please enter valid Email ID');
          return false;
        }
      }


      this.isLoading = true;

      const postData = {
        id: this.modalData.id,
        form: this.form
      };
      this.$store.dispatch("editUser", postData).then(response => {
        this.isLoading = false;
        this.$bvModal.hide(this.modalId);
        this.getAllUsers();
      });
    }
  }
};
</script>
