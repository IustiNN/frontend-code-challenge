<template>
  <div class="ui container">
    <div class="ui active dimmer" v-if="loading">
      <div class="ui loader"></div>
    </div>
    <h1 class="ui dividing header centered">Ads List</h1>
    <div class="ui three column grid link stackable cards ads-list" v-if="ads.length">
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

  export default {
    name: 'List',
    components: { Single },
    data () {
      return {
        loading: false,
        allAds: [],
        ads: [],
        countAds: 10
      }
    },
    methods: {
      loadMoreAds () {
        this.countAds += 10
        this.ads = this.allAds.slice(0, this.countAds)
      }
    },
    mounted () {
      this.loading = true
      this.$http.get('https://cors-anywhere.herokuapp.com/https://api.mcmakler.de/v1/advertisements')
        .then((response) => {
          console.log('success', response.data.data)
          this.allAds = response.data.data
          this.ads = this.allAds.slice(0, this.countAds)
        }, (response) => {
          console.log('error', response)
        }).then(() => {
          this.loading = false
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .ui.dividing.header {
    margin-bottom: 2em;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
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
</style>
