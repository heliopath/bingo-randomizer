<template>
  <div class="bingo-board">
    <BoardCell v-for="n in 25" :key="n" />
  </div>
</template>

<script>
import BoardCell from './BoardCell'

export default {
  components: {BoardCell}
}
</script>

<style>
  .bingo-board {
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
  }
</style>