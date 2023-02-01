<template>
  <nav class="app-topnav">
    <h1 class="logo">
      <RouterLink to="/"></RouterLink>
    </h1>
    <ul class="leftNav">
      <li><a href="javascript:;">商店</a></li>
      <li><a href="javascript:;">社区</a></li>
      <li><a href="javascript:;">聊天</a></li>
      <li><a href="javascript:;">客服</a></li>
    </ul>
    <ul class="rightNav">
      <li class="email">
        <a href="javascript:;">
          <i class="iconfont icon-icon-test33"></i>
        </a>
      </li>
      <template v-if="profile.token">
        <a href="javascript:;">{{ profile.nickname }}</a>
        <a href="javascript:;">¥ 0.00</a>
      </template>
      <template v-else>
        <li><a href="javascript:;"><i class="iconfont icon-icon-test35"></i> 登录</a></li>
      </template>
      <li class="accent"><a href="javascript:;"><span>安装客户端</span></a></li>
    </ul>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AppTopnav',
  setup () {
    const store = useStore()
    const profile = computed(() => {
      return store.state.user.profile
    })

    return { profile }
  }
}
</script>

<style scoped lang="less">
.app-topnav {
  background: #2a2a2a;
  display: flex;

  .logo {
    width: 70px;

    a {
      display: block;
      height: 52px;
      width: 52px;
      margin-left: 7px;
      background: url(../assets/images/logo-white.png) no-repeat center 1px / contain;
    }
  }

  ul {
    display: flex;
    align-items: center;

    &.rightNav {
      margin-left: auto;
    }

    li {
      display: flex;
      height: 52px;
      align-items: center;

      a {
        font-size: 13px;
        padding: 0 14px;
        color: #ccc;

        i {
          font-size: 20px;
          margin-right: 2px;
          vertical-align: -10%;
        }

        &:hover {
          color: @cyberColor;
        }
      }

      &.accent {
        padding-left: 15px;
        padding-right: 15px;
        background: #0078f2;
      }

    }
  }
}
</style>
