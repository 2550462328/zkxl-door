<template>
    <div class="online-experience">
      <div class="banner">
        <div class="text">
          <div class="tit">在线体验</div>
          <div class="des">请联系客户经理索取体验帐号</div>
        </div>
      </div>
      <div class="content">
        <div class="item">
            <div class="img"><img src="../assets/image/page7/1-02.png" alt=""></div>
            <div class="intro">
                <div class="title">医疗废弃物溯源管理系统</div>
                <div class="paragraph">基于物联网技术的"互联网+"医疗废弃物溯源管理系统能够跟踪医废在院内流转的全过程。系统使用二维码、RFID以及4G技术为核心，以电子秤，手持机、管理后台为应用终端。从而实现院方对医废的在科室打包、院内运输、暂存点入库、出库过程中的实时监管，在大力加强医疗安全管理、生态卫生治理的同时节约了人力成本。</div>
                <a href="http://ay2fy.yf.ahwfy.net/login?redirect=%2Fdashboard" target="_blank">进入系统</a>
            </div>
            
        </div>
        <div class="item">
            <div class="intro">
                <div class="title">危废智能称重管理系统</div>
                <div class="paragraph">通过物联网设备和管理APP，为企业搭建一套智能化的危险废物管理系统，帮助环保负责人实现从危废称重、标签填列、出/入库、申报到转移等全流程的业务自动化，解决企业在危废规范化管理中包装标签不规范、贮存台账不准确、申报联单不及时等问题。</div>
                <a href="" target="_blank">进入系统</a>
            </div>
            <div class="img"><img src="../assets/image/page7/1-03.png" alt=""></div>
        </div>
      </div>
    </div>
  </template>
  
<script>
    export default {

    }
</script>

<style lang="scss" scoped> 
* {
  margin: 0;
  padding: 0;
}
.online-experience {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  .banner{
    height: 380px;
    background: url(../assets/image/page7/banner.jpg) no-repeat center;
    color: #fff;
    
    
    line-height: 380px;
    text-align: center;
    .tit{
      font-size: 45px;
      font-weight: 400;
      line-height: 68px;
    }
    .des{
      font-size: 34px;
      line-height: 68px;
    }
    .text{
      padding-top: 115px;
      opacity: 0.8;
    }
  }
  .content{
    width: 1212px;
    margin: 80px auto;
    .item{
        display: flex;
        
    }
    .img{
        width: 606px;
        height: 306px;
        background: #f3f3f3;
        img{
            width: 100%;
        }

    }
    .intro{
        width: 606px;
        height: 306px;
        background: #f9f9f9;
        box-sizing: border-box;
        padding: 30px;
        .title{
            font-size: 22px;
            line-height: 42px;
            margin-bottom: 10px;
        }
        .paragraph{
            font-size: 16px;
            line-height: 32px;

        }
        a{
            display: block;
            float: right;
            color: #15669e;
            text-decoration: none;
            padding:8px ;
            border-bottom: 3px #15669e solid;
            &:hover{
                color: #2da1ea;
            }
        }
    }
  }
}
</style>