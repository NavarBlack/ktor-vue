<template>
  <section>
    <section_welcome/>
    <section_now/>
    <section_place/>
    <section_news/>
    <section_get_ready/>
    <section_cards/>
    <section_now/>

  </section>
</template>






<script>
import Section_welcome from '~/components/section_welcome'
import Section_now from '~/components/section_now'
import Section_place from '~/components/section_place'
import Section_news from '~/components/section_news'
import Section_get_ready from '~/components/section_get_ready'
import Section_cards from '~/components/section_cards'
export default {
  components: {Section_cards, Section_get_ready, Section_news, Section_place, Section_now, Section_welcome },
  data() {
    return {
      items: [
      ]
    }
  }
}
</script>

<style lang='sass' scoped>

.section
  width: 100%
  display: flex
  justify-content: center
  flex-direction: row

</style>
