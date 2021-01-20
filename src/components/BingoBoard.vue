<template>
  <div>
    <BoardCell :keyword="keyword" :ship="ship" :au="au" />
  </div>
</template>

<script>
import BoardCell from './BoardCell'

export default {
  components: {BoardCell},
  data () {
    return {
      au: '',
      ship: '',
      keyword: ''
    }
  },
  methods: {
    getRandomNumber (max) {
      return Math.floor(Math.random() * max)
    },
    async getAU () {
      const response = await (await fetch('../data/auSettings.json')).json()

      this.au = response[this.getRandomNumber(response.length)]
    },
    async getShip () {
      const response = await (await fetch('../data/ships.json')).json()

      this.ship = response[this.getRandomNumber(response.length)]
    },
    async getKeyword () {
      const nsfw = this.getRandomNumber(2)
      const result = nsfw ? (await fetch('../data/nsfwKeywords.json')) : (await fetch('../data/sfwKeywords.json'))
      const keywords = await result.json()

      this.keyword = keywords[this.getRandomNumber(keywords.length)]
    }
  },
  mounted () {
    this.getAU()
    this.getShip()
    this.getKeyword()
  }
}
</script>

<style>

</style>