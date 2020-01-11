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
import MyForm from '@/components/form/MyForm'
import MyFormItem from '@/components/form/MyFormItem'
import MyInput from '@/components/form/MyInput'
import Notice from '@/components/Notice.vue'
import create from '@/utils/create.js'

export default {
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
    create,
    submit() {
      this.$refs.loginForm.validate(valid => {
        const notice = create(Notice, {
          title: '消息提示',
          message: valid ? 'success' : 'failed'
        })
        notice.show()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>