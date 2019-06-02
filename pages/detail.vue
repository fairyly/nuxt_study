<template>
  <section class="container">
    <div>
      <common-header :current-tab="currentTab"></common-header>
      <div class="index-ads">
        <div class="inner-content"></div>
      </div>
      <div class="main-content">
        <div class="inner-content">
          <div class="list-detail">
            <div class="list-detail-r">
              <div class="author-info">
                <div>
                  <img :src="authorObj.avatar_url" alt="" />
                  <p>
                    <span class="author-name">{{ authorObj.loginname }}</span
                    ><a
                      v-if="authorObj.githubUsername"
                      :href="'https://github.com/' + authorObj.githubUsername"
                      ><a-icon type="github"
                    /></a>
                  </p>
                </div>
                <p>
                  <span class="author-score">积分：{{ authorObj.score }}</span>
                </p>
                <p>
                  <span class="author-score"
                    >注册时间：{{ authorObj.create_at }}</span
                  >
                </p>
              </div>
            </div>
            <div class="list-detail-l">
              <div class="list-detail-top">
                <p class="topic-info">
                  <span class="li-sub-top_tab"
                    >{{ dataList.good ? '精华' : tabList[dataList.tab] }}
                  </span>
                  {{ dataList.title }}
                </p>
                <p class="topic-info">
                  <img :src="dataList.author.avatar_url" alt="" />
                  <span class="author-name"
                    >作者：{{ dataList.author.loginname }}</span
                  >
                </p>
                <p class="li-sub-top_userinfo">
                  <span class="create-date"
                    >发布于: {{ dataList.create_at }}</span
                  ><span class="update-date p-l-10"
                    >更新于:{{ dataList.last_reply_at }}</span
                  >
                </p>
              </div>
              <div class="detail-content">
                <p v-htmlContent="dataList.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <common-footer></common-footer>
    </div>
  </section>
</template>
<script>
import CommonHeader from '~/components/index/common-header.vue'
import CommonFooter from '~/components/index/common-footer.vue'
import dateUtil from '~/assets/js/public.js'
function handleData(data) {
  data.create_at = dateUtil.dateTrans(data.create_at)
  data.last_reply_at = dateUtil.dateTrans(data.last_reply_at)
  return data
}
export default {
  components: { CommonHeader, CommonFooter },
  directives: {
    htmlContent: {
      // 指令的定义
      bind: function(el, param) {
        el.innerHTML = param.value
      }
    }
  },
  data() {
    return {
      /* eslint-disable */
      tabList: {
        'all': '全部',
        'share': '分享',
        'ask': '问答',
        'good': '精华',
        'job': '招聘'
      }
    }
  },
  async asyncData({ $axios, query }) {
    /* eslint-disable */
    const data = await $axios.$get(`topic/${query.id}?mdrender=true`)
    if (data.success) {
      const author = await $axios.$get(`user/${data.data.author.loginname}`)
      author.data.create_at = dateUtil.dateTrans(author.data.create_at)
      return {
        currentTab: 'all',
        dataList: handleData(data.data),
        authorObj: author.data
      }
    }
    return { dataList: {} }
  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-width: 1000px;
  min-height: 100vh;
  text-align: center;
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', '-apple-system',
      'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial',
      'sans-serif';
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .index-ads {
    height: 120px;
    background: #5dd5c8;
    position: relative;
    z-index: 1004;
    padding-top: 0;
  }
  .main-content {
    width: 100%;

    .list-detail {
      .list-detail-l {
        position: relative;
        padding-right: 25px;
        border-right: 1px #f5f7f9 solid;
        margin-right: 322px;
        padding-bottom: 45px;
        min-height: 813px;
        text-align: left;
        .list-detail-top {
          border-bottom: 1px solid #444c60;
          margin-bottom: 10px;
          padding-bottom: 10px;
          .topic-info {
            font-size: 22px;
            font-weight: 700;
            margin: 8px 0;
            display: inline-block;
            vertical-align: bottom;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }
            .li-sub-top_tab {
              display: inline-block;
              padding: 0 12px;
              margin-right: 15px;
              margin-bottom: 10px;
              border: 1px solid #5ed5c8;
              color: #5ed5c8;
              height: 23px;
              line-height: 23px;
              border-radius: 13px;
              margin-top: 0;
              font-size: 12px;
            }
            .li-sub-top_userinfo {
              font-size: 12px;
              color: #838383;
            }
            .author-name {
              font-size: 12px;
              color: #424a5e;
            }
          }
        }
      }
      .list-detail-r {
        float: right;
        width: 298px;
        padding-bottom: 40px;
        .author-info {
          padding: 20px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          p {
            margin-bottom: 15px;
          }
          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
          .author-name {
            margin-top: 8px;
            font-size: 20px;
            color: #424a5e;
            font-weight: 400;
          }
        }
        .author-score {
          display: inline-block;
          padding: 0 12px;
          margin-right: 15px;
          margin-bottom: 10px;
          border: 1px solid #5ed5c8;
          color: #5ed5c8;
          height: 23px;
          line-height: 23px;
          border-radius: 13px;
          margin-top: 0;
          font-size: 12px;
        }
      }
      &::after {
        content: '';
        display: block;
        overflow: hidden;
        visibility: hidden;
        clear: both;
      }
    }
  }
}
</style>
