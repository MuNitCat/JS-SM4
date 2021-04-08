<template>
  <div class="homeBox">
    <div class="title clearfix">
      <h1>SM4加密</h1>
      <!-- <div class="ChangeTheme">
        <span>选择主题</span>
        <RadioGroup v-model="theme3">
          <Radio label="light"></Radio>
          <Radio label="dark"></Radio>
        </RadioGroup>
      </div> -->
    </div>
    <Menu :theme="theme" active-name="1">
      <MenuGroup title="内容管理">
        <MenuItem name="1">
          <Icon type="md-document" />
          文章管理
        </MenuItem>
        <MenuItem name="2">
          <Icon type="md-chatbubbles" />
          评论管理
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="统计分析">
        <MenuItem name="3">
          <Icon type="md-heart" />
          用户留存
        </MenuItem>
        <MenuItem name="4">
          <Icon type="md-leaf" />
          流失用户
        </MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 主题选择
      theme: 'light'
      // theme: 'dark'
    }
  }
}
</script>
<style lang="less">
.homeBox {
  height: 100%;
  min-width: 500px;
  min-height: 800px;
  .title {
    width: 100%;
    height: 50px;
    color: rgba(255, 255, 255, 0.9);
    padding-left: 30px;
    background: #515a6e;
    // background: #1D87E5;
    border-bottom: 1px solid #3e3e3e;
    // text-align: center;
    line-height: 50px;
    h1 {
      display: block;
      font-size: 30px;
    }
    .ChangeTheme {
      margin-left: 50px;
      height: 100%;
      padding: 10px 0px 20px 20px;
      background: #515a6e;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .ivu-menu {
    display: block;
    width: 200px !important;
    height: calc(100% - 50px);

    // height: 600px;
  }
}
</style>
