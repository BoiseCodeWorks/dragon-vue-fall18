<template>
  <div class="">
    <div class="row">
      <dragon class="col-6"></dragon>
      <champion class="col-6"></champion>
    </div>
  </div>
</template>

<script>
  import dragon from "@/components/dragon.vue"
  import champion from "@/components/champion.vue"
  export default {
    name: '',
    components: {
      dragon,
      champion
    },
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch("getGame", this.$route.params.gameId)
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>