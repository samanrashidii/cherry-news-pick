<template>
  <b-form
    @submit.prevent="doSearch()"
    class="search col-6 d-flex p-2 my-2 mx-auto border border-dark rounded-lg"
  >
    <b-form-input
      v-model="text"
      type="search"
      class="border-secondary"
      placeholder="Type here..."
    />
    <b-button
      type="submit"
      class="ml-2"
      variant="danger"
    >
      Search
    </b-button>
  </b-form>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    doSearch () {
      if (this.text.length > 0) {
        this.$emit('do-search', this.text)
      }
    }
  }
}
</script>
