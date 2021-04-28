export default {
  filters: {
    truncate: function (value, count) {
      if (value.length > count) {
        value = value.substring(0, (count - 3)) + '...'
      }
      return value
    }
  }
}
