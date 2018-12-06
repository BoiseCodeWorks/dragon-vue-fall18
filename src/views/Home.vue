<template>
  <div class="home container-fluid">
    <button disabled="ready" :class="{'btn-success':ready}" class="btn btn-primary" @click="startGame">Start Game</button>
    <div class="row justify-content-around">
      <div class="col-5">
        <div @click="newGame.dragonId=dragon.id" class="border rounded m-2" v-for="dragon in dragons">
          {{dragon.name}}
          <img :src="dragon.imgUrl" height="150">
        </div>
      </div>
      <div class="col-5">
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
        newGame: {
          dragonId: -1,
          championId: -1
        }
      }
    },
    components: {

    },
    mounted() {
      this.$store.dispatch('getDragons')
      this.$store.dispatch('getChampions')
    },
    methods: {
      startGame() {
        debugger
        this.$store.dispatch("startGame", this.newGame)
      },
      ready() {
        return this.newGame.dragonId > -1 && this.newGame.championId > -1
      }
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