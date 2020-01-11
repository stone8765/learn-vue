<template>
  <div class="form-item">
    <label v-if="label" v-text="label"></label>
    <slot></slot>
    <span class="error" v-if="error" v-text="error"></span>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'my-form-item',
  componentName: 'MyFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error: ''
    }
  },
  methods: {
    validate() {
      const rule = this.form.rules[this.prop]
      const value = this.form.model[this.prop]
      const descriptor = { [this.prop]: rule }

      const schema = new Schema(descriptor)
      let xxx = this
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          xxx.error = errors[0].message
        } else {
          xxx.error = ''
        }
      })
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  padding: 5px 15px;
}

.error {
  color: red;
}
</style>