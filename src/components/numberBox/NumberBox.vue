<template>
  <div class="mui-numbox data-numbox-min=0">
    <button class="mui-btn mui-btn-numbox-minus"
      type="button" @click="minus">-</button>
    <input class="mui-input-numbox" type="number" v-model="num">
    <button class="mui-btn mui-btn-numbox-plus"
      type="button" @click="plus">+</button>
  </div>
</template>
<script>
export default{

  props: ['value'],
  data () {
    return {
      num: this.value
    }
  },

  methods: {
    minus () {
      if (this.num > 0) {
        this.num--
      }
    },
    plus () {
      this.num++
    }

  },

  watch: {
    num (value) {
      this.$emit('input', value)
      this.$emit('addProducts')
    }
  }

}
</script>
<style>
.mui-numbox{
  position: absolute;
  bottom:10px;
  right: 5px;

}
</style>
