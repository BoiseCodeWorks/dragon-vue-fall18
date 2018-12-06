<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-6">
        <div v-for="dragon in dragons"></div>
      </div>
      <div class="col-6">
        <div v-for="champion in champions"></div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    components: {

    },
    mounted() {
      this.$store.dispatch('getDragons')
      this.$store.dispatch('getChampions')
    },
    computed: {
      dragons() {
        return this.$store.state.dragons
      },
      champions() {
        return this.$store.state.champions
      }
    }
  }
</script>