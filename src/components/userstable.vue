<template>
  <div class="userstable">
    <table class="bordered striped">
        <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>City</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.gender}}</td>
            <td>{{user.phone}}</td>
            <td>{{user.city}}</td>
            <td>
              <router-link :to="'/personel/'+user.id" class="waves-effect waves-light btn"><i class="material-icons">mode_edit</i>View</router-link>
              <router-link :to="'/personel/'+user.id" class="waves-effect red btn"><i class="material-icons">delete</i>Delete</router-link>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'userstable',
  props: {
    users: { type: Array, required: true }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
