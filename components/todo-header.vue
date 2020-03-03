<template>
  <header>
    <h2>{{name}} page</h2>
  </header>
</template>

<script>
module.exports = {
  props: {
    name: {
      default: "",
      type: String
    }
  }
};
</script>

