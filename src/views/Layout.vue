<template>
  <!-- 顶部通栏 -->
  <AppTopnav />
  <header>头部</header>
  <main>
    <!-- 二级路由 -->
    <RouterView />
  </main>
  <footer>底部</footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
export default {
  name: 'cyber-layout',
  components: { AppTopnav }
}
</script>

<style scoped lang='less'>

</style>
