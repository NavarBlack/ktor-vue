<template>
  <section>
    <section_welcome/>
    <section_now/>
    <section_place/>
    <section v-for='item in items' :key='$_.uniqueId()' :class='[item.className]'>

    </section>
  </section>
</template>

<script>
import Section_welcome from '~/components/section_welcome'
import Section_now from '~/components/section_now'
import Section_place from '~/components/section_place'
export default {
  components: { Section_place, Section_now, Section_welcome },
  data() {
    return {
      items: [
        { className: 'section_4' },
        { className: 'section_5' },
        { className: 'section_6' },
        { className: 'section_7' }
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

.layout_1
  background-image: linear-gradient(0deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("//images01.nicepage.io/a3/5c/a35ca352e19114de3cad4a3026749632.jpeg")

.vk_link
  display: flex
  flex-direction: row
  justify-content: left
  height: 5em
  width: 30em
  border-bottom: 8px solid #94794e
  border-radius: 0 0 40px 40px
  margin-bottom: 1em
  color: #EBECEF

  p
    line-height: 2em
    font-size: 24px


.p_section_1
  display: block
  color: #ffffff
  text-align: left
  box-sizing: border-box
  word-wrap: break-word
  font-size: 1.25rem
  width: 27em
  padding: 2em 0


=section_1
  height: 776px
  background-color: #000000


=section_2
  height: 233px
  background-color: #001730


=section_3
  height: 515px
  background-color: #001730

=section_4
  height: 515px
  background-color: black

=section_5
  height: 618px
  background-color: #fe4a49

=section_6
  height: 637px
  background-color: #16a025
  +bg_image('//images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/ab19c92f9e945c809c44ada4/pexels-photo-167467.jpeg')

=section_7
  height: 728px
  background-color: #fe4a49

@for $i from 1 through 10
  .section_#{$i}
    @extend .section
    @if $i == 1
      +section_1
      h1
        color: #ffffff
        text-align: left
        box-sizing: border-box
        word-wrap: break-word
        font-size: 4rem
        width: 10em




    @if $i == 2
      +section_2
    @if $i == 3
      +section_3
    @if $i == 4
      +section_4
    @if $i == 5
      +section_5
    @if $i == 6
      +section_6
    @if $i == 7
      +section_7

</style>
