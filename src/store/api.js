import Vue from 'vue'
import axios from 'axios'

export default {
  get (url) {
    return axios.get(url)
  }
}
