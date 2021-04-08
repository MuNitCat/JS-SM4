<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <!-- <p>这里是vue</p> -->
    <!-- <div class="box1"></div> -->
    <router-view />
  </div>
</template>

<script>
// import { component } from 'vue/types/umd'
// import Home from './views/home/home'
export default {
  name: 'App'
//   component: {
//     Home
//   }
}
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  //   .box1 {
  //     width: 500px;
  //     height: 500px;
  //     background-color: aqua;
  //   }
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', Arial, sans-serif;
}

#app {
  .size;
}
</style>
