<template>
  <h1>Homepage</h1>
</template>

<script>
import { userService } from '@/services/user.service';

export default {
  data() {
        return {
            user: null,
        }
    },
    created() {
        this.user = userService.getUser()
    }
}
</script>

<style lang="scss">

</style>