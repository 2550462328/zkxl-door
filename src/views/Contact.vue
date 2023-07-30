<template>
  <div class="contact">
    <div class="banner">
        <div>联系我们</div>
      </div>
    <div class="content">
      <div class="left">
        <div class="title">联系我们</div>
        <div class="etitle">contact</div>
        <div class="etitle">us</div>
      </div>
      <div class="mid">
        <div class="item">
          <div class="label">总部</div>
          <div>| &nbsp;合肥市广西路中国科学技术大学国际金融研究院四号楼</div>
        </div>
        <div class="item">
          <div class="label">市内服务中心</div>
          <div>| &nbsp;合肥市稻香路9号蜀山科技创业中心五楼</div>
        </div>
        <div class="item">
          <div class="label">厂址</div>
          <div>| &nbsp;淮南市山南新区高新区双创中心二期厂房</div>
        </div>
        <div class="item">
          <div class="label">公司电话</div>
          <div>| &nbsp;0551-63468772</div>
        </div>
        <div class="item">
          <div class="label">网址</div>
          <div>| &nbsp;www.zkxl.net</div>
        </div>
        <div class="item">
          <div class="label">邮箱</div>
          <div>| &nbsp;zk-stars@139.com</div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/image/qr.jpg" alt="">
      </div>
    </div>
    <div class="map" @click="goMap">
      <img src="../assets/image/page8/map.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner
  },
  methods: {
    goMap(){
      window.open('https://map.baidu.com/poi/%E5%AE%89%E5%BE%BD%E4%B8%AD%E7%A7%91%E6%98%9F%E8%81%94%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@13039132.328414269,3718731.3996959305,14.91z?uid=b0142f64c492524ff03cbae7&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl')
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.contact {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  .banner{
    height: 380px;
    background: url(../assets/image/page8/banner.jpg) no-repeat center;
    color: #fff;
    font-size: 45px;
    line-height: 380px;
    text-align: center;
  }
  .content{
    padding: 100px 0 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    .left{
      width: 300px;
      .title{
        font-size: 28px;
        color: #24649a;

      }
      .etitle{
        font-size: 40px;
        color: #f6f6f6;
      }
    }
    .mid{
      width: 611px;
      font-size: 16px;
      color: #454545;
      p{
        margin-bottom: 16px;
      }
      .item{
        display: flex;
        margin-bottom: 16px;
      }
      .label{
        width: 114px;
      }
    }
    .right{
      width: 104px;
      height: 104px;
      padding: 8px;
      border: 2px #000 dashed;
      img{
        width: 100%;
      }
    }
  }
  .map{
    cursor: pointer;
    text-align: center;
    margin-bottom: 150px;
  }
}
</style>

