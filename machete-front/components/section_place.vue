<template>
  <section>
    <div class='layout layout_section'>
      <div>
        <div class='place_img__top'>
          <div class='place_img__top__border' />
        </div>
      </div>

      <div class='place_bottom'>
        <div class='place_bottom__l'>
          <img width='500' src="//images01.nicepage.io/6a/d4/6ad4120afebac2509e5581d2bee3b0f6.jpeg" alt=''>
        </div>

        <div class='place_bottom__r'>
          <h3 >Музыканты отсюда играют музыку оттуда</h3>
          <div class='dash'></div>
          <p >Для этого «Новые звуки» слушайте музыку, которая идет отсюда, но смотрите туда. Это может быть арабская музыка, индонезийская музыка, марокканская музыка, балканская музыка или эфиопская музыка, но все это музыка американцев, воссоздающих
            звучит откуда-то еще.
            <br>
            <br> Послушайте музыку оркестра Анбессы, израильских музыкантов, живущих в Бруклине (а теперь и в Лос-Анджелесе), которые являются поклонниками «золотого века» эфиопской музыки. Из их последней записи Negestat, что означает
            Короли на амхарском языке, слушайте заглавный трек, насыщенный эфиопским грувом. <br>
            <br></p>
          <a href="#"  target="_blank">прочитайте больше</a>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section_place'
}
</script>

<style lang='sass' scoped>
h3
  text-align: left
  font-size: 1.875rem
  line-height: 1.2
  text-transform: uppercase
  font-weight: 700
  word-wrap: break-word
  color: #94794e
p
  font-size: 1rem
  color: #ffffff
  text-align: left
  box-sizing: border-box
  word-wrap: break-word
  line-height: 2.0


.layout_section
  padding: unset
  background-color: black

.place_img__top
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("//images01.nicepage.io/ae/8d/ae8db7dc4831fce7fde33ff8a6575c29.jpeg")
  width: 100%
  background-size: 100% 100%
  height: 50em
  position: relative
  z-index: 1
.dash
  margin: unset

.place_img__top__border
  position: absolute
  z-index: 2
  border: solid #94794e 4px
  width: 75vw
  height: 75vh
  top: 8vh
  left: 2vw

.place_bottom
  display: flex
  flex-direction: row
  width: 100%
  justify-content: space-between
  padding: 2em 2em 0 2em
  background-color: #1a1a1a

.place_bottom__l
  width: 50%
  position: relative
  top: -15em
  left: 2em
  z-index: 3

.place_bottom__r
  width: 50%
  display: flex
  flex-direction: column
  justify-content: space-between

section
  width: 100%
  display: flex
  justify-content: center
  flex-direction: row
  background-color: #000000
</style>
