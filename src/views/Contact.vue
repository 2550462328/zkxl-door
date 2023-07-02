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
        <p>行政地址：</p>
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
      </div>
      <div class="right">
        <img src="../assets/image/qr.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner
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
    height: 532px;
    background: url(../assets/image/page8/banner.png) no-repeat center;
    color: #fff;
    font-size: 45px;
    line-height: 465px;
    text-align: center;
  }
  .content{
    padding: 50px 0 150px;
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
}
</style>

