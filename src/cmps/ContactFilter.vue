<template>
  <section class="contact-filter">
    <input
      @input="onFilterBy(filterBy)"
      v-model="filterBy.name"
      type="text"
      placeholder="Search"
    />
  </section>
</template>

<script>

export default {
  data() {
    return {
      filterBy: { name: '' },
    }
  },
  methods: {
    onFilterBy(filterBy) {
      this.$store.dispatch({ type: 'loadContacts', filterBy })
    },
  },
}
</script>

<style lang="scss">
.contact-filter {
  input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    &:focus {
      opacity: 0.7;
    }
  }
}
</style>
