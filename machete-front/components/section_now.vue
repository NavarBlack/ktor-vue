<template>
  <section>
    <div class='layout layout_section'>
      <h6>новости культуры</h6>
      <h2>Джаз сегодня:</h2>
      <div class='dash'></div>
      <p >Великий вид искусства должен привлекать внимание всех уголков культуры. Исключение половины населения без уважительной причины подавит половину творчества в литературе, живописи или музыке, не так ли? Но в джазе нет
        был особенно гостеприимным для половины населения на протяжении большей части своей истории, поскольку события 2017 года начали проявляться. Женщины говорят (снова) о том, каким образом они были исключены, подвергались насилию,
        или разочарованы. Исторические истории таких выдающихся музыкантов, как Мельба Листон</p>
      <a href="#" target="_blank">прочитайте больше</a>
    </div>
  </section>

</template>

<script>
export default {
  name: 'section_now'
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

h6
  font-size: 1.125rem
  line-height: 1.2
  text-transform: uppercase
  font-weight: 700
  text-align: center
  word-wrap: break-word
  color: white
  margin-bottom: 20px
h2
  text-align: center
  word-wrap: break-word
  color: #94794e
  font-size: 3rem
  line-height: 1.1
  letter-spacing: 1px
  font-weight: 700

p
  font-size: 1.25rem
  color: #ffffff
  text-align: center
  word-wrap: break-word
  margin-bottom: 5em

</style>
