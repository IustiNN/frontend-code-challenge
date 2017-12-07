<template>
  <div>
    <Single v-if="ad" class="ui card centered" name="Single" :key="ad.additionalId" :ad="ad"/>
    <div v-else class="ui container text centered">
      <h2 class="ui header">Please go back and select another ad</h2>
    </div>
    <router-link class="ui button" :to="{name: 'list' }">Back to list</router-link>
  </div>
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
