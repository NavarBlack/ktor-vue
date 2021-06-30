<template>
  <section>
    <div class='layout layout_section'>
      <card v-for='item in [1,2,3]' :key="$_.uniqueId()"/>
    </div>
  </section>
</template>

<script>
import Card from '~/components/smoll_component/card'
export default {
  name: 'section_cards',
  components: { Card }
}
</script>

<style lang='sass' scoped>

.layout_section
  flex-direction: row
  justify-content: space-between
  background: unset

section
  width: 100%
  height: 50em
  display: flex
  align-items: center
  flex-direction: column
  background-color: #000000
  +bg_image('https://images01.nicepage.io/b0/a1/b0a17bccfb4b3f7aa02489fde6165a9a.jpeg')
</style>
