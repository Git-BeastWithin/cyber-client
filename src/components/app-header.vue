<template>
  <header class='app-header'>
    <div class="container">
      <div class="search">
        <i class="iconfont icon-icon-test12"></i>
        <input type="text" placeholder="搜索商城">
      </div>
      <ul class="navs">
        <li><a href="#">新鲜推荐</a></li>
        <li><a href="#">类别</a></li>
        <li><a href="#">点数商店</a></li>
        <li><a href="#">新闻</a></li>
        <li><a href="#">实验室</a></li>
      </ul>
      <div class="wish-list">
        <a href="#">
          愿望单<i class="iconfont icon-icon-test10"></i>(3)
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="less">
.app-header {
  background: #121212;
  height: 100px;

  .container {
    display: flex;
    height: 100px;
    align-items: center;

    .search {
      display: flex;
      align-items: center;

      width: 230px;
      height: 40px;
      background: #202020;
      border-radius: 24px;

      i {
        margin: 0 12px;
        color: #a0a0a0;
      }

      input {
        background: #202020;
        color: #a0a0a0;
      }
    }

    .navs {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-left: 40px;

      li {
        margin-right: 40px;

        a {
          font-size: 16px;
          color: #a0a0a0;
          display: inline-block;

          i {
            color: #a0a0a0;
          }

        }

        &:hover {
          a {
            color: @cyberColor;
            i {
              color: @cyberColor;
            }
          }
        }
      }
    }

    .wish-list {
      display: flex;
      align-items: center;
      display: inline-block;
      margin-left: 200px;

      a {
        font-size: 16px;
        color: #a0a0a0;

        i {
          margin-left: 5px;
          color: #a0a0a0;
        }

        &:hover {
          color: @cyberColor;
          i {
            color: @cyberColor;
          }
        }
      }
    }

  }
}
</style>
