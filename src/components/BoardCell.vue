<template>
  <div class="board-cell">
    <h1>{{au}} {{ship}}</h1>
    <p>{{keyword}}</p>
  </div>
</template>

<script>
import {getRandomAuSetting, getRandomShip, getRandomKeyword} from '../actions/dataActions'

export default {
  data () {
    return {
      ship: '',
      keyword: '',
      au: ''
    }
  },
  mounted () {
    this.ship = getRandomShip()
    this.keyword = getRandomKeyword()
    this.au = getRandomAuSetting()
  }
}
</script>

<style>
  .board-cell{
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    padding: 5px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    border: 1px solid black
  }

  .board-cell:nth-child(2n) {
    background-color: bisque;
  }

  h1 {
    font-size: 20px;
  }
</style>