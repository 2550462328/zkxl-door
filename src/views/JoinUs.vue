<template>
  <div class="product">
    <div class="banner">
      <div>加入我们</div>
    </div>
    <div class="product-content ">
      <div class="hd">
        <p>加入我们</p>
        <p>相信您可以为我们带来惊喜</p>
      </div>
      <div class="view-center">
        <div class="card" v-for="(item,index) in list" :key="index" @click="goDetail(item)">
          <div class="name">{{ item.name }}</div>
          <div class="education des">{{ item.education }}</div>
          <div class="major des">{{ item.major }}</div>
          <div class="address des">{{ item.address }}</div>
          <div class="add"></div>
        </div>
      </div>
    </div>
    <div v-if="detailShow" class="detail">
      <div class="main">
        <div class="close" @click="close"></div>
        <div class="hd">
          <div class="tit">{{ current.name }}</div>
          <div class="des"><span>学历：{{ current.education }}</span><span style="margin-left: 40px">工作地点：{{ current.address }}</span><div style="margin-top: 20px;">专业：{{ current.major }}</div></div>
        </div>
        <div class="bd">
          <div class="require mb">岗位要求：</div>
          <div v-for="(condition,index) in current.conditions" :key="index" class="condition mb">{{ index + '、' + condition }}</div>
          <div class="contact">
            <p class="mb">联系方式: 0551-63468772</p>
            <p>邮箱: zk-stars@139.com</p>
          </div>
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
      detailShow: false,
      current:{},
      list:[
        {
          name: "项目营销经理",
          education: '大专以上',
          major: '相关专业',
          address: '工作地点：合肥',
          conditions: [
            '有2个以上完整项目营销的成功经验;',
            '在大型房地产企业中有独立操盘经验，并覆盖项目全周期;',
            '有参与项目定位的高质量经验;',
            '有跨职能协调的成功经验;',
            '有外部资源整合的成功经验;',
          ]
        },
        {
          name: "项目营销经理",
          education: '本科以上学历',
          major: '5年以上相关专业',
          address: '工作地点：合肥',
          conditions: [
            '有2个以上完整项目营销的成功经验;',
            '在大型房地产企业中有独立操盘经验，并覆盖项目全周期;',
            '有参与项目定位的高质量经验;',
            '有跨职能协调的成功经验;',
            '有外部资源整合的成功经验;',
          ]
        },
        {
          name: "产品经理",
          education: '大专以上',
          major: '3年以上相关专业',
          address: '工作地点：合肥',
          conditions: [
            '有2个以上完整项目营销的成功经验;',
            '在大型房地产企业中有独立操盘经验，并覆盖项目全周期;',
            '有参与项目定位的高质量经验;',
            '有跨职能协调的成功经验;',
            '有外部资源整合的成功经验;',
          ]
        },
     
      ]
    };
  },
  components: {
    Banner
  },
  methods: {
    goDetail(item){
      this.current = item;
      this.detailShow = true;
    },
    close(){
      this.detailShow = false;
      this.current = {};
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
    background: url(../assets/image/page6/banner.jpg) no-repeat center;
    color: #fff;
    font-size: 45px;
    line-height: 380px;
    text-align: center;
  }
  .product-content{
    width: 1560px;
    margin: 0 auto ;
    .hd{
      padding-top: 60px;
      font-size: 30px;
      color: #333;
      line-height: 60px;
      text-align: center;
    }
    .view-center{
      margin-left: -90px;
      overflow: hidden;
      padding: 100px 0 150px;
    }

  }
  .card{
    cursor: pointer;
    background: #fff;
    width: 450px;
    box-sizing: border-box;
    height: 330px;
    margin-left: 90px;
    float: left;
    box-shadow: 0px 0px 4px 4px #eee;
    padding: 24px 48px;
    &:hover{
      background: #256499;
      .name,.des{
        color: #fff;
      }
      .add{
        background-image: url(../assets/image/page6/add-on.png);
      }
    }
    .name{
      font-size: 24px;
      line-height: 48px;
      color: #000;
    }
    .des{
      font-size: 20px;
      line-height: 50px;
      color: #939393;
    }
    .add{
      margin-top: 36px;
      width: 26px;
      height: 26px;
      background: url(../assets/image/page6/add.png) no-repeat left center;
      background-size: 100%;
    }
  }
  .detail{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    .main{
      width: 860px;
      height: 630px;
      background: #fff;
      border-radius: 4px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -430px;
      margin-top: -315px;
      .close{
        cursor: pointer;
        position: absolute;
        z-index: 9;
        right: 50px;
        top: 30px;
        width: 30px;
        height: 30px;
        background: url(../assets/image/page6/close-1.png) no-repeat center;
        background-size: 100%;
        &:hover{
          background-image: url(../assets/image/page6/close-2.png);
        }
      }
      .hd{
        height: 230px;
        background: url(../assets/image/page6/top.png) no-repeat center;
        background-size: cover;
        padding: 36px;
        box-sizing: border-box;
        color: #fff;
        .tit{
          font-size: 28px;
          margin-bottom: 30px;
          opacity: 0.8;
        }
        .des{
          font-size: 20px;
          opacity: 0.8;
        }
      }
      .bd{
        padding: 36px;
        .mb{
          margin-bottom: 10px;
        }
        .require{
          font-size: 26px;
          margin-bottom: 20px;
        }
        .condition{
          font-size: 20px;
          color: #808080;
        }
        .contact{
          margin-top: 30px;
          font-size: 20px;
          color: #26639a;
        }
        
      }
    }
  }
}




</style>