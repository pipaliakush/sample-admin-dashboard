<template>
  <div>
    <Table @ModalData="ModalData" />
    <Modals :modalId="modalId" :modalName="modalName" :modalData="modalData" />
  </div>
</template>

<script>
import Table from "@/components/users/Table/index.vue";
import Modals from "@/components/Shared/Modals/index.vue";

export default {
  name: "user-table",
  components: {
    Table,
    Modals
  },
  data() {
    return {
      modalId: "",
      modalName: "",
      modalData: {}
    };
  },
  methods: {
    ModalData(idName, modalName, data) {
      this.modalId = idName;
      this.modalName = modalName;
      this.modalData = data;
    }
  }
};
</script>
