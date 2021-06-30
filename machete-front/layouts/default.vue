<template>
  <div>
    <header>
      <my_header/>
    </header>
  <main >
    <Nuxt />
  </main>
    <footer>
      <my_footer/>
    </footer>
  </div>
</template>

<script>
import My_header from '~/components/my_header'
import My_footer from '~/components/my_footer'
export default {
  components: { My_footer, My_header }
};
</script>

<style lang="sass" scoped>
header
  min-height: 4vh
  display: flex
  justify-content: center
  width: 100%
  position: sticky
  top: 0
  left: 0
  z-index: 10

main
  min-height: 86vh

footer
  min-height: 4vh
  display: flex
  justify-content: center
  background-color: #333333

</style>
