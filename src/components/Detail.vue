<template>
  <div class="ui card"><Single name="Single" :key="ad.additionalId" :ad="ad"/></div>
</template>

<script>import Single from './Single.vue'

export default {
  name: 'Detail',
  components: { Single },
  created () {
    this.ad = this.$route.params.props
  }
}
</script>

<style scoped>

</style>
