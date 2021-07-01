<template>
  <div>
    <a :href="url"  target="_blank">прочитайте больше</a>
  </div>
</template>

<script>
export default {
  name: 'external_link',
  props: ['url']
}
</script>

<style lang='sass' scoped>



</style>
