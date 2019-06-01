<template>
  <div class="common-tab-box">
    <h3>{{ cateTitle }}</h3>
    <ul class="flex flex-space-between flex-wrap">
      <template v-for="(item, index) in dataList">
        <li v-if="index < 6" :key="index">
          <div class="li-sub">
            <a href="">
              <div class="li-sub-top">
                <p class="li-sub-top_baseinfo">
                  {{ item.title }}
                  <span class="reply-visit-count"
                    >{{ item.reply_count }}/{{ item.visit_count }}</span
                  >
                </p>
                <p class="li-sub-top_userinfo">
                  <span class="create-date">发布于: {{ item.create_at }}</span
                  ><span class="update-date"
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
    <p class="common-tab-more">
      <a-button type="primary" ghost>查看更多</a-button>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    cateTitle: {
      type: String,
      default() {
        return ''
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
      /*dataList: [
        {
          author: {
            loginname: 'alsotang',
            avatar_url:
              'https://avatars1.githubusercontent.com/u/1147375?v=4&s=120'
          },
          avatar_url:
            'https://avatars1.githubusercontent.com/u/1147375?v=4&s=120',
          loginname: 'alsotang',
          author_id: '504c28a2e2b845157708cb61',
          content: '',
          create_at: '2018-10-27T14:33:14.694Z',
          good: false,
          id: '5bd4772a14e994202cd5bdb7',
          last_reply_at: '2019-05-31T09:57:29.213Z',
          reply_count: 189,
          tab: 'share',
          title: '服务器迁移至 aws 日本机房',
          top: true,
          visit_count: 61293
        }
      ]*/
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
