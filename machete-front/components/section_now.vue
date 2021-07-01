<template>
  <section>
    <div class='layout layout_section'>
      <section_header text1='Новости культуры' text2='Джаз сегодня'/>
      <p>Великий вид искусства должен привлекать внимание всех уголков культуры. Исключение половины населения без уважительной причины подавит половину творчества в литературе,
        живописи или музыке, не так ли? Но в джазе нет
        был особенно гостеприимным для половины населения на протяжении большей части своей истории, поскольку события 2017 года начали проявляться. Женщины говорят (снова) о том,
        каким образом они были исключены, подвергались насилию,
        или разочарованы. Исторические истории таких выдающихся музыкантов, как Мельба Листон</p>
      <external_link url='#' />
    </div>
  </section>

</template>

<script>
import External_link from '~/components/smoll_component/external_link'
import Section_header from '~/components/smoll_component/section_header'

export default {
  name: 'section_now',
  components: { Section_header, External_link }
}
</script>

<style lang='sass' scoped>

.layout_section
  padding-top: 5em
  flex-direction: column
  align-items: center
  width: 40em
  background-color: black

section
  width: 100%
  display: flex
  justify-content: center
  flex-direction: row
  height: 776px
  background-color: #000000


p
  font-size: 1.25rem
  color: #ffffff
  text-align: center
  word-wrap: break-word
  margin-bottom: 5em

</style>
