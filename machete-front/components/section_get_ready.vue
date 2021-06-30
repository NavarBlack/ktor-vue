<template>
  <section>
    <div class='layout' style='align-items: center; background-color: black'>
    <section_header text1='Приготовься' text2='Концертная галерея'/>
      <div class='bg_border_content'>
      <div class='img_1'/>
      <div class='img_2'/>
      <div class='img_3'/>
      <div class='img_4'/>
    </div>
    </div>
  </section>

</template>

<script>
import Section_header from '~/components/smoll_component/section_header'
export default {
  name: 'section_get_ready',
  components: { Section_header }
}
</script>

<style lang='sass' scoped>

div
  position: relative
.img
  position: absolute

.img_1
  @extend .img
  +bg_image('https://images01.nicepage.io/17/d7/17d768d566aa4ed388fd9c2de3e00b86.jpeg')
  width: 42em
  height: 60em
  left: -4em
  top: 2em
.img_2
  @extend .img
  +bg_image('https://images01.nicepage.io/9f/0a/9f0abc1545ed1927f6f66c70fe1de498.jpeg')
  width: 43em
  height: 40em
  left: 41em
  top: 2em
.img_3
  @extend .img
  +bg_image('https://images01.nicepage.io/a0/a7/a0a73df8664892e0e9846bc270e92322.jpeg')
  width: 20em
  height: 18em
  left: 41em
  top: 44em
.img_4
  @extend .img
  +bg_image('https://images01.nicepage.io/b2/21/b221d1459678c5fbb16753f0060f70f4.jpeg')
  width: 20em
  height: 18em
  left: 64em
  top: 44em

.bg_border_content
  width: 80em
  height: 65em
  border: solid white 4px
section
  width: 100%
  display: flex
  align-items: center
  flex-direction: column
  background-color: #000000

</style>
