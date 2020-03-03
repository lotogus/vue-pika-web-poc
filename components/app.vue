<template>
  <div>
    <div><router-link to="/">Home</router-link>  / <router-link to="/foo">Foo</router-link> / <router-link to="/page2">P2</router-link> </div>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
};
</script>

<style>
</style>