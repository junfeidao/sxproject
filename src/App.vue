<template>
  <div id="app">
    <div id="nav">
      <RouterLink to="/lzr">
        李兆瑞
      </RouterLink>|
      <RouterLink to="/qsf">
        强少峰
      </RouterLink>|
      <RouterLink to="/thq">
        陶毫钦
      </RouterLink>|
      <RouterLink to="/wzh">
        王梓航
      </RouterLink>|
      <RouterLink to="/wxq">
        位星启
      </RouterLink>|
      <RouterLink to="/zgl">
        朱广龙
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss">
#app {
  height: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: flex-start;
}
#nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #22272c;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
