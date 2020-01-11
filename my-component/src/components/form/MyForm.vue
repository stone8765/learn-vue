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
  data() {
    return {
      formItems: []
    }
  },
  methods: {
    validate(callback) {
      // const asyncValidates = this.$children
      //   .filter(item => item.prop)
      //   .map(item => item.validate())

      var asyncValidates = this.formItems
        .filter(item => item.prop)
        .map(item => item.validate())

      Promise.all(asyncValidates)
        .then(() => callback(true))
        .catch(() => callback(false))
    }
  },
  created() {
    this.$on('my.form.addFormItem', item => {
      this.formItems.push(item)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>