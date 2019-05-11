<template>
  <div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/msite/loho" replace>乐活殿堂</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/msite/targetProcess" replace>目标进度</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/msite/zhengnengliang" replace>正能量区</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted () {

      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },

    computed: {

    },

    watch: {
      categorys (value) { // categorys数组中有数据了, 在异步更新界面之前执行
        // 使用setTimeout可以实现效果, 但不是太好
        /*setTimeout(() => {
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }, 100)*/

        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })

          new BScroll('.miste-content-wrapper', {
            click: true
          })
        })

      }
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
