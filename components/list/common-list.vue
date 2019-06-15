<!--
import CommonList from '~/components/list/common-list.vue'
components: { CommonList }
<common-list :cate-title="cateTitle" :data-list="dataList"></common-list>
 -->
<template>
  <div class="common-tab-box">
    <h3>{{ tabList[currentTab] }}</h3>
    <ul class="flex flex-space-between flex-wrap">
      <template v-for="(item, index) in dataLists">
        <li :key="index">
          <div class="li-sub">
            <a :href="'/detail?id=' + item.id">
              <div class="li-sub-top">
                <p class="li-sub-top_baseinfo">
                  <span class="li-sub-top_tab"
                    >{{ item.good ? '精华' : tabList[item.tab] }}
                  </span>
                  {{ item.title }}
                  <span class="reply-visit-count"
                    >{{ item.reply_count }}/{{ item.visit_count }}</span
                  >
                </p>
                <p class="li-sub-top_userinfo">
                  <span class="create-date">发布于: {{ item.create_at }}</span
                  ><span class="update-date p-l-10"
                    >更新于:{{ item.last_reply_at }}</span
                  >
                </p>
              </div>
              <div class="li-sub-bottom">
                <p>
                  <img
                    class="user-photo"
                    :src="item.author.avatar_url"
                    alt=""
                  />
                  <span>{{ item.author.loginname }}</span>
                </p>
              </div>
            </a>
          </div>
        </li>
      </template>
    </ul>
    <p v-if="!loadAll" class="common-tab-more">
      <a-button type="primary" ghost @click="loadNext">下一页</a-button>
    </p>
  </div>
</template>
<script>
import dateUtil from '~/assets/js/public.js'
function handleData(data) {
  data.forEach(ele => {
    ele.create_at = dateUtil.dateTrans(ele.create_at)
    ele.last_reply_at = dateUtil.dateTrans(ele.last_reply_at)
  })
  return data
}
export default {
  props: {
    currentTab: {
      type: String,
      default() {
        return 'all'
      }
    },
    dataList: {
      type: [Array, Object],
      default() {
        return []
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
      },
      loadAll: false,
      page: 1, // 当前页
      limit: 30, // 每一页个数
      dataLists: this.dataList
    }
  },
  methods: {
    loadNext() {
      const that = this;
      that.page++;
      this.getData();
    },
    async getData() {
      const that = this;
      const tab = that.$route.query.tab || 'all';
      const nextData = await that.$axios.$get(`topics?tab=${tab}&page=${that.page}&limit=${that.limit}`)
      if (!nextData.data.length) {
        that.loadAll = true
        that.$message.success('已经全部加载完成');
        return false;
      }
      that.dataLists = handleData(that.dataLists.concat(nextData.data))
    }
  }
}
</script>
<style lang="less" scoped>
.common-tab-box {
  h3 {
    text-align: left;
    font-weight: 700;
  }
  ul {
    width: 100%;
    /*height: 600px;*/
    background: #fff;
    border-top: solid 2px #63d4c7;
    font-weight: 400;
    li {
      /*height: 200px;*/
      width: 32%;
      margin-top: 10px;
      .li-sub {
        display: block;
        border-right: solid 2px #f6f6f8;
        border-bottom: solid 2px #f6f6f8;
        height: 100%;
        border-radius: 6px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.13);
        &:hover {
          transition: all 0.1s ease-in;
          transform: scale(1.02);
          border: 1px dashed #1890ff;
          box-shadow: 0 0 6px 0 rgba(93, 213, 200, 0.13);
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
          p {
            position: relative;
            width: 300px;
            height: 35px;
            line-height: 35px;
            font-size: 15px;
            color: #61687c;
            padding-right: 100px;
            margin: 0 auto 0 auto;
            overflow: hidden;
            text-align: left;
            text-overflow: ellipsis;
            white-space: nowrap;
            .reply-visit-count {
              position: absolute;
              right: 0;
              top: 0;
              color: #fc6c38;
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
            .user-photo {
              width: 30px;
              height: 30px;
              vertical-align: middle;
              border-radius: 50%;
              margin-right: 15px;
            }
            .create-date {
              font-size: 10px;
            }
            .update-date {
              font-size: 10px;
            }
            &.li-sub-top_userinfo {
              width: 300px;
              padding-right: 0;
              line-height: 28px;
              text-align: left;
              font-size: 12px;
              color: #61687c;
              border-bottom: dashed 1px #e3e7ed;
            }
          }
        }
      }
    }
  }
}
</style>
