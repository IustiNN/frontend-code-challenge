<template>
  <div>
    <div class="image">
      <img v-if="ad.advertisementAssets[0] !== undefined" :src="ad.advertisementAssets[0].advertisementThumbnails.inventory_m.url">
      <img v-else :src="ad.advertisementAssets.advertisementThumbnails.inventory_m.url" alt="">
    </div>
    <button class="ui button">Mieten</button>
    <div class="content">
      <div class="description">
        {{ ad.title }}
      </div>
      <p class="address">{{ad.realestateSummary.address.postalCode}} {{ad.realestateSummary.address.city}}</p>
    </div>
    <div class="content extra-details">
      <div class="price bold"><strong>{{ad.advertisementPrice.baseRent}} $</strong></div>
      <div>{{ad.realestateSummary.numberOfRooms}} Zimmer</div>
      <div class="area right floated">ab {{ad.realestateSummary.space | formatSpace}} m&sup2;</div>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      // fetch the data when the view is created and the data is
      if (this.$route.name === 'Single') {
        this.ad = this.$route.params.props
      }
    },
    name: 'Single',
    props: {
      index: { type: Number },
      ad: {
        type: Object,
        required: true,
        default: {}
      }
    },
    filters: {
      formatSpace (value) {
        return value.toFixed(2)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ui.card, .ui.card .image {
    border-radius: 0!important;
  }
  #app .content {
    padding: 1.5em 1.5em 0;
    text-align: left;
  }
  #app .description {
    font-size: 1em;
    color: #464545;
    margin-bottom: .7em;
    font-weight: 600;
    height: 40px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .price {
    color: #464545;
    margin-right: 15px;
  }
  .address {
    color: #b7b7b7;
    font-size: .7em;
    font-weight: 700;
    /*margin-bottom: 2em!important;*/
    clear: both;
  }
  #app .card .button {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 70px;
    color: #bebebe;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 5px 8px rgba(0,0,0,.1);
  }
  .extra-details {
    font-size: 1.1em;
    border-top: none!important;
    border: none;
    color: #7a7a7a;
    display: flex;
  }
  .extra-details > div {
    flex: 1;
    font-size: .8em;
  }
  .area {
    border-left: 1px solid #7a7a7a;
    padding-left: 1em;
  }
</style>
