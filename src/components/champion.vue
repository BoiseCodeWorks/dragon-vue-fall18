<template>
  <div class="champion container-fluid">
    <div class="row">
      <h5 class="col-12">{{champion.name}}</h5>
      <img class="col-12" :src="champion.imgUrl" height="150" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'champion',
    data() {
      return {

      }
    },
    computed: {
      champion() {
        return this.$store.state.game._champion
      }
    },
    methods: {}
  }

</script>

<style>


</style>