<template>
  <section class="container">
    <div>
      <common-header></common-header>
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
export default {
  components: { CommonHeader, CommonTabBox, CommonFooter },
  async asyncData({ $axios }) {
    const data = await $axios.$get('topics')
    const good = await $axios.$get('topics?tab=good')
    const share = await $axios.$get('topics?tab=share')
    const ask = await $axios.$get('topics?tab=ask')
    const job = await $axios.$get('topics?tab=job')
    if (data.success) {
      return {
        dataList: data.data,
        goodList: good.data,
        shareList: share.data,
        askList: ask.data,
        jobList: job.data
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
