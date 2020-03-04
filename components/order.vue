<template>
  <div>
    <b>{{name}}</b>
    <progress v-bind:value="qty * Math.random()" max="100"></progress>
    <button v-on:click="orderclicked">orderclicked</button>
  </div>
</template>

<script>
//component attributes (props)
module.exports = {
  props: {
    name: {
      default: "",
      type: String
    },
    qty: { default:0,
      type: Number      
    }
  },
  methods: {
    orderclicked: function (event) {
      // emit event
      this.$emit('orderclicked');
    }
  }
};
</script>

<style scoped>
div {
  border: 4px dashed #AAA;
  padding: 15px;
  background-color: #f6f8fa;
}
</style>