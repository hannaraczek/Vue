<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Exercise Log</router-link> |
      <router-link to="/add">Add Log</router-link>
    </div>
    <!--  adding :key="$route.fullPath causes the page to reload every time the route changes, including query params  -->
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
