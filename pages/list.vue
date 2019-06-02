<template>
  <section class="container">
    <div>
      <common-header :current-tab="currentTab"></common-header>
      <div class="index-ads">
        <div class="inner-content"></div>
      </div>
      <div class="main-content">
        <div class="inner-content">
          <common-list :current-tab="currentTab" :data-list="dataList">
          </common-list>
        </div>
      </div>
      <common-footer></common-footer>
    </div>
  </section>
</template>
<script>
import CommonHeader from '~/components/index/common-header.vue'
import CommonList from '~/components/list/common-list.vue'
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
  components: { CommonHeader, CommonList, CommonFooter },
  data() {
    return {
      dataList: []
    }
  },
  async asyncData({ $axios, query }) {
    /* eslint-disable */
    const data = await $axios.$get(`topics?tab=${query.tab}&limit=30&page=1`)
    if (data.success) {
      return {
        currentTab: query.tab,
        dataList: handleData(data.data)
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
