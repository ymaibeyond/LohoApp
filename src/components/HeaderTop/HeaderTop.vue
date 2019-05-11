<template>
  <header class="header">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </header>
</template>

<script>

  export default {
    props: {
      title: String
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
    .MSiteMenu
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
</style>
