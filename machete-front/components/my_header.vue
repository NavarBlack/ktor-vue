<template>
    <div class='layout'>
      <external_link/>
      <external_link/>
      <external_link/>
      <external_link/>
      <external_link/>
    </div>
</template>

<script>

import External_link from '~/components/smoll_component/external_link'
export default {
  name: 'my_header',
  components: { External_link },
}
</script>

<style lang='sass' scoped>

div
  background-color: unset
  display: flex
  justify-content: space-evenly
  flex-direction: row
  padding-top: .5em

</style>
