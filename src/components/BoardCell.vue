<template>
  <div class="board-cell">
    <h1>{{au}} {{ship}}</h1>
    <p>{{keyword}}</p>
  </div>
</template>

<script>
export default {
  props: {
    ship: {
      type: String,
      default: ''
    },
    keyword: {
      type: String,
      default: ''
    },
    au: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
  .board-cell{
    width: 200px;
    height: 200px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
</style>