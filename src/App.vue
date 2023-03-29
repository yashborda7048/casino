<template>
  <LeftMenu></LeftMenu>
  <div class="ms-74">
    <Navbar></Navbar>
    <router-view class="position-relative top-0"></router-view>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    LeftMenu,
    Navbar,
  }
}
</script>

