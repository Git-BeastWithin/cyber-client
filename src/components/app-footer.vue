<template>
  <footer class="app-footer">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/"></RouterLink>
      </h1>
      <div class="footer_text">
        <div>©2023 Cyber Corporation。保留所有权利。所有商标均为其在中国及其它国家/地区的各自持有者所有。</div>
        <div>所有的价格均已包含增值税（如适用）。
          <a href="#">隐私政策</a>
          &nbsp; | &nbsp;
          <a href="#">法律信息</a>
          &nbsp; | &nbsp;
          <a href="#">Cyber 订户协议</a>
          &nbsp; | &nbsp;
          <a href="#">退款</a>
          &nbsp; | &nbsp;
          <a href="#">Cookie</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="valve_links">
        <a href="#" target="_blank" rel="">关于 Cyber</a>
        &nbsp; | &nbsp;<a href="#" target="_blank" rel="">工作机会</a>
        &nbsp; | &nbsp;<a href="#" target="_blank" rel="">Cyberworks</a>
        &nbsp; | &nbsp;<a href="#" target="_blank" rel="">Cyber 分销</a>
        &nbsp; | &nbsp;<a href="#">客服</a>
        &nbsp; | &nbsp;<a href="#" target="_blank" rel="">礼物卡</a>
        &nbsp; | &nbsp;<a href="#" target="_blank" rel=" noopener">
          <i class="iconfont icon-icon-test70"></i> Cyber
        </a>
        &nbsp; | &nbsp;<a href="#" target="_blank" rel="">
          <i class="iconfont icon-icon-test78"></i> @Cyber
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped lang='less'>
.app-footer {
  padding: 30px 0;
  background: #202020;

  .container {
    padding: 5px 0;
    display: flex;
    align-items: center;

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

    .footer_text {
      color: #5d5d5d;

      a {
        color: #e7e7e7;

        &:hover {
          color: #0078f2;
        }
      }
    }

    .valve_links {
      margin-left: 70px;
      color: #5d5d5d;

      a {
        color: #e7e7e7;

        &:hover {
          color: #0078f2;
        }
      }
    }
  }
}
</style>
