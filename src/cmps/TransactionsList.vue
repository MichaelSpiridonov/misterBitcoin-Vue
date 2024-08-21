<template>
  <section class="transactions-list">
    <h1>Latest Transactions:</h1>
    <ul>
      <li
        v-for="transaction in transactions"
        :key="transaction.at"
      >
        <TransactionsPreview :transaction="transaction" />
      </li>
    </ul>
  </section>
</template>

<script>
import TransactionsPreview from './TransactionsPreview.vue'

export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
  components: {
    TransactionsPreview,
  },
}
</script>

<style lang="scss">
.transactions-list {
  max-width: max-content;
  padding: 20px 70px;
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
