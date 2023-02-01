<template>
  <!-- 顶部通栏 -->
  <AppTopnav />
  <AppHeader />
  <main class="app-body">
    <!-- 二级路由 -->
    <RouterView />
  </main>
  <AppFooter />
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

export default {
  name: 'cyber-layout',
  components: { AppTopnav, AppHeader, AppFooter }
}
</script>

<style scoped lang='less'>
.app-body {
  min-height: 600px;
}
</style>
