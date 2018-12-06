<template>
  <div class="champion container-fluid">
    <div class="row">
      <h5 class="col-12">{{champion.name}}</h5>
      <img class="col-12" :src="champion.imgUrl" height="150" alt="">
      <p class="col-12">{{champion.hp}}</p>
      <button v-for="(dice, key) in champion.attacks" @click="attack(key)">{{key}}: {{dice}}</button>
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
      },
      gameId() {
        return this.$store.state.game._id
      }
    },
    methods: {
      attack(attackName) {
        let newAttack = {
          attack: attackName
        }
        this.$store.dispatch("attack", { attack: newAttack, gameId: this.gameId })
      }
    }
  }

</script>

<style>


</style>