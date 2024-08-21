<template>
  <header class="app-header">
    <h1>mister Bitcoin</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/statistics">Statistics</RouterLink>
    </nav>
  </header>
  <hr>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
    flex-grow: 1;
  }
  nav {
    display: flex;
    gap: 10px;
    a {
      color: inherit;
    }
    :nth-last-child(1) {
      margin-right: 10px;
    }
  }
}
</style>
