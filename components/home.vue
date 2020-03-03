<template>
  <div>
    <todo-header name="Home"></todo-header>
    <h3>Your IP is {{ip}} </h3>
    <ul>
      <li v-for="item in todo" :key="item">{{item}}</li>
    </ul>
    <button class="btn" v-on:click="addTodo">Add Item</button>
    <order name="A1234" v-bind:porcentaje="porcentaje"></order>
    <todo-footer>footer content here {{info}}</todo-footer>
  </div>
</template>

<script>

module.exports = {
  data: () => ({
    todo: [],
    info: null,
    ip: null,
    porcentaje: 2
  }),
  components: {
    "todo-footer": "url:./todo-footer.vue",
    "todo-header": "url:./todo-header.vue",
    "order": "url:./order.vue"
  },
  async created() {
    this.ip = (await this.$http.get('/test.json')).data.name;
    this.porcentaje = (await this.$http.get('/test.json')).data.porcentaje;
  },
  methods: {
    addTodo: function() {
      const todo = this.todo;
      this.todo = todo.concat(`Item ${todo.length}`);
    }
  },
  mounted () {
    
  }
};
</script>

<style>

li {
  padding: 5px 10px;
}

li:nth-child(odd) {
  box-shadow: 0 0 1px -1px rgba(0, 0, 0, 0.5);
  background: #f8fbff;
}

.btn {
  font-size: 24px;
  padding: 10px;
}
</style>