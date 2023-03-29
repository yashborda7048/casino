<template>
    <Slider></Slider>
    <OfferSlider></OfferSlider>
    <FilterSection></FilterSection>
</template>

<script>
import FilterSection from '@/components/FilterSection.vue';
import OfferSlider from '@/components/OfferSlider.vue';
import Slider from '@/components/Slider.vue';

export default {
    name: 'Home',
    components: {
    Slider,
    OfferSlider,
    FilterSection
}
}
</script>