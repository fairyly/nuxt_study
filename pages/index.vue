<template>
  <section class="container">
    <div>
      <common-header :current-tab="currentTab"></common-header>
      <div class="index-ads">
        <div class="inner-content"></div>
      </div>
      <div class="main-content">
        <div class="inner-content">
          <common-tab-box
            cate-title="全部"
            :data-list="dataList"
          ></common-tab-box>
          <common-tab-box
            cate-title="精华"
            :data-list="goodList"
          ></common-tab-box>
          <common-tab-box
            cate-title="分享"
            :data-list="shareList"
          ></common-tab-box>
          <common-tab-box
            cate-title="问答"
            :data-list="askList"
          ></common-tab-box>
          <common-tab-box
            cate-title="招聘"
            :data-list="jobList"
          ></common-tab-box>
        </div>
      </div>
      <common-footer></common-footer>
    </div>
  </section>
</template>
<script>
import CommonHeader from '~/components/index/common-header.vue'
import CommonTabBox from '~/components/index/common-tab-box.vue'
import CommonFooter from '~/components/index/common-footer.vue'
import dateUtil from '~/assets/js/public.js'
function handleData(data) {
  data.forEach(ele => {
    ele.create_at = dateUtil.dateTrans(ele.create_at)
    ele.last_reply_at = dateUtil.dateTrans(ele.last_reply_at)
  })
  return data
}
export default {
  components: { CommonHeader, CommonTabBox, CommonFooter },
  async asyncData({ $axios, query }) {
    /* eslint-disable */
    const data = await $axios.$get('topics?limit=6')
    const good = await $axios.$get('topics?tab=good&limit=6')
    const share = await $axios.$get('topics?tab=share&limit=6')
    const ask = await $axios.$get('topics?tab=ask&limit=6')
    const job = await $axios.$get('topics?tab=job&limit=6')
    if (data.success) {
      return {
        currentTab: 'all',
        dataList: handleData(data.data),
        goodList: handleData(good.data),
        shareList: handleData(share.data),
        askList: handleData(ask.data),
        jobList: handleData(job.data)
      }
    }
    return { dataList: [] }
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
  }
}
</style>
