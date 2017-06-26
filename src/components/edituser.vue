<template lang="html">
  <div id="edituser">
    <div class="row">
      <form class="col s12" v-on:submit="updateUser">
        <div class="row">
          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">account_circle</i>
            <label for="">Name</label>
            <br>
            <input type="text" name="name" v-model="userData.name">
          </div>
          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">email</i>
            <label for="">Email</label>
            <br>
            <input type="text" name="email" v-model="userData.email">
          </div>
          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">phone</i>
            <label for="">Phone</label>
            <br>
            <input type="text" name="phone" v-model="userData.phone">
          </div>
          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">location_on</i>
            <label for="">City</label>
            <br>
            <input type="text" name="city" v-model="userData.city">
          </div>

          <div class="input-field col s12 l8 offset-l2">
            <i class="material-icons prefix">book</i>
            <label for="">Gender</label>
            <br>
            <input type="text" name="gender" v-model="userData.gender">
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
  name: 'edituser',
  data () {
    return {
      userData: []
    }
  },
  created () {
    this.fetchpersonel(this.$route.params.id)
  },
  methods: {
    fetchpersonel (id) {
      fetch(`http://slimapp/api/personel/${id}`)
      .then((res) => { return res.json() })
      .then((data) => { this.userData = data })
    },
    updateUser (e) {
      fetch(`http://slimapp/api/personel/update/${this.userData.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.userData.name,
          email: this.userData.email,
          gender: this.userData.gender,
          phone: this.userData.phone,
          city: this.userData.city
        })
      })
        .then((res) => this.$router.push('/personel/' + this.userData.id))
      e.preventDefault()
    }
  }
}
</script>

<style lang="css">

</style>
