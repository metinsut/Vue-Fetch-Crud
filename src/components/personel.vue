<template lang="html">
  <div id="personel">
    <div class="col s12 m7">
   <h2 class="header">Personel Detail</h2>
   <div class="card horizontal">
     <div class="card-image">
       <img src="../assets/logo.png">
     </div>
     <div class="card-stacked">
       <div class="card-content">
         <h1>{{userData.name}}</h1>
         <ul>
           <li>{{userData.email}}</li>
           <li>{{userData.gender}}</li>
           <li>{{userData.phone}}</li>
           <li>{{userData.city}}</li>
         </ul>
       </div>
       <div class="card-action">
         <router-link class="btn" to='/'>Back</router-link>
         <router-link class="btn btn-primary" :to="'/edituser/'+userData.id">Edit</router-link>
         <button class="btn btn-danger red" v-on:click="deletePersonel(userData.id)">Delete</button>
       </div>
     </div>
   </div>
 </div>
  </div>
</template>

<script>
export default {
  name: 'personel',
  data () {
    return {
      userData: []
    }
  },
  created () {
    this.fetchUserData()
  },
  methods: {
    fetchUserData () {
      fetch(`http://slimapp/api/personel/${this.$route.params.id}`)
      .then((res) => { return res.json() })
      .then((data) => { this.userData = data })
    },
    deletePersonel (id) {
      fetch('http://slimapp/api/personel/delete/' + id, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => {
          this.$router.push({ path: '/', query: { alert: 'Personel Deleted' } })
        })
    }
  }
}
</script>

<style lang="css">
</style>
