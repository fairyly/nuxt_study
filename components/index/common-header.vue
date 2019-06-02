<!--
import CommonHeader from '~/components/index/common-header.vue'
components: { CommonHeader }
<common-header :current-tab="currentTab"></common-header>
 -->
<template>
  <header class="index-header">
    <div class="inner-content index-inner">
      <div class="logo-content fl">
        <a href="/" class="header-index-logo" title="node"></a>
      </div>
      <div class="index-nav fl">
        <ul>
          <li :class="[currentTab === 'all' ? 'current-li' : '']">
            <a class="index-header-home" href="/">首页</a>
          </li>
          <li :class="[currentTab === 'good' ? 'current-li' : '']">
            <a class="index-header-good" href="/list?tab=good">精华</a>
          </li>
          <li :class="[currentTab === 'share' ? 'current-li' : '']">
            <a class="index-header-share" href="/list?tab=share">分享</a>
          </li>
          <li :class="[currentTab === 'ask' ? 'current-li' : '']">
            <a class="index-header-ask" href="/list?tab=ask">问答</a>
          </li>
          <li :class="[currentTab === 'job' ? 'current-li' : '']">
            <a class="index-header-job" href="/list?tab=job">招聘</a>
          </li>
        </ul>
      </div>
      <div class="right-nav index-nav fr">
        <div class="right-nav-inner">
          <a
            href="https://signup.zhipin.com"
            class="header-index-register btn btn-outline"
            >注册</a
          >
          <a
            href="https://signup.zhipin.com"
            class="header-index-login btn btn-outline"
            >登录</a
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    currentTab: {
      type: String,
      default() {
        return 'all'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.index-header {
  position: relative;
  width: 100%;
  height: 49px;
  background: #202329;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
  z-index: 1005;
  &::after {
    content: '';
    display: block;
    overflow: hidden;
    visibility: hidden;
    clear: both;
  }

  .index-inner {
    max-width: 1000px;
    padding: 0 15px;

    .logo-content {
      a {
        display: block;
        width: 120px;
        height: 35px;
        background: url(https://static2.cnodejs.org/public/images/cnodejs_light.svg)
          3px 7px no-repeat;
        background-size: 120px 25px;
      }
    }
    .index-nav {
      font-size: 0;
      margin-left: 15px;
      height: 49px;
      line-height: 49px;

      li {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        font-size: 14px;
        margin: 0 7px;
        a {
          color: #fff;
        }
        &.current-li {
          a {
            color: #1890ff;
          }
        }
        &:hover {
          a {
            color: #1890ff;
          }
        }
      }
    }
    .right-nav {
      .btn-outline {
        display: inline-block;
        vertical-align: middle;
        border-radius: 15px;
        text-align: center;
        font-size: 13px;
        height: 23px;
        line-height: 23px;
        padding: 0 9px 0 11px;
        min-width: 0;
        margin-left: 17px;
        color: #fff;
        border: 1px #5dd5c8 solid;
        box-sizing: content-box;
        letter-spacing: 1px;
        background: #202329;
      }
    }
  }
}
</style>
