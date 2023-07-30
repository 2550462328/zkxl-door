<template>
    <div class="solution">
      <div class="banner">
        <div>解决方案</div>
      </div>
      <div class="content">
        <div class="content-nav-bg">
            <div class="content-nav">
                <div
                    class="content-nav-btn"
                    :class="{'content-nav-active':newstype == 1}"
                    @click="newstype = 1"
                >
                    <span>卫生健康</span>
                </div>
                <div
                    class="content-nav-btn"
                    :class="{'content-nav-active':newstype == 2}"
                    @click="newstype = 2 "
                >
                    <span>生态环境</span>
                </div>
                <div
                    class="content-nav-btn"
                    :class="{'content-nav-active':newstype == 3}"
                    @click="newstype = 3 "
                >
                    <span>智能化升级</span>
                </div>
            </div>
        </div>
        <div v-if="newstype === 1" class="content-wrapper">
            <div class="side-nav" ref="sideNav">
                <div class="hd">卫生健康解决方案</div>
                <div class="bd">
                    <div v-for="item in tabs" :key="item.value" class="item" :class="item.value === current ? 'active' : ''" @click="switchTab(item.value)">
                        <div class="text"> {{ item.name }}</div>
                        <div class="arrow"></div>
                    </div>
                </div>
                <div class="ft">
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
            <div v-if="current === '1'" class="module">
                <div class="main">
                    <div class="bd">
                        <div class="pic-text">
                            <div class="pic"><img src="../assets/image/page4/tu-4.png" alt=""></div>
                            <div class="tit">
                                <div class="left-arrow"></div>
                                <div class="tit-v">平台介绍</div>
                                <div class="right-arrow"></div>
                            </div>
                            <div class="text text-indent">借助互联网、物联网、云计算技术，使医疗机构废弃物的管理进入信息化通道，实时、有效、可视的监控医疗机构废弃物的全生命周期，防止医疗机构废弃物流失导致对社会环境造成危害。通过“医废处置机构协同方案”和“生活垃圾信息化管理协同方案”，逐步将垃圾、污水、污泥等源头单位及处置机构纳入监管平台，为管理部门提供便捷高效的可预警、可监控、可追溯、可共享的信息化管理平台，实现各责任部门对辖区医疗机构废弃物及其他废弃物的全过程监管，形成闭环式监控体系。</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="current === '2'" class="module">
                <div class="main">
                    <div class="bd">
                        <div class="pic-text">
                            <div class="pic"><img src="../assets/image/page4/tu-5.png" alt=""></div>
                            <div class="tit">
                                <div class="left-arrow"></div>
                                <div class="tit-v">平台介绍</div>
                                <div class="right-arrow"></div>
                            </div>
                            <div class="text text-indent">通过物联网、大数据技术形成医废全程智能化管理，系统平台具备医废追溯管理、实时预警、在线追溯、视频监控、三联单管理等功能；实时接收展示医疗废物各流转环节数据信息，系统在线收集医疗卫生机构的医废信息，从医废归类、交接、转移、运输、暂存各个环节进行过程监控，避免漏洞环节导致医废流失，同时有效提升医废交接运输过程的效率。帮助医疗机构和卫生监管部门解决医废管理问题。</div>

                        </div>
                    </div>
                </div>
            </div>
            <div v-if="current === '3'" class="module">
                <div class="main">
                    <div class="bd">
                        <div class="pic-text">
                            <div class="pic"><img src="../assets/image/page4/tu-6.png" alt=""></div>
                            <div class="tit">
                                <div class="left-arrow"></div>
                                <div class="tit-v">平台介绍</div>
                                <div class="right-arrow"></div>
                            </div>
                            <div class="text">
                                <h5><span>1</span>线上预约</h5>
                                <p>从业人员预防性健康体检系统由后台管理系统和微信公众号两部分组成。市民通过微信公众号填写基础信息进行预约登记。从业人员通过微信公众号进行查询、下载，同时支持到窗口打印机一键制证。执法人员可通过微信公众号，输入身份号，进行健康证查验真伪。</p>
                                <h5><span>2</span>高效监管</h5>
                                <p>该系统可以通过微信公众号进行电子健康证临期和到期微信提醒，提升及时体检换证，有效提升安全监管效率。</p>
                                <h5><span>3</span>一键审核</h5>
                                <p>对于体检科室来说，不用担心纸质报告的丢失、查找等问题，系统支持通过体检编号一键查找查体人员体检信息，系统还支持查体人员系统报表生成，方便汇聚查体相关资料报送上级领导单位审核，方便财政审计。</p>
                            </div>
                            
                        </div>
                        <div class="additional">
                            <div class="name">
                                <div class="value">电子健康证管理软件功能介绍</div>
                                <div class="bg"></div>
                            </div>
                            <div class="list">
                                <div class="s-card">
                                    <div class="icon"><img src="../assets/image/page4/1-09.png" alt=""></div>
                                    <div class="txt">体检预约</div>
                                    <div class="des">包含: 体检预约设置、体检预约、预约查看。</div>
                                    <div class="index">1</div>
                                </div>
                                <div class="s-card">
                                    <div class="icon"><img src="../assets/image/page4/1-10.png" alt=""></div>
                                    <div class="txt">体检管理</div>
                                    <div class="des">包含:体检信息录入、体检结果录入、体检结果审核。</div>
                                    <div class="index">2</div>
                                </div>
                                <div class="s-card">
                                    <div class="icon"><img src="../assets/image/page4/1-11.png" alt=""></div>
                                    <div class="txt">电子健康证管理</div>
                                    <div class="des">包含:电子健康证发放、电子健康证查看、电子健康证统计。</div>
                                    <div class="index">3</div>
                                </div>
                                <div class="s-card">
                                    <div class="icon"><img src="../assets/image/page4/1-12.png" alt=""></div>
                                    <div class="txt">系统管理</div>
                                    <div class="des">包含: 用户管理、角色管理、日志管理。</div>
                                    <div class="index">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="current === '4'" class="module">
                <div class="main">
                    <div class="bd">
                        <div class="pic-text">
                            
                            <div class="pic"><img src="../assets/image/page4/tu-2.png" alt=""></div>
                            <div class="tit">
                                <div class="left-arrow"></div>
                                <div class="tit-v">平台介绍</div>
                                <div class="right-arrow"></div>
                            </div>
                            <div class="text">
                                <p class="text-indent">基于环境网格化监测系统的一套实时在线监控，数据 24 小时全天侯实时接收、保存，下载、图表显示、智能分析、智能告警提醒、联动控制声光报警等功能。系统主要包含大屏显示系统、终端显示及控制器、各类型检测的传感器、远程移动端、云端数据平台。主要检测水体的各项指标（余氯、PH值 、浊度、 COD 、温度等关键指标）；当出现异常时，可及时告警。</p>
                                <p class="text-indent">本系统可广泛用于水厂、饮用水、自来水、矿泉水，食品等部门的水质检测，是常用的实时在线监测系统。具有 HJ/T212-2017、工控协议等数据协议覆盖全，系统具有集成度高，功能丰富，安全可靠和开放兼容性好等特点，实现了前端设备“ 云端管理 ， 自动报警，远程查看”的物联网水质管理模式。</p>
                                <p class="text-indent">饮用水水质在线监测装置由进水电磁阀，流通池，各个传感器，信号调理和数据采集装置，4G无线传输到信息平台。</p>
                            </div>
                        </div>
                        <div class="additional">
                            <div class="name name2">
                                <div class="value">系统架构图</div>
                                <div class="bg"></div>
                            </div>
                            <div class="tu">
                                <img src="../assets/image/page4/1-13.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div v-if="current === '5'" class="module">
                <div class="main">
                    <div class="bd">
                        <div class="pic-text">
                            <div class="pic"><img src="../assets/image/page4/tu-6.png" alt=""></div>
                            <div class="tit">
                                <div class="left-arrow"></div>
                                <div class="tit-v">平台介绍</div>
                                <div class="right-arrow"></div>
                            </div>
                            <div class="text">
                                <p class="text-indent">卫生有害生物综合防治管理系统通过一个智能模块来接收数据，再通过红外感应来抓取虫害数据，然后通过通讯网络上传到云平台，即到达的电脑端和手机端。接到报警后，维保人员可以根据定位到指定地点来维保，实现远程监控和实时上传的功能。</p>
                            </div>
                            
                        </div>
                        <div class="additional">
                            <div class="name name3">
                                <div class="value">系统硬件</div>
                                <div class="bg"></div>
                            </div>
                            <div class="tu">
                                <img src="../assets/image/page4/1-14.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "solution",
    components: {
    },
    data() {
      return {
        newstype: 1,
        current: '1',
        tabs: [
            {
                name: '医疗废弃物多部门协同监管平台',
                value: '1',
            },
            {
                name: '医疗废弃物院内在线监管系统',
                value: '2',
            },
            {
                name: '职业健康分级分类执法综合平台',
                value: '3',
            },
            {
                name: '水质在线监测平台',
                value: '4',
            },
            {
                name: '鼠铒站综合布防巡检管理系统',
                value: '5',
            },
        ]
      };
      
    },
    methods: {
        switchTab(val){
            this.current = val;
        }
    },
    mounted() {
        window.onscroll = (e)=>{
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if(!this.$refs.sideNav) return;
            if(scrollTop >= 480){
                this.$refs.sideNav.style.top =  0;
            }else{
                this.$refs.sideNav.style.top = (480 - scrollTop) + 'px';

            }
            
        }
    },
    beforeDestroy(){
        window.onscroll = null;
    },
    watch: {
    }
  };
  </script>
  
  <style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .solution {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    .banner{
      height: 380px;
      background: url(../assets/image/page4/banner.jpg) no-repeat center;
      color: #333;
      font-size: 45px;
      font-weight: 400;
      line-height: 380px;
      text-align: center;
    }
    .content-nav-bg{
        height: 55px;
        background: #fff;
    }
    .content-nav {
        width: 900px;
        height: 55px;
        margin: 0 auto;
        
        display: flex;
        //justify-content: center;
        align-items: center;
        justify-content: center;
        position: relative;
        bottom: 28px;
        &-btn {
          width: 300px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #e4e4e4;
          transition: all 0.2s;
          cursor: pointer;
        }

        .content-nav-active {
          background-color: #2da1ea;
          color: #fff;
        }
      }
    .module{

        background: #fff;
        padding: 36px 50px;
        margin-bottom: 20px;
        .main{
            width: 1200px;
            margin: 0 auto;
            .hd{
                font-size: 24px;
                padding: 0px 0 40px;
                text-align: center;
                color: #000;
            }
            .bd{
                .pic-text{
                    .text-indent{
                        line-height: 32px;
                        text-indent: 36px;
                    }
                    .text{
                        border: 1px #d5d5d5 solid;
                        padding: 20px;
                        font-size: 18px;
                        line-height: 36px;
                        text-align: justify;
                        h5{
                            font-weight: normal;
                            font-size: 20px;
                            color: #2da1ea;
                            position: relative;
                            padding: 10px 0 10px 60px;
                            &::before{
                                content: ' ';
                                width: 30px;
                                height: 30px;
                                position: absolute;
                                left: 0;
                                top: 12px;
                                transform: rotate(45deg);
                                background: #5092dc;
                            }
                            span{
                                display: block;
                                width: 30px;
                                height: 30px;
                                line-height: 30px;
                                text-align: center;
                                color: #fff;
                                position: absolute;
                                left: 0;
                                top: 12px;
                            }
                            
                        }
                        
                    }
                    .pic{
                        text-align: center;
                        img{
                            width: 100%;
                        }
                    }
                    .tit{
                        color: #5d8ae4;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 20px 0 40px;
                        .left-arrow{
                            width: 32px;
                            height: 24px;
                            background: url(../assets/image/page4/left.png) no-repeat center;
                        }
                        .right-arrow{
                            width: 32px;
                            height: 24px;
                            background: url(../assets/image/page4/right.png) no-repeat center;
                            
                        }
                        .tit-v{
                            font-weight: bold;
                            margin: 0 20px;
                            font-size: 20px;
                        }
                    }
                }
                .additional{
                    margin-top: 60px;
                    .name{
                        position: relative;
                        width: 406px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        margin-bottom: 57px;
                        .value{
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 3;
                        width: 406px;
                        height: 50px;
                        background: #5092dc;
                        color: #fff;
                        font-size: 24px;
                        }
                        .bg{
                        position: absolute;
                        left: 5px;
                        top: 5px;
                        z-index: 2;
                        width: 406px;
                        height: 50px;
                        background: #ffbe68;
                        }
                    }
                    .name2{
                        width: 144px;
                        .value, .bg{
                            width: 144px;
                        }
                    }
                    .name3{
                        width: 140px;
                        .value, .bg{
                            width: 140px;
                        }
                    }
                    .tu{
                        text-align: center;
                    }
                    .list{
                        width: 1240px;
                        margin: 0 auto;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .s-card{
                            width: 246px;
                            height: 284px;
                            background: url(../assets/image/page4/1-08.png) no-repeat center;
                            background-size: 100%;
                            box-sizing: border-box;
                            padding:  20px 30px;
                            line-height: 24px;
                            position: relative;
                            .icon{
                                margin-bottom: 20px;
                            }
                            .txt{
                                color: #2da1ea;
                                font-size: 20px;
                                margin-bottom: 10px;
                            }
                            .des{
                                font-size: 16px;
                                line-height: 32px;

                            }
                            .index{
                                position: absolute;
                                right: 24px;
                                bottom: 27px;
                                width: 24px;
                                height: 24px;
                                line-height: 24px;
                                text-align: center;
                                color: #fff;
                                background: #00448d;
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
        }
    }
    .content-wrapper{
        position: relative;
        padding-left: 400px;
        .side-nav{
            position: fixed;
            z-index: 99;
            background: #fff;
            width: 316px;
            left: 160px;
            top: 480px;
            .hd{
                height: 40px;
                line-height: 40px;
                color: #fff;
                text-align: center;
                background: #3c6397;
            }
            .bd{
                margin-top: 5px;
                .item{
                    padding-left: 30px;
                    padding-right: 20px;
                    height: 30px;
                    line-height: 30px;
                    color: #8a8989;
                    background: #ebebeb;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 2px;
                    .text::before{
                        content: '●';
                        color: #ebebeb;
                    }
                    &:hover,&.active{
                        cursor: pointer;
                        color: #fff;
                        background: #3c6397;
                        .arrow{
                            border-left-color: #fff;
                        }
                        .point{
                            background: #fff;
                        }
                        .text::before{
                            color: #ebebeb;
                        }
                    }
                    .arrow{
                        width: 0;
                        height: 0;
                        border-left: 8px solid #8a8989;
                        border-top: 8px solid transparent;
                        border-bottom: 8px solid transparent;
                    }
                }
            }
            .ft{
                .news-content-item{
                    height: 230px;
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
                    padding-left: 8px;
                    margin-bottom: 12px;
                    p{
                        margin-bottom: 4px;
                    }
                }
            }
        }
    }
}
  </style>