<template>
    <div>
    <b-container class="mt-3">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
       <b-carousel-slide img-src="https://picsum.photos/id/1018/3914/2935"></b-carousel-slide>

      <b-carousel-slide  img-src="https://picsum.photos/id/1011/5472/3648"></b-carousel-slide>

      <b-carousel-slide  img-src="https://picsum.photos/id/1015/6000/4000"></b-carousel-slide>
      </b-carousel>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>
<style>

</style>
