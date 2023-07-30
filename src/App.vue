<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./assets/image/logo.jpg" alt />
        </div>
        <div class="menu" >
          <el-popover
            v-for="item in menuList" :key="item.path" 
            visible-arrow
            width="112"
            trigger="hover"
            :disabled="!item.parts || item.parts.length === 0"
            placement="bottom-start">
            <div v-for="part in item.parts" :key="part.path" @click="goPage(part.path)" class="part">{{ part.name }}</div>
            <div slot="reference" class="menu-item" :class="$route.path === item.path ? 'active' : ''"  @click="goPage(item.path)">{{ item.name }}</div>
          </el-popover>

          
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <router-link to="/goin" tag="p">走进星联</router-link>
              <router-link to="/goin?part=content-summary" tag="span">公司简介</router-link>
              <router-link to="/goin?part=content-honor" tag="span">资质荣誉</router-link>
              <router-link to="/goin?part=content-case" tag="span">企业案例</router-link>
              <router-link to="/goin?part=content-team" tag="span">团队风采</router-link>
            </li>
            <li>
              <router-link to="/news" tag="p">新闻资讯</router-link>
              <router-link to="/news" tag="span">公司新闻</router-link>
              <router-link to="/news" tag="span">行业动态</router-link>
            </li>
            <li>
              <router-link to="/solution" tag="p">服务提供</router-link>
              <router-link to="/solution" tag="span">卫生健康</router-link>
              <router-link to="/solution" tag="span">生态环境</router-link>
              <router-link to="/solution" tag="span">智能化升级</router-link>
            </li>
            <li>
              <router-link to="/product-list" tag="p">产品中心</router-link>
              <router-link to="/product-list" tag="span">医废称</router-link>
              <router-link to="/product-list" tag="span">医废小秤</router-link>
              <router-link to="/product-list" tag="span">危废柜</router-link>
              <router-link to="/product-list" tag="span">危废秤</router-link>
              <router-link to="/product-list" tag="span">AI盒子</router-link>
            </li>
            <li>
              <router-link to="/join-us" tag="p">加入我们</router-link>
              <router-link to="/join-us" tag="span">人才发展</router-link>
              <router-link to="/join-us" tag="span">员工风采</router-link>
            </li>
            <li>
              <router-link to="/online-experience" tag="p">在线体验</router-link>
            </li>
            <li>
              <router-link to="/contact" tag="p">联系星联</router-link>
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
      menuList: [
        {
          path:'/',
          name: '首页',
        },
        {
          path:'/goin',
          name: '走进星联',
          parts: [
            {
              path:'/goin?part=content-summary',
              name: '公司简介',
            },
            {
              path:'/goin?part=content-honor',
              name: '资质荣誉',
            },
            {
              path:'/goin?part=content-case',
              name: '企业案例',
            },
            {
              path:'/goin?part=content-team',
              name: '团队风采',
            },
          ]
        },
        {
          path:'/news',
          name: '新闻中心',
        },
        {
          path:'/solution',
          name: '解决方案',
        },
        {
          path:'/product-list',
          name: '产品中心',
        },
        {
          path:'/join-us',
          name: '加入我们',
        },
        {
          path:'/online-experience',
          name: '在线体验',
        },
        {
          path:'/contact',
          name: '联络星联',
        },
      ]
    };
  },
  methods: {
    goPage(val){
      this.$router.push({path: val})
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
  align-items: center;
  width: 100%;
  margin: 0 auto;
  //background-color: #fff;

  .logo {
    width: 280px;
    height: 37px;
    img {
      width: 100%;
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
          cursor: pointer;
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          cursor: pointer;
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
.el-header{
  height: 70px !important;
}
.el-menu--horizontal>.el-menu-item{
  height: 70px;
  line-height: 70px;
  font-size: 18px;
}
.el-menu.el-menu--horizontal{
  border-bottom: none !important;
}
</style>
<style scoped lang="scss"> 
.menu{
  display: flex;
}
.part{
  cursor: pointer;
  line-height: 32px;
  &:hover{
    color: #409EFF
  }
}
.menu-item{
  cursor: pointer;
  width: 112px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 16px;
  color: #909399;
  box-sizing: border-box;
  &:hover{
    color: #333;
  } 
  &.active{
    color: #409EFF;
    border-bottom: 2px solid #409EFF
  }
  &:focus{
    outline: none;
  }
}
</style>
