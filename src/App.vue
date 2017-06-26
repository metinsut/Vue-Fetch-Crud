<template>
  <div id="app">
    <div class="container">
      <nav>
        <div class="nav-wrapper">
          <ul class="left">
            <li><router-link :to="{ name: 'Home', params: {} }">Home</router-link></li>
            <li><router-link :to="{ name: 'addUser', params: {} }">AddUser</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
