<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <rent-form data-background-color="green"> </rent-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <recieve-form> </recieve-form>
      </div>
    </div>
  </div>
</template>

<script>
import RentForm from "@/pages/Rent/RentForm.vue";
import RecieveForm from "@/pages/Rent/RecieveForm.vue";

export default {
  components: {
    RentForm,
    RecieveForm
  }
};
</script>