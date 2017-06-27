<template>
  <div class="home">
    <vueAlert v-if="alert" v-bind:message="alert"></vueAlert>
    <userstable :users='users'></userstable>
  </div>
</template>

<script>
import userstable from '@/components/userstable'
import vueAlert from './vueAlert'

export default {
  name: 'home',
  components: { userstable, vueAlert },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [],
      alert: ''
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
