<template>
  <div 
    class="bu-switch"
    @click="handleClick"
    :disabled="disabled"
  ></div>
</template>

<script>
export default {
  name: 'BuSwitch',
  props: {
    disabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss">
.bu-switch{ 
  display: inline-block;
  border: 1px solid green;
  height: 20px;
  width: 40px;
}
</style>