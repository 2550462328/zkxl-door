<template>
  <div class="go-in">
    <div class="banner">
      <img src="../assets/image/page2/banner.png" alt="">
    </div>
    <div class="section" v-loading="loading">
      <div class="section-content">
        <div class="content-summary module">
          <div class="hd">
            <p class="title">公司简介</p>
            <p class="eTitle">COMPANY PROFILE</p>
          </div>
          <div class="bd">
            <div class="summary-left">
              <div class="mb20">
                <a href="">公司概况 <span>>>></span></a>
                <p class="content">
                  中科星联技术有限公司——“中科星联”是顺应国家十四五战略规划，在加强科技创新建设的环境下，致力于应对健康与环境安全的一家高新技术企业。中科星联创建于创新与务实并蓄的科技名城——安徽合肥，落户在中国科学技术大学国际金融研究院科创中心平台上，是中心孵化的第一家实战型科技企业。
                </p>
              </div>
              <div class="mb20">
                <a href="">公司实力 <span>>>></span></a>
                <p class="content">实干开新局，蓄势求突破。“中科星联”陆续推出水质在线监测系统、职业病监督执法综合管理系统、病媒生物密度监测系统等，为医疗机构、工业产废单位、卫生健康委、生态环境部门提供全闭环的数据解决方案及数据处理服务。中科星联将会一如继往，当好守护人民健康环境的勤务兵。</p>
              </div>
              <div>
                <a href="">中科星联在行动 <span>>>></span></a>
                <p class="content">中科星联以国际名校中国科学技术大学和上海交通大学人才为辐射源头，依托安徽理工大学重点实验室为载体，将智慧健康、智慧环保作为主要研发方向，致力于现代通信技术、移动物联、大数据技术的深挖与应用。首期推出的医废溯源管理系统、危废智控系统，基于智慧物联网技术，已广泛应用于卫生健康及生态环保领域。</p>
              </div>
            </div>
            <div class="summary-right">
              <img src="../assets/image/page2/1-02.png" alt />
            </div>
          </div>
          
        </div>
        <!-- 公司荣誉 -->
        <div class="content-honor module">
          <div class="honor-big-img">
            <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible">
              <img v-lazy="dialogUrl" alt />
            </el-dialog>
          </div>
          <div class="hd">
            <p class="title">资质荣誉</p>
            <p class="eTitle">QUALIFICATIONS AND HONORS</p>
          </div>
          <ul class="honor-show">
              <li v-for="(honor,index) in honorList" :key="index">
                <img
                  v-lazy="honor.Img"
                  @click="dialogTableVisible = true ;dialogUrl = honor.Img;dialogTitle= honor.Remark"
                />
              </li>
            </ul>
            <ul class="honor-show honor-show2">
              <li v-for="(honor,index) in honorList2" :key="index">
                <img
                  v-lazy="honor.Img"
                  @click="dialogTableVisible = true ;dialogUrl = honor.Img;dialogTitle= honor.Remark"
                />
              </li>
            </ul>
        </div>
        <div class="content-case module">
          <div class="hd">
            <p class="title">企业案例</p>
            <p class="eTitle">ENTERPRISE CASE</p>
          </div>
          <div class="bd">
            <img src="../assets/image/page2/1-17.png" alt="">
          </div>
        </div>
        <!-- 团队风采 -->
        <div class="content-team module">
          <div class="hd">
            <p class="title">团队风采</p>
            <p class="eTitle">TEAM</p>
          </div>
          <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="(team,index) in teamItem" :key="index">
              <div class="swiper-img" v-lazy:background-image="team.Img"></div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import { swiper, swiperSlide } from "vue-awesome-swiper";
let honor1 = require('../assets/image/page2/1-03.png')
let honor2 = require('../assets/image/page2/1-04.png')
let honor3 = require('../assets/image/page2/1-05.png')
let honor4 = require('../assets/image/page2/1-06.png')
let honor5 = require('../assets/image/page2/1-07.png')
let honor6 = require('../assets/image/page2/1-08.png')

let honor7 = require('../assets/image/page2/1-09.png')
let honor8 = require('../assets/image/page2/1-10.png')
let honor9 = require('../assets/image/page2/1-11.png')
let honor10 = require('../assets/image/page2/1-12.png')
let honor11 = require('../assets/image/page2/1-13.png')
let honor12 = require('../assets/image/page2/1-14.png')
let honor13 = require('../assets/image/page2/1-15.png')
let honor14 = require('../assets/image/page2/1-16.png')
export default {
  components: {
    Banner,
    swiper,
    swiperSlide
  },
  data() {
    return {
      loading: true,
      honorList: [
        {
          Img: honor1,
        },
        {
          Img: honor2,
        },
        {
          Img: honor3,
        },
        {
          Img: honor4,
        },
        {
          Img: honor5,
        },
        {
          Img: honor6,
        },
      ],
      honorList2: [
        {
          Img: honor7,
        },
        {
          Img: honor8,
        },
        {
          Img: honor9,
        },
        {
          Img: honor10,
        },
        {
          Img: honor11,
        },
        {
          Img: honor12,
        },
        {
          Img: honor13,
        },
        {
          Img: honor14,
        },
      ],
      partnerImg: [],
      courseList: [],
      teamItem: [
        {
          Img: '/backend/imagestore/2019/0426/f929d681-38c3-4d4f-b845-fa695f4801e8.jpg'
        },
        {
          Img: '/backend/imagestore/2019/0426/f929d681-38c3-4d4f-b845-fa695f4801e8.jpg'
        },
        {
          Img: '/backend/imagestore/2019/0426/f929d681-38c3-4d4f-b845-fa695f4801e8.jpg'
        },
        {
          Img: '/backend/imagestore/2019/0426/f929d681-38c3-4d4f-b845-fa695f4801e8.jpg'
        },
        {
          Img: '/backend/imagestore/2019/0426/f929d681-38c3-4d4f-b845-fa695f4801e8.jpg'
        },
      ],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      dialogTableVisible: false,
      dialogUrl: "",
      dialogTitle: ""
    };
  },
  mounted() {
    this.loading = false;
    this.$http
      .all([
        this.$http.get("Honor/GetHonorAll"),
        this.$http.get("Enterprise/GetEnterpriseAll"),
        this.$http.get(`Team/GetTeamAll`),
        this.$http.get(`Course/GetCourseAll`)
      ])
      .then(
        this.$http.spread(
          (responseHonor, responseEnterprise, responseTeam, responseCourse) => {
            this.partnerImg = responseEnterprise.data;
            this.teamItem = responseTeam.data;

            var groupCount = Math.ceil(responseCourse.data.length / 2);
            window.console.log(groupCount);
            for (let i = 0; i < groupCount; i++) {
              let img2 = [];
              for (let j = 0; j < 2; j++) {
                if (responseCourse.data.length - 1 >= i * 2 + j) {
                  img2.push(responseCourse.data[i * 2 + j]);
                }
              }
              this.courseList.push(img2);
            }
            window.console.log(this.courseList);
            this.loading = false;
          }
        )
      );
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.mb20{
  margin-bottom: 20px;
}

.go-in {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .banner{
    img{
      width: 100%;
    }
  }
  .module{
    .hd{
      text-align: center;
      padding-top: 44px;
      padding-bottom: 40px;
      .title{
        font-size: 24px;
        margin-bottom: 10px;
      }
      .eTitle{
        font-size: 12px;
        color: #ccc;
      }
    }
  }
  .section {
    width: 100%;
    &-content {
      width: 1240px;
      margin: 0 auto;
      background-color: #fff;

      .content-summary {
        width: 1448px;
        margin-left: -104px;
        .bd{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          align-items: center;
        }
        //height: 500px;
        .summary-left {
          width: 600px;
          .title {
            font-size: 25px;
            color: #e13834;
          }
          .eTitle {
            font-size: 17px;
            color: #e13834;
            padding: 20px 0;
          }
          a{
            display: block;
            font-size: 24px;
            color:#1667a0;
            cursor: pointer;
            text-decoration: none;
            margin-bottom: 10px;
            span{
              color:#333;
            }
          }
          .content {
            color: #000;
            font-size: 16px;
            text-indent: 25px;
            line-height: 30px;
            text-align:justify;
          }
        }

        .summary-right {
          width: 717px;
          border-radius: 10px;
          text-align: center;

          img {
            width: 100%;
            //animation: imgbo 4s infinite;
          }
        }
      }

      //发展历程
      .content-course {
        padding: 50px 0;
        .course-time {
          width: 1000px;
          height: 400px;
          margin: 20px auto;
          .swiper-container {
            height: 100%;
          }
          .time-show {
            width: 700px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            .time-show-item {
              width: 350px;
              height: 100%;
              overflow: hidden;
              display: flex;
              flex-direction: column;

              .item-top,
              .item-bottom {
                height: 190px;
              }
              .item-bottom {
                // display: flex;
                // align-content: center;
                .item-bottom-content {
                  background-color: #1667a0;
                  margin: 20px 0;
                  p {
                    color: #fff;
                    text-align: center;
                    padding: 15px;
                  }
                }
              }
            }
          }
        }
      }

      //企业文化
      .content-culture {
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 100px;
        background-color: #c2daeb;
        h3 {
          color: #3c6088;
          font-size: 26px;
        }
        p {
          color: #3c6088;
          font-size: 26px;
          padding: 5px 0;
        }
        span {
          font-weight: 400;
          line-height: 36px;
          font-size: 18px;
          padding: 5px 0;
        }
      }

      //公司荣誉
      .content-honor {
        padding: 50px 0 10px;
        .honor-show {
          width: 1100px;
          height: 245px;
          margin: 0px auto 30px;
          
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: flex-start;
          position: relative;
          li {
            cursor: pointer;
            position: absolute;
            top:0;
            
            width: 220px;
            height: 245px;
            list-style: none;

            img {
              width: 100%;
              height: 100%;
            }
          }
          li:nth-child(1){
            left:0;
          }
          li:nth-child(2){
            left:110px;
          }
          li:nth-child(3){
            width: 346px;
            left:220px;
          }
          li:nth-child(4){
            width: 346px;
            z-index: 9;
            right:220px;
          }
          li:nth-child(5){
            z-index: 8;
            right:110px;
          }
          li:nth-child(6){
            z-index: 7;
            right:0;
          }
        }
        .honor-show2{
            height: 350px;
          li{
            width: 254px;
            height: 357px;
          }
          li:nth-child(1){
            left:0;
          }
          li:nth-child(2){
            left:110px;
          }
          li:nth-child(3){
            width: 220px;
            left:220px;
          }
          li:nth-child(4){
            width: 220px;
            z-index: 9;
            left:330px;
          }
          li:nth-child(5){
            width: 220px;
            z-index: 8;
            right:330px;
          }
          li:nth-child(6){
            width: 220px;
            z-index: 7;
            right:220px;
          }
          li:nth-child(7){
            z-index: 6;
            right:110px;
          }
          li:nth-child(8){
            z-index: 6;
            right:0;
          }
        }
        p {
          text-align: center;
          color: #3c6088;
        }
      }
      .content-case{
        margin-bottom: 10px;
        .bd{
          display: inline-block;
        }
      }

      //团队风采
      .content-team {
        padding: 50px 100px;
        .swiper-img {
          height: 400px;
          background: no-repeat center;
          background-size: cover;
        }
      }

      //合作伙伴
      .content-partner {
        padding: 50px 0;
        .partner-img {
          width: 950px;
          margin: 20px auto;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          li {
            width: 107px;
            height: 107px;
            list-style: none;
            margin: 10px 25px;

            img {
              width: 100%;
              height: 100%;
              border: 1px solid rgb(194, 218, 235);
            }
          }
        }
      }
    }
  }
}

@keyframes imgboxkey {
  0% {
    border: solid rgb(29, 66, 185) 2px;
  }
  40% {
    border: solid rgb(255, 255, 255) 2px;
  }
  60% {
    border: solid rgb(255, 255, 255) 2px;
  }
  100% {
    border: solid rgb(29, 66, 185) 2px;
  }
}

@keyframes imgbo {
  0% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 5px #ababab;
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
}
.el-divider--horizontal {
  margin: 1px 0;
}

.top {
  h3,
  p {
    text-align: center;
    color: #3c6088;
    font-weight: 400;
    padding: 10px 0;
  }
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  .border {
    border-bottom: 1px solid #3c6088;
    width: 15%;
    margin: 0 auto;
  }
}
// .swiper-button-disabled {
//   display: none;
// }
.order {
  order: -1;
}
.order-top {
  order: 1;
}
.el-divider {
  background-color: red;
  height: 3px;
  .el-divider__text {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 0px;
    color: #fff;
    border: 3px solid red;
  }
}
.el-divider-active {
  background-color: #3c6088;
}
.honor-big-img {
  width: 100%;
  padding: 0;
  z-index: 10;
  text-align: center;
  //background-color: #14679f;
  .el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;

    .el-dialog__body {
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}
</style>