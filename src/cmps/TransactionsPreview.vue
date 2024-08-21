<template>
  <h1>To: {{ transaction.to }}</h1>
  <h2>Amount: {{ transaction.amount }}</h2>
  <h2>At: {{ transaction.at }} </h2>
</template>

<script>
import { utilService } from '@/services/util.service';

export default {
    props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.transaction.at = utilService.formatDate(this.transaction.at)
  }
}
</script>

<style>

</style>