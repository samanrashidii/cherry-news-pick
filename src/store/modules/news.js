import SERVER from '@/service/server'

export default {
  namespaced: true,
  state: {
    allNews: null
  },
  getters: {
    allNews: state => state.allNews
  },
  mutations: {
    SET_ALL_NEWS: (state, val) => {
      state.allNews = val
    }
  },
  actions: {
    getAllNews: (context, payload) => {
      return SERVER.getAllNews(payload)
        .then((res) => {
          const result = res.data.articles
          context.commit('SET_ALL_NEWS', result)
          return result
        })
    }
  }
}
