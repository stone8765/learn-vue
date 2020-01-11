<template>
  <div>
    <h1>登录</h1>
    <hr />
    <MyForm :model="model" :rules="rules" ref="loginForm">
      <MyFormItem label="用户名" prop="username">
        <MyInput v-model="model.username" placeholder="输入用户名"></MyInput>
      </MyFormItem>
      <MyFormItem label="密码" prop="password">
        <MyInput type="password" v-model="model.password" placeholder="输入密码"></MyInput>
      </MyFormItem>
      <MyFormItem>
        <input type="button" @click="submit" value="登录" />
      </MyFormItem>
    </MyForm>
  </div>
</template>

<script>
import { MyForm, MyFormItem, MyInput } from '@/components/form'

export default {
  name: 'login',
  componentName: 'Login',
  components: {
    MyForm,
    MyFormItem,
    MyInput
  },
  data() {
    return {
      model: { username: 'admin', password: '123456' },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.loginForm.validate(valid => {
        this.$notice({
          title: '消息提示',
          type: valid ? 'info' : 'error',
          message: valid ? '登录成功' : '登录失败',
          ok: function() {
            window.console.log('ok.')
          },
          cancel: function() {
            window.console.log('cancel.')
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>