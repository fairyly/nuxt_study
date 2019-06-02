<template>
  <div class="container error-content">
    <div class="error-inner">
      <h1 v-if="error.statusCode === 404">
        <p class="font-60">404</p>
        <p class="font-20 color-d9d9d9">页面不存在</p>
      </h1>
      <h1 v-else>
        <p class="font-60">应用发生异常</p>
      </h1>
      <nuxt-link to="/">首 页</nuxt-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['error'],
  layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>

<style lang="less" scoped>
.error-content {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: -webkit-linear-gradient(-45deg, #E73C7E, #23A6D5, #23D5AB);
  background: linear-gradient(-45deg, #E73C7E, #23A6D5, #23D5AB);
  .font-60 {
    font-size: 60px;
  }
  .color-d9d9d9 {
    color: #d9d9d9;
  }
  .error-inner {
    position: absolute;
    width: 500px;
    height: 160px;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: url(~assets/404.svg) right center no-repeat;
    background-size: 128px;
  }
  .nuxt-link-active {
    display: inline-block;
    width: 98px;
    height: 32px;
    line-height: 32px;
    margin-top: 10px;
    border: 1px #62D5C8 solid;
    color: #c4e8e4;
    text-align: center;
    font-size: 16px;
    border-radius: 6px;
    &:hover {
      color: #fff;
      background: #1890ff;
    }
  }
}
</style>
