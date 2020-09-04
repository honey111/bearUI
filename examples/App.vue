<template>
  <div>
    <test-button></test-button>
    <test-switch></test-switch>
  </div>
</template>

<script>
import TestButton from './TestButton'
import TestSwitch from './TestSwitch'
// console.log(TestButton)
export default {
  components: {
    TestButton,
    TestSwitch
  }
}
</script>

<style lang="scss" scoped>
.row {
  padding: 10px 0;
}
.hm-button {
  margin-left: 10px;
}
</style>
