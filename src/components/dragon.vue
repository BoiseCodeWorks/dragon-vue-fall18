<template>
  <div class="dragon container-fluid">
    <div class="row">
      <div class="col-6">
        {{dragon.name}}
      </div>
      <div class="col-6">
        <img :src="dragon.imgUrl" height="150" alt="">
      </div>
      <p class="col-12">{{dragon.currentHP}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dragon',
    data() {
      return {

      }
    },
    computed: {
      dragon() {
        return this.$store.state.game._dragon
      }
    },
    methods: {}
  }

</script>

<style>


</style>