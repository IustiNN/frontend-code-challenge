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
      <p class="price bold"><strong>{{ad.advertisementPrice.baseRent}} $</strong></p>
      <span class="right floated">
            ab {{ad.realestateSummary.space}} m&sup2;
          </span>
      {{ad.realestateSummary.numberOfRooms}} Zimmer
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ui.card, .ui.cards>.card,
  #app .card > div {
    border-radius: 0!important;
  }
  #app .content {
    padding: 2em 2em 0;
  }
  #app .description {
    font-size: 1em;
    color: #464545;
    margin-bottom: .7em;
    font-weight: 600;
  }
  #app .price {
    color: #464545;
  }
  .card {
    padding-bottom: 2em;
  }
  .address {
    color: #b7b7b7;
    font-size: .7em;
    font-weight: 700;
    margin-bottom: 2em!important;
    clear: both;
  }
  #app
  .ui.cards .card .button {
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
    color: #7a7a7a;
  }

  @media screen and (min-width: 1600px) {
    .extra-details {
      float: right;
    }
    .extra-details > p {
      float: right;
    }
    .area {
      border-right: 1px solid #7a7a7a;
    }
  }
</style>
