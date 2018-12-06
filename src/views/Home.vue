<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-6">
        <div @click="newGame.dragonId=dragon.id" class="border rounded m-2" v-for="dragon in dragons">
          {{dragon.name}}
          <img :src="dragon.imgUrl" height="150">
        </div>
      </div>
      <div class="col-6">
        <div @click="newGame.championId=champion.id" class="border rounded m-2" v-for="champion in champions">
          {{champion.name}}
          <img :src="champion.imgUrl" height="150">
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        newGame: {}
      }
    },
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