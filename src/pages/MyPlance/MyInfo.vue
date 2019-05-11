<template>
  <div>
    <ProfileHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/my/myTarget" replace>当前目标</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/my/completeTarget" replace>完成目标</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/my/giveUpTarget" replace>放弃目标</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/my/qustion" replace>我的提问</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <NewProgress/>
  </div>
</template>

<script>
  import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.vue'
  import NewProgress from "../../components/NewProgress/NewProgress.vue"
  export default {
    mounted () {
      this.$store.dispatch('getShopInfo')
    },
    components: {
      ProfileHeader ,
      NewProgress
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    margin-top 10px
    .tab-item
      float left
      width: 25%
      text-align center
      font-size 15px
      color rgb(77, 85, 93)

      a
        display block
        position relative
        &.router-link-active
          color #00BFFF
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 60px
            height 2px
            transform translateX(-50%)
            background #00BFFF
</style>
