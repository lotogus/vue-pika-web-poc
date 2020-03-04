<template>
  <div>
    <todo-header name="Fixed page"></todo-header>
    <todo-footer>footer content here {{name}}</todo-footer>
  </div>
</template>

<script>
module.exports = {
  props: {
    name: {
      default: "",
      type: String
    }
  },
  components: {
    "todo-footer": "url:./todo-footer.vue",
    "todo-header": "url:./todo-header.vue"
  }
};
</script>

