<template>
  <div class="addUser">
    <div class="row">
      <form class="col s12" v-on:submit="updateUser">
        <div class="row">
          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">account_circle</i>
            <label for="">Name</label>
            <br>
            <input type="text" name="name" v-model="users.name">
          </div>
          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">email</i>
            <label for="">Email</label>
            <br>
            <input type="text" name="email" v-model="users.email">
          </div>
          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">phone</i>
            <label for="">Phone</label>
            <br>
            <input type="text" name="phone" v-model="users.phone">
          </div>
          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">location_on</i>
            <label for="">City</label>
            <br>
            <input type="text" name="city" v-model="users.city">
          </div>

          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">book</i>
            <label for="">Gender</label>
            <br>
            <input type="text" name="gender" v-model="users.gender">
          </div>

          <input class="waves-effect waves-light btn" type="submit" name="" value="SAVE">
        </div>
      </form>
      <!-- <router-link class="waves-effect waves-light btn" :to="'/personel/'+user.id">Back</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'addUser',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: []
    }
  },
  methods: {
    updateUser (e) {
      fetch('http://slimapp/api/personel/add', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.users.name,
          email: this.users.email,
          gender: this.users.gender,
          phone: this.users.phone,
          city: this.users.city
        })
      })
        .then((res) => this.$router.push('/'))
      e.preventDefault()
    }
  }
}
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
