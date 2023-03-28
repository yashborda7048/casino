<template>
        <LeftMenu></LeftMenu>
        <div class="ms-74">
            <Navbar></Navbar>
            <Slider></Slider>
        </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';
import Navbar from '@/components/Navbar.vue';
import Slider from '@/components/Slider.vue';

export default {
    name: 'Home',
    components: {
        LeftMenu,
        Navbar,
        Slider,
    }
}
</script>