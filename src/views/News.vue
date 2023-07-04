<template>
  <div class="news">
    <div class="banner">
      <div>新闻中心</div>
    </div>
    <div class="news-section" v-loading="loading">
      <div class="news-section-content">
        <div class="content-nav">
          <div
            class="content-nav-btn"
            :class="{'content-nav-active':newstype == 1}"
            @click="newstype = 1"
          >
            <span>公司新闻</span>
          </div>
          <div
            class="content-nav-btn"
            :class="{'content-nav-active':newstype == 2}"
            @click="newstype = 2 "
          >
            <span>行业动态</span>
          </div>
        </div>

        <div class="content-nav-item">
          <div class="item-list" v-for="(item,index) in newsList" :key="index">
            <img class="item-img" :src="item.Img" alt="">
            <p class="item-list-title">{{item.Title}}</p>
            <p class="item-list-content">{{item.Content}}</p>
            <div class="item-list-more">
              <router-link
                class="text-decoration"
                :to="{ name: 'newsdetails', params: { id: item.Id }}"
              >
                <div class="triangle"></div>
                <span>MORE</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  name: "news",
  components: {
    Banner
  },
  data() {
    return {
      loading: true,
      newsList:[],
      newsList1: [
        {
          Id: '',
          "Title":"国务院安委会办公室关于2018年上半年全国建筑业安全生产形势的通报",
          "Img":"/backend/imagestore/2018/0808/ef5a8f93-96ba-4e30-a772-b38223235c62.jpg",
          "Content": '法兰克福记录打发士大夫发的法大师傅顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶答复1打法'
        },
        {
          Id: '',
          "Title":"国务院安委会办公室关于2018年上半年全国建筑业安全生产形势的通报",
          "Img":"/backend/imagestore/2018/0808/ef5a8f93-96ba-4e30-a772-b38223235c62.jpg",
          "Content": '法兰克福记录打发士大夫发的法大师傅顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶答复1打法'
        },
        {
          Id: '',
          "Title":"国务院安委会办公室关于2018年上半年全国建筑业安全生产形势的通报",
          "Img":"/backend/imagestore/2018/0808/ef5a8f93-96ba-4e30-a772-b38223235c62.jpg",
          "Content": '法兰克福记录打发士大夫发的法大师傅顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶答复1打法'
        },
        {
          Id: '',
          "Title":"国务院安委会办公室关于2018年上半年全国建筑业安全生产形势的通报",
          "Img":"/backend/imagestore/2018/0808/ef5a8f93-96ba-4e30-a772-b38223235c62.jpg",
          "Content": '法兰克福记录打发士大夫发的法大师傅顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶答复1打法'
        },
        {
          Id: '',
          "Title":"国务院安委会办公室关于2018年上半年全国建筑业安全生产形势的通报",
          "Img":"/backend/imagestore/2018/0808/ef5a8f93-96ba-4e30-a772-b38223235c62.jpg",
          "Content": '法兰克福记录打发士大夫发的法大师傅顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶答复1打法'
        },
       ],
      newstype: 1,
      newsList2:[
      {
          Id: '',
          "Title":"国务院安委会办公室关于2018年上半年全国建筑业安全生产形势的通报",
          "Img":"/backend/imagestore/2018/0808/ef5a8f93-96ba-4e30-a772-b38223235c62.jpg",
          "Content": '法兰克福记录打发士大夫发的法大师傅顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶答复1打法'
        },
        {
          Id: '',
          "Title":"国务院安委会办公室关于2018年上半年全国建筑业安全生产形势的通报",
          "Img":"/backend/imagestore/2018/0808/ef5a8f93-96ba-4e30-a772-b38223235c62.jpg",
          "Content": '法兰克福记录打发士大夫发的法大师傅顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶答复1打法'
        },
      ],
    };
    
  },
  methods: {
    loadData() {
      this.loading = false;
      this.$http
        .get(`News?type=${this.newstype}&num=6`)
        .then(response => {
          //console.log(response);
          // this.newsList = response.data;
          this.loading = false;
          //window.console.log(this.newsList);
        })
        .catch(function(error) {
          window.console.log(error);
        });
    }
  },
  mounted() {
    this.loadData();
  },
  watch: {
    newstype:{
      handler(type){
        if(type === 1){
          this.newsList = this.newsList1;
        }else{
          this.newsList = this.newsList2;
        }
      },
      immediate: true,
    },
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.news {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  .banner{
    height: 532px;
    background: url(../assets/image/page3/banner.png) no-repeat center;
    color: #fff;
    font-size: 45px;
    font-weight: 400;
    line-height: 465px;
    text-align: center;
  }
  &-section {
    width: 100%;
    //height: 1600px;

    &-content {
      width: 1330px;
      //height: 1600px;
      margin: 0 auto;
      background-color: #fff;

      .content-nav {
        width: 400px;
        height: 55px;
        margin: 0 auto;
        display: flex;
        //justify-content: center;
        align-items: center;
        position: relative;
        bottom: 30px;

        &-btn {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #e4e4e4;
          transition: all 0.2s;
        }

        .content-nav-active {
          background-color: #2da1ea;
          color: #fff;
        }
      }

      .content-nav-item {
        width: 1330px;
        margin: 0 auto 40px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        //border: 1px solid blue;

        .item-list {
          width: 422px;
          height: 362px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 10px 10px;
          border: 1px solid #15669e;
          box-sizing: border-box;
          padding: 16px;
          &:hover {
            border: 1px solid #fff;
            box-shadow: 0 0 5px 2px #bfd3e0;
          }
          .item-img {
            display: block;
            width: 388px;
            height: 206px;
          }

          &-title {
            width: 388px;
            height: 24px;
            box-sizing: border-box;
            color: #15669e;
            font-size: 18px;
            font-weight: bold;
            padding: 0 14px;
            margin: 10px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            position: relative;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            white-space: normal !important;
            word-wrap: break-word;
            &::before{
              content: ' ';
              display: block;
              position: absolute;
              width: 6px;
              height: 20px;
              background: #15669e;
              left: 0;
              top: 4px;
            }
          }

          &-content {
            width: 388px;
            height: 42px;
            margin-bottom: 10px;
            box-sizing: border-box;
            font-size: 16px;
            padding: 0 14px;

            color: gray;

            // 文本长度处理 begin
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: normal !important;
            word-wrap: break-word;
            // 文本长度处理 ending
          }

          &-more {
            width: 388px;
            box-sizing: border-box;
            padding: 0 14px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .triangle {
                width: 0;
                height: 0;
                display: inline-block;
                border-left: 8px solid #15669e;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
            }
            span {
              color: #15669e;
              padding: 0 5px;
            }
          }
        }
      }
    }
  }
  .text-decoration {
    text-decoration: none;
  }
}
</style>