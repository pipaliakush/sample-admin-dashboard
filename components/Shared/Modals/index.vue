<template>
  <div>
    <b-modal :id="modalId" :title="modalName" hide-footer>
      <component :is="modalId" :modalData="modalData" :modalId="modalId" />
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "modals-component",
  components: {
    edit: () => import("@/components/Shared/Modals/Edit.vue"),
    delete: () => import("@/components/Shared/Modals/Delete.vue")
  },
  props: ["modalId", "modalName", "modalData"],
  data() {
    return {};
  }
};
</script>
