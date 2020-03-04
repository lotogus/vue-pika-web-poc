<template>
  <div>
    <todo-header name="Home"></todo-header>
    
    <order name="A1234" v-bind:qty="qty" v-on:orderclicked="addTodo"></order>
<br>
    <order name="B6548" v-bind:qty="qty" v-on:orderclicked="addTodo"></order>
    <br>
    <button v-on:click="addTodo">Add Item</button>
    <ul>
      <li v-for="item in todo" :key="item">{{item}}</li>
    </ul>

    <todo-footer>footer content here {{info}}</todo-footer>

  </div>
</template>

<script>

module.exports = {
  //datos
  data: () => ({
    todo: [],
    info: "",
    qty: 20
  }),

  //importar componentes
  components: {
    "todo-footer": "url:./todo-footer.vue",
    "todo-header": "url:./todo-header.vue",
    "order": "url:./order.vue"
  },

  //funcion after SFC (single file component) creation
  async created() {
    //call to some http api...
    this.qty = (await this.$http.get('/test.json?'+Math.random())).data.qty;
  },

  //
  methods: {
    addTodo: function() {
      const todo = this.todo;
      this.todo = todo.concat(`Item ${todo.length}`);
      this.info = "qty " + (todo.length+1);
    }
  },


  mounted () {
    //this.qty = (await this.$http.get('/test.json?'+Math.random())).data.qty;
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