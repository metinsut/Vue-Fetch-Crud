<template>
  <div class="home">
    <ul v-for="user in users">
      <li>{{user.city}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: []
    }
  },
  created () {
    this.fetchPersonel()
  },
  methods: {
    fetchPersonel () {
      fetch('http://slimapp/api/personel')
      .then((res) => { return res.json() })
      .then((data) => { this.users = data })
      .catch((error) => { console.log('There has been a problem with your fetch operation: ' + error.message) })
    }
  }
}
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
