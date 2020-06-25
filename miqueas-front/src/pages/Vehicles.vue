<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Vehículos</h4>
            <p class="category">Lista de vehículos disponibles</p>
          </md-card-header>
          <md-card-content>
            <vehicles-table table-header-color="green"></vehicles-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { VehiclesTable } from "@/components";

export default {
  components: {
    VehiclesTable
  }
};
</script>
