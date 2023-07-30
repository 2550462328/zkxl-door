<template>
  <div class="home" v-loading="loading">
    <swiper
      id="swiperBox"
      class="swiper-wrapper"
      v-bind:options="swiperOption"
      ref="mySwiper"
    >
      <swiper-slide class="swiper-slide slide-one">
        <div class="video">
          <img src="../assets/image/page1/xc.gif" alt="">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-two">
        <div class="page">
          <h3>解决方案</h3>
          <p>SOLUTION</p>
        </div>
        <ul class="case-item">
          <li
            v-for="(item, index) in caseList"
            :key="index"
            v-lazy:background-image="item.src"
          >
          <div class="des">{{ item.title }}</div>
            <!-- <router-link
              class="text-decoration"
              :to="{ name: 'casedetails', params: { id: item.Id } }"
            >
              <div class="case-item-hover">
                <p class="hover-title">{{ item.Title }}</p>
                <div class="bottom"></div>
                <div class="more">
                  <span>MORE</span>
                </div>
              </div>
            </router-link> -->
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-three">
        <div class="page" @click="goProduct">
          <h3>产品中心</h3>
          <p>Product center  </p>
        </div>
        <div class="news-content">
          <div class="news-content-box">
            <div class="news-content-item" v-for="(news, i) in newsList" :key="i">
              <img :src="news.src" alt="">
              <div class="news-content-item-title">{{ news.title }}</div>
              <div class="link">Read More</div>
            </div>
            <div class="news-content-item">
              <div class="news-content-item-info">
                <p>电话：0551-63468772</p>
                <p>邮箱：zk-stars@139.com</p>
                <p>地址：中国科学技术大学国际金融院四号楼</p>
              </div>
              <div class="news-content-item-flex">
                <div class="news-content-item-flex-box">
                  <img class="er" src="../assets/image/page1/er.png" alt="">
                </div>
                <div class="news-content-item-flex-box">
                  <p style="padding-top: 24px;">关注公众号</p>
                  <p>了解更多详情</p>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>
 
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "HelloWorld",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      loading: true,
      caseList: [
        {
          'src': require('../assets/image/page1/1-03.jpg'),
          'title': "信息系统集成",
        },
        {
          'src': require('../assets/image/page1/1-04.jpg'),
          'title': "电子与智能化工程",
        },
        {
          'src': require('../assets/image/page1/1-05.jpg'),
          'title': "环境工程及综合运维",
        },
        {
          'src': require('../assets/image/page1/1-06.jpg'),
          'title': "绿色循环",
        },
      ],
      newsList: [
        {
          'src': require('../assets/image/production1.png'),
          'title': "基于物联网的医废称重器",
        },
        {
          'src': require('../assets/image/production2.png'),
          'title': "蓝牙便捷式医废称重器",
        },
        {
          'src': require('../assets/image/production3.png'),
          'title': "危废称重一体化终端控制箱",
        },
        {
          'src': require('../assets/image/production4.png'),
          'title': "智能物联网电子磅秤",
        },
        {
          'src': require('../assets/image/production5.png'),
          'title': "边缘计算智能分析盒子",
        },
      ],
      swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight - 60, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //debugger: true,

        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        on: {
          //监听滑动切换事件，返回swiper对象
          // slideChange: () => {
          //   let swiper = this.$refs.mySwiper.swiper;
          //   //console.log(swiper.activeIndex); //滑动打印当前索引
          //   if (swiper.activeIndex === this.list.length - 1) {
          //     //到最后一个加载更多数据
          //     let newList = [];
          //     let listLength = this.list.length;
          //     for (let i = 0; i < 10; i++) {
          //       newList.push(listLength + i);
          //     }
          //     this.list = this.list.concat(newList);
          //   }
          // }
        },
      },
    };
  },
  created() {},
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    this.loading = false;
  },
  methods:{
    goProduct(){
      this.$router.push({name: 'productList'})
    }
  }
};
</script>
 
<style lang="scss" scoped>
/* .el-header {
  position: absolute;
} */
.swiper-slide {
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .page {
    margin-top: 200px;
    text-align: center;
    height: 100px;
    overflow: hidden;
    h3 {
      font-size: 35px;
      font-weight: 200;
      color: #23649a;
      margin-bottom: 5px;
    }
    p {
      font-size: 20px;
      font-weight: 200;
      color: #23649a;
      box-sizing: border-box;
    }
  }

  .slogan {
    // outline: 1px solid #fff;
    
    display: flex;
    width: 400px;
    margin: 0px auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    vertical-align: middle;
    font-size: 40px;
    font-weight: 200;
    color: #fff;
    padding: 20px 20px 10px 20px;
    padding-top: 310px;
    color: #fff;
    text-shadow:2px 2px #000;
    p {
      margin-bottom: 10px;
    }
    .mb20{
      margin-bottom: 30px;
    }
  }
}
//经典案例
.case-item {
  width: 1733px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  li {
    width: 406px;
    height: 265px;
    list-style: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    margin: 5px;
    position: relative;
    overflow: hidden;
    text-align: center;
    .des{
      margin-top: 105px;
      display: inline-block;
      height: 54px;
      line-height: 54px;
      padding: 0 32px;
      background: #256499;
      font-size: 32px;
      color: #fff;
    }
    &:hover {
      .case-item-hover {
        opacity: 1;
        transition: all 0.4s ease-in-out;
      }
    }
  }
}
//经典案例hover
.case-item-hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  background-color: rgba(225, 56, 52, 0.7);

  .hover-title {
    height: 50px;
    color: #fff;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin-top: 20px;
  }
  .bottom {
    border-bottom: 1px solid #fff;
    width: 60px;
    margin: 0 auto;
  }
  .more {
    width: 90px;
    padding: 5px 5px;
    margin: 0 auto;
    margin-top: 100px;
    border: 2px solid #fff;
    span {
      color: #fff;
      font-size: 20px;
    }
  }
}
// .swiper-slide:nth-child(2n) {
//   background: skyblue;
// }
// .swiper-slide:nth-child(2n-1) {
//   background: seashell;
// }

.slide-two {
  background: url(../assets/image/page1/bg2.jpg) no-repeat center;
  background-size: cover;
}
.slide-three {
  background: url(../assets/image/page1/bg3.jpg) no-repeat center;
  background-size: cover;
  .page {
    margin-top: 50px;
  }
}
//最新资讯
.news-content {
  width: 1036px;
  margin: 0 auto;
  margin-top: 20px;
  
  .news-content-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .news-content-item-flex{
    display: flex;
    justify-content: space-between;
  }
  .news-content-item-flex-box{
    width: 110px;
    height: 110px;
    border: 1px #acacac solid;
    font-size: 12px;
    color: #909090;
    text-align: center;
    line-height: 30px;
    .er{
      width: 100%;
      height: 100%;
    }
  }
  .news-content-item-info{
    color: #333;
    font-size: 12px;
    border-left: 2px #a8a8a8 solid;
    padding-left: 4px;
    margin-bottom: 10px;;
  }
  .news-content-item{
    width: 290px;
    height: 230px;
    margin-bottom: 80px;
    background: #fff;
    border: 1px #c6c6c8 solid;
    box-sizing: border-box;
    padding: 26px 26px;
    img{
      height: 60px;
    }
    .news-content-item-title{
      margin-top: 10px;
      font-size: 18px;
    }
    .link{
      font-size: 12px;
      display: inline-block;
      margin-top: 50px;
      color: #4d81ad;
      border-bottom: 2px #4d81ad solid;
      cursor: pointer;
    }
  }
  
}
.order {
  order: -1;
}
.order-img {
  order: 1;
}
.video{
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>