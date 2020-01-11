<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
import emitter from '@/mixins/emitter.js'
export default {
  inheritAttrs: false,
  name: 'my-input',
  componentName: 'MyInput',
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)

      // this.$parent && this.$parent.$emit('validate')

      this.dispatch('MyFormItem', 'validate')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>