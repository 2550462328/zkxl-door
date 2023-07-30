<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./assets/image/logo.jpg" alt />
        </div>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/goin">走进星联</el-menu-item>
          <el-menu-item index="/news">新闻中心</el-menu-item>
          <el-menu-item index="/solution">解决方案</el-menu-item>
          <el-menu-item index="/product-list">产品中心</el-menu-item>
          <el-menu-item index="/join-us">加入我们</el-menu-item>
          <el-menu-item index="/online-experience">在线体验</el-menu-item>
          <el-menu-item index="/contact">联络星联</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>走进星联</p>
              <span>公司简介</span>
              <span>资质荣誉</span>
              <span>企业案例</span>
              <span>团队风采</span>
            </li>
            <li>
              <p>新闻资讯</p>
              <span>公司新闻</span>
              <span>行业动态</span>
            </li>
            <li>
              <p>服务提供</p>
              <span>卫生健康</span>
              <span>生态环境</span>
              <span>智能化升级</span>
            </li>
            <li>
              <p>产品中心</p>
              <span>医废称</span>
              <span>医废小秤</span>
              <span>危废柜</span>
              <span>危废秤</span>
              <span>AI盒子</span>
            </li>
            <li>
              <p>加入我们</p>
              <span>人才发展</span>
              <span>员工风采</span>
            </li>
            <li>
              <p>在线体验</p>
            </li>
            <li>
              <p>联系星联</p>
              <span>总部: 合肥市广西路中国科学技术大学国际金融研究院四号楼</span>
              <span>市内服务中心：合肥市稻香路9号周山科技创业中心五楼</span>
              <span>厂址: 淮南市山南新区高新区双创中心二期厂房</span>
            </li>
          </ul>
          <img src="./assets/image/qr.jpg" alt />
        </div>
        <div class="copyright">
          <span>星联版权所有</span>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  margin: 0 auto;
  //background-color: #fff;

  .logo {
    width: 280px;
    padding: 10px;
    img {
      width: 100%;
      line-height: 60px;
    }
  }
}
.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  height: 240px;
  overflow: hidden;
  background-color: #14679f;
  &-content {
    width: 1580px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
</style>
