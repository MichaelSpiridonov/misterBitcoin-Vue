<template>
  <section class="user-details">
    <h1>Welcome, {{ user.name }}</h1>
    <h2>Your Balance: {{ user.balance }}$</h2>
    <h2>Conversion Rate: {{ user.balanceInBtc }}₿</h2>
    <TransactionsList
      v-if="user.transactions.length"
      :transactions="user.transactions"
    />
    <h3 v-else>You don't have any transactions</h3>
  </section>
</template>

<script>
import TransactionsList from '@/cmps/TransactionsList.vue'
import { bitcoinService } from '@/services/bitcoin.service'
import { userService } from '@/services/user.service'

export default {
  data() {
    return {
      user: null,
    }
  },
  async created() {
    this.user = userService.getUser()
    this.user.balanceInBtc = (await bitcoinService.getRate(this.user?.balance) * this.user?.balance).toPrecision(4)
  },
  components: {
    TransactionsList,
  },
}
</script>

<style lang="scss">
.user-details {
  text-align: center;
  display: grid;
  justify-items: center;
}
</style>
