<template>
  <div>
    <headerTop />
    <headerBottom />
    <Nuxt />
    <footerd />
  </div>
</template>
<script>
import headerTop from '@/components/inc/headerTop'
import headerBottom from '@/components/inc/headerBottom'
import footerd from '@/components/inc/footerd'

export default {
  components: {
    headerTop,
    headerBottom,
    footerd
  }
}
</script>

<style>

</style>
