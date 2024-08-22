<template>
  <UserMsg />
  <AppHeader />
  <main>
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'
import UserMsg from './cmps/UserMsg.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
  },
}
</script>

<style scoped>
main {
  min-height: calc(82vh - 1rem);
  padding: 0.5em;
}
  .slide-enter-active,
  .slide-leave-active {
      transition: opacity 1s, transform 1s;
    }

    .slide-enter-from,
    .slide-leave-to {
      opacity: 0;
      transform: translateX(-30%);
    }
</style>
