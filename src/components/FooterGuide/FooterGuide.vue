<template>
  <div class="footer_guide">
    <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-bianji"></i>
      </span>
      <span>修行</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-xiaoxi"></i>
      </span>
      <span>消息</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/my/myTarget'===$route.path||'/my/completeTarget'===$route.path
    ||'/my/qustion'===$route.path||'/my/giveUpTarget'===$route.path}" @click="goTo('/my/myTarget')">
      <span class="item_icon">
        <i class="iconfont icon-tubiaolunkuo-"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 40px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        .iconfont
          font-size 20px
</style>
