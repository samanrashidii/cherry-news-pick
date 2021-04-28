<template>
  <b-container
    @scroll="console.log('asdad')"
    class="home p-5"
    fluid="lg"
  >
    <Logo />
    <Search
      @do-search="searchNews"
    />
    <b-card-group
      class="mt-5"
      columns
    >
      <template
        v-if="allNews && allNews.length > 0"
      >
        <NewsCard
          v-for="(news, index) in allNews"
          :news="news"
          :key="index"
        />
      </template>
    </b-card-group>
    <div
      v-if="isLoading"
      class="text-center mt-5"
    >
      <b-spinner
        type="grow"
        variant="danger"
      />
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Logo from '@/components/Logo.vue'
import Search from '@/components/Search.vue'
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Search,
    NewsCard
  },
  data () {
    return {
      isLoading: false,
      keyword: '',
      pageSize: 9,
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters({
      allNews: 'news/allNews'
    })
  },
  mounted () {
    // Detect when scrolled to bottom
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions({
      getAllNews: 'news/getAllNews'
    }),
    handleScroll () {
      const bodyEl = document.querySelector('html')
      if (!this.isLoading && (Math.ceil(bodyEl.scrollTop) + bodyEl.clientHeight >= bodyEl.scrollHeight)) {
        this.pageNumber = this.pageNumber + 1
        this.searchNews()
      }
    },
    searchNews (data) {
      if (data) {
        this.keyword = data
        this.pageNumber = 1
      }
      // Required data before calling API
      const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000))
      const query = {
        q: this.keyword,
        from: yesterday,
        pageSize: this.pageSize,
        page: this.pageNumber,
        sortBy: 'popularity',
        apiKey: 'dd73d7dfe5ce47c2af3b14640221fc72'
      }
      // Call API to get all News
      this.isLoading = true
      this.getAllNews(query)
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
