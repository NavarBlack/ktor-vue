<template>
  <div>
  <h6>{{ text1 }}</h6>
  <h2>{{`${text2}:`}}</h2>
  <div class='dash'></div>
  </div>
</template>

<script>
export default {
  name: 'section_header',
  props:['text1','text2']
}
</script>

<style lang='sass' scoped>

div
  display: flex
  flex-direction: column
  align-items: center

</style>
