<template>
  <header>
    <b>{{name}}</b>
    <progress v-bind:value="porcentaje" max="100"></progress>
  </header>
</template>

<script>
module.exports = {
  props: {
    name: {
      default: "",
      type: String
    },
    porcentaje: {
      default: 0,
      type: Number
    }
  }
};
</script>

