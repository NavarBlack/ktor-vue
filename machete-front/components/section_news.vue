<template>
  <section>
    <div class='layout layout_section'>
      <!-- Верхний заголовок     -->
      <section_header text1='Новости культуры' text2='Любимые события' style='margin-bottom: 3em'/>
      <!--   нижний контент   -->
      <div class='bottom'>
        <!--   ле   -->
        <div class='bottom-content'>
          <!--  img    -->
          <div class='bottom-img-conteiner'>
            <img class='bottom-img' width='580' src="//images01.nicepage.io/91/db/91db40d19b6ce453ffd6c51a8d071f97.jpeg" alt="" >
            <div class='bottom-border'/>
          </div>
          <!--   text   -->
          <div class='bottom-text'>
            <h3>Музыканты отсюда играют музыку оттуда</h3>
            <p>Нет, мы не имеем в виду, что это страшный фри-джаз, а скорее то, что участие в нем ничего не стоит, да, ноль, пшик. Первое действие пятницы начинается в 19:00, а
              субботняя и воскресная программы начинаются с 13:30 и продолжаются до конца. до позднего вечера.</p>
            <external_link url='#' />
          </div>
        </div>
        <!--   пр   -->
        <div class='bottom-content'>
          <!--  img    -->
          <div class='bottom-img-conteiner'>
            <img class='bottom-img' width='580' src="//images01.nicepage.io/ed/21/ed210b9c57f8b210edcf6c05bd6a53a7.jpeg" alt="" >
            <div class='bottom-border'/>
          </div>
          <!--   text   -->
          <div class='bottom-text'>
            <h3>Музыканты отсюда играют музыку оттуда</h3>
            <p>Хотите бесплатно джаз? Лондонский джазовый фестиваль EFG возвращается с 13 по 22 ноября 2015 года с более чем 300 концертами по всему городу. Не позволяйте
              недостатку средств сдерживать вас: в LJF есть множество бесплатных шоу, которые помогут вам развлечься. бесплатно. Вот наша подборка лучших.</p>
            <external_link url='#' />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import External_link from '~/components/smoll_component/external_link'
import Section_header from '~/components/smoll_component/section_header'

export default {
  name: 'section_news',
  components: { Section_header, External_link }
}
</script>

<style lang='sass' scoped>

.layout_section
  background-color: black

section
  width: 100%
  display: flex
  align-items: center
  flex-direction: column
  background-color: #000000

.top
  display: flex
  align-items: center
  flex-direction: column
  margin-bottom: 5em

.bottom
  display: flex
  flex-direction: row
  justify-content: center
  &-text
    margin-top: 1em
    width: 80%
  &-content
    width: 50%
    display: flex
    flex-direction: column
    align-items: center
  &-img
    position: relative
    z-index: 1
    margin-left: -5em
    margin-top: -3em
    &-conteiner
      position: relative
      width: 600px
      height: 330px
  &-border
    position: absolute
    width: 100%
    height: 100%
    border: solid #94794e 4px
    z-index: 2

p
  margin: 2em 0
  font-size: 1.25em
  font-weight: 200
  color: white

div
  display: flex
  flex-direction: column
  align-items: center

</style>
