<template>
  <div class="product">
    <div class="banner">
      <div>产品中心</div>
    </div>
    <div class="product-content ">
      <div class="view-center">
        <div class="card" v-for="(item,index) in list" :key="index" @click="goDetail(item)">
          <div class="img"><img :src="item.src" alt=""></div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  data() {
    return {
      list:[
        {
          src: require('../assets/image/page5/2-17.jpg'),
          title: "基于物联网的医废称重器",
          id: '1',
        },
        {
          src: require('../assets/image/page5/2-18.jpg'),
          title: "蓝牙便携式医废称重器",
          id: '2',
        },
        {
          src: require('../assets/image/page5/2-19.jpg'),
          title: "危废称重一体化终端控制箱",
          id: '3',
        },
        {
          src: require('../assets/image/page5/2-20.jpg'),
          title: "智能物联网电子磅秤",
          id: '4',
        },
        {
          src: require('../assets/image/page5/2-21.jpg'),
          title: "边缘计算智能分析盒子",
          id: '5',
        },
        {
          src: require('../assets/image/page5/2-22.jpg'),
          title: "工业级平板",
          id: '6',
        },
        {
          src: require('../assets/image/page5/2-23.jpg'),
          title: "碳带、热敏多功能一体打印机",
          id: '7',
        },
        {
          src: require('../assets/image/page5/2-24.jpg'),
          title: "医废代管入库",
          id: '8',
        },
      ]
    };
  },
  components: {
    Banner
  },
  methods: {
    goDetail(item){
      this.$router.push({path:'product',query:{
        id: item.id,
        name: item.title
      }})
    }
  }


};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .banner{
    height: 380px;
    background: url(../assets/image/page5/banner.jpg) no-repeat center;
    color: #fff;
    font-size: 45px;
    line-height: 380px;
    text-align: center;
  }
  .product-content{
    width: 1380px;
    margin: 120px auto 60px;
    .view-center{
      margin-left: -60px;
      overflow: hidden;
    }

  }
  .card{
    cursor: pointer;
    background: #fff;
    width: 400px;
    box-sizing: border-box;
    height: 330px;
    border: 1px #d8d8d8 solid;
    margin-left: 60px;
    margin-bottom: 60px;
    float: left;
    text-align: center;
    .img{
      height: 258px;
      box-sizing: border-box;
      position: relative;
      img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 150px;
      }
    }
    .title{
      height: 72px;
      line-height: 72px;
      color: #fff;
      font-size: 20px;
      background: #2da1ea;
    }
  }
}




</style>