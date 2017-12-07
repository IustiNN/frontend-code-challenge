<template>
  <div>
    <h1 class="ui container text dividing header centered">Ads List</h1>
    <div class="ui link stackable cards centered ads-list" v-if="ads.length">
      <router-link class="ui card ad" :to="{name: 'detail', params: {id: index, props: ad} }" v-for="(ad, index) in ads" :key="ad.additionalId">
        <Single name="SingleAd" :key="ad.additionalId" :ad="ad"/>
      </router-link>
    </div>
    <div class="ui text center">
      <h2 v-if="!ads.length">No ads</h2>
      <button class="ui button centered load-more" @click="loadMoreAds()">Load more</button>
    </div>
  </div>
</template>

<script>
  import Single from './Single.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'List',
    components: { Single },
    methods: {
      loadMoreAds () {
        this.$store.dispatch('loadMoreAds')
      }
    },
    computed: mapState(['ads', 'adsLoaded', 'loading']),
    mounted () {
      this.$store.dispatch('getAllAds')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .ui.dividing.header {
    margin-bottom: 2em;
  }
  .ui.container {
    padding: 3em 0;
  }

  a {
    color: #42b983;
  }
  .load-more {
    margin-top: 2em!important;
  }
  .card .image img {
    width: 100%;
  }
  .ui.center {
    text-align: center;
  }
  #app .ui.card {
    padding-bottom: 2em;
  }
  @media only screen and (max-width: 767px) {
    .ui.stackable.cards>.card {
      margin: 1em auto;
      padding-bottom: 2em!important;
      max-width: 290px;
    }
  }
  .ui.dimmer {
    position: fixed;
  }
</style>
