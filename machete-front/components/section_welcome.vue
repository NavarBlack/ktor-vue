<template>
  <section>
  <div class='layout layout_bg_img'>
    <div class='vk_link'>
      <img
        src='https://sun2-3.userapi.com/s/v1/ig2/qmQlTy26jn6Sw5EjQTrR07QZyEzLD2_8QxOakbcFnaNWDHADzPFpcWGNQZwOcdnJVy0Yuymrm4HyU2w99_cKVWp9.jpg?size=50x0&amp;quality=96&amp;crop=108,108,864,864&amp;ava=1'
        width='50' height='50'
        alt='Андрей Шепелевич'
        style='border-radius: 100%'
      >
      <p>Андрей Шепелевич</p>
    </div>
    <div>
      <h1>"Последний тур" Майлза Дэвиса и Джона Колтрейна</h1>
    </div>
    <div>
      <p class='p_section'>live box set - увлекательная музыкальная битва титанов. Буквально назревал шторм, когда Майлз Дэвис выступил с парой замечательных концертов в Сан-Диего в ту же ночь на Humphreys Concerts by the Bay в апреле 1985 года.</p>
    </div>
    <div>
      <a href="#"  target="_blank">прочитайте больше</a>
    </div>

  </div>
  </section>
</template>

<script>
export default {
  name: 'section_welcome'
}
</script>

<style lang='sass' scoped>
h1
  color: #94794e
  text-align: left
  box-sizing: border-box
  word-wrap: break-word
  font-size: 4rem
  width: 10em
a
  width: 17em
  border: solid 2px #94794e
  box-sizing: border-box
  display: block
  cursor: pointer
  text-decoration: none
  text-align: center
  padding: 10px 30px
  text-transform: uppercase
  font-size: 1rem
  letter-spacing: 1px
  font-weight: 700
  color: white

section
  width: 100%
  display: flex
  justify-content: center
  flex-direction: row
  height: 776px
  background-color: #000000

.layout_bg_img
  background-image: linear-gradient(0deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("//images01.nicepage.io/a3/5c/a35ca352e19114de3cad4a3026749632.jpeg")

.vk_link
  display: flex
  flex-direction: row
  justify-content: left
  height: 5em
  width: 30em
  border-bottom: 4px solid #938a7a
  border-radius: 0 0 40px 40px
  margin-bottom: 1em
  color: #EBECEF

  p
    line-height: 2em
    font-size: 24px


.p_section
  display: block
  color: #ffffff
  text-align: left
  box-sizing: border-box
  word-wrap: break-word
  font-size: 1.25rem
  width: 27em
  padding: 2em 0

</style>
