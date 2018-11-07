<template>
  <div class="frontPage">
    <h1 class="frontTitle"> WOULD YOU LOOK AT THAT ANOTHER TODO LIST </h1>

    <router-link to="/ToDo">
      <button> GO TO THE LIST </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.frontPage {
  background-color: whitesmoke;
  width: 100%;
  height: 500px;
}
.frontTitle {
  font-size: 50px;
  font-family: "Helvetica" sans-serif;
}

</style>
