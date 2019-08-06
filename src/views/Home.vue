<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getInviteInfoApi } from '@/api/invite'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    async getInviteInfo() {
      try {
        let res = await getInviteInfoApi()
        if (res.code === 0) {
          // TODO 业务逻辑
        } else {
          // TODO 业务逻辑
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.getInviteInfo()
  }
}
</script>
