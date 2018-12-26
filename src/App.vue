<template>
  <div id="app">
    <div id="nav">
      <router-link to="/lzr">李兆瑞</router-link> |
      <router-link to="/qsf">强少峰</router-link> |
      <router-link to="/thq">陶豪钦</router-link> |
      <router-link to="/wzh">王梓航</router-link> |
      <router-link to="/wxq">位星启</router-link> |
      <router-link to="/zgl">朱广龙</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
