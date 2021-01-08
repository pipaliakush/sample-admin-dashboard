<template>
  <div class="overflow-auto">
    <!-- {{ userDetails }} -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in userDetails.data">
          <td><b-avatar variant="info" :src="result.avatar"></b-avatar></td>
          <th>{{ result.id }}</th>
          <td>{{ result.first_name }}</td>
          <td>{{ result.last_name }}</td>
          <td>{{ result.email }}</td>
          <td>
            <b-button @click="showModalEdit(result)" size="sm" variant="primary"
              >Edit</b-button
            >

            &nbsp;<b-button
              @click="showModalDelete(result)"
              variant="danger"
              size="sm"
              >Delete</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello Edit modal!</p>
    </b-modal>
    <b-modal id="modal-2" title="BootstrapVue">
      <p class="my-4">Hello Delete modal!</p>
    </b-modal> -->
    <div class="float-right">
      <b-button
        :disabled="userDetails.page == 1 ? true : false"
        variant="outline-primary"
        @click="pagination('prev')"
        >Previous</b-button
      ><b-button
        :disabled="userDetails.page == userDetails.total_pages ? true : false"
        class="pl-4 pr-4"
        variant="outline-primary"
        @click="pagination('next')"
        >Next</b-button
      >
    </div>
    <!-- <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li
          class="page-item cursor-pointer"
          :class="userDetails.page == 1 ? 'disabled' : ''"
          @click="pagination('prev')"
        >
          <a class="page-link">Previous</a>
        </li>
        <li
          class="page-item cursor-pointer"
          @click="pagination('next')"
          :class="userDetails.page == userDetails.total_pages ? 'disabled' : ''"
        >
          <a class="page-link">Next</a>
        </li>
        {{
          userDetails.page
        }}-----{{
          userDetails.total_pages
        }}
      </ul>
    </nav> -->
  </div>
</template>

<script>
export default {
  name: "user-table",
  data() {
    return {
      perPage: 13,
      currentPage: 1
      // perPage: this.userDetails.per_page,
      // currentPage: this.userDetails.page
    };
  },
  watch: {
    userDetails() {
      // console.log("watch called ");
      this.perPage = this.userDetails.per_page;
      this.currentPage = this.userDetails.page;
    }
  },
  computed: {
    userDetails() {
      return this.$store.state.userDetails.data;
    },
    rows() {
      return this.userDetails.length;
    }
  },
  methods: {
    pagination(val) {
      let pageNo = this.userDetails.page;

      if (val == "prev") {
        pageNo = pageNo - 1;
      }

      if (val == "next") {
        pageNo = pageNo + 1;
      }

      this.$router.push({
        path: "user",
        query: { page: pageNo }
      });
      this.getAllUsers(pageNo);
    },
    getAllUsers(data) {
      const postData = {
        page: data
      };
      this.$store
        .dispatch("getAllUsers", postData)
        .then(() => {})
        .catch(() => {});
    },
    showModalEdit(result) {
      this.$bvModal.show("edit");
      this.$emit("ModalData", "edit", "Edit", result);
    },
    showModalDelete(result) {
      this.$bvModal.show("delete");
      this.$emit("ModalData", "delete", "Delete", result);
    }
  }
};
</script>

<style scoped></style>
