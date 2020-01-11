<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'my-form',
  componentName: 'MyForm',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: { type: Object, required: true },
    rules: { type: Object }
  },
  methods: {
    validate(callback) {
      const asyncValidates = this.$children
        .filter(item => item.prop)
        .map(item => item.validate())

      Promise.all(asyncValidates)
        .then(() => callback(true))
        .catch(() => callback(false))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>