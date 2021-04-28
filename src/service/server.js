// import Vue from 'vue'
import axios from 'axios'
import api from './api'

Object.entries(api).map(([key, value]) => {
  const obj = { ...value }
  api[key] = function (query) {
    obj.params = query
    const promise = axios(obj)
    return promise
  }
})

export default {
  ...api
}
