<template>
  <!-- 最外层 -->
  <transition
    enter-class="fade-in"
    enter-active-class="fade-in"
    leave-class="fade-out"
    leave-active-class="fade-out"
  >
    <div class="dialog-wrapper">
      <!-- 居中主要层 -->
      <transition
        enter-class="scale-in"
        enter-active-class="scale-in"
        leave-class="scale-out"
        leave-active-class="scale-out"
      >
        <div class="dialog">
          <!-- 标题 -->
          <div class="title" v-text="title"></div>
          <!-- 主要内容 -->
          <div
            class="content"
            :class="{ info: (type ==='info'),
                      warning: (type ==='warning'),
                      error: (type ==='error') }"
            v-text="message"
          ></div>
          <!-- 按钮组 -->
          <div class="buttons">
            <div class="btn cancel-btn" @click="onCancel">取消</div>
            <div class="btn confirm-btn" @click="onOk">确认</div>
          </div>
        </div>
      </transition>。
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return ~['info', 'warning', 'error'].indexOf(value)
      }
    },
    message: {
      type: String
    },
    ok: {
      type: Function,
      default: function() {}
    },
    cancel: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    close() {
      this.isShow = false
      this.remove()
    },
    onOk() {
      this.ok(this)
      this.close()
    },
    onCancel() {
      this.cancel(this)
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.5);
  color: #313131;
  font-size: 10px;
  -webkit-tap-highlight-color: transparent;

  &.fade-in {
    animation: fade-in 0.2s ease;
  }

  &.fade-out {
    animation: fade-out 0.2s ease forwards;
  }

  .dialog {
    position: relative;
    width: 85vw;
    max-width: 30em;
    border-radius: 0.4em;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

    &.slide-down {
      animation: slide-down 0.2s ease;
    }

    &.slide-up {
      animation: slide-up 0.2s ease forwards;
    }

    &.scale-in {
      animation: scale-in 0.2s cubic-bezier(0.07, 0.89, 0.95, 1.4);
    }

    &.scale-out {
      animation: scale-out 0.2s cubic-bezier(0.07, 0.89, 0.95, 1.4) forwards;
    }

    .title {
      font-size: 1.8em;
      padding: 15px;
      text-align: center;
      background-color: #f4f4f4;
    }

    .title:empty {
      display: none;
    }

    .content {
      padding: 40px 20px;
      font-size: 1.6em;
      text-align: center;

      &::before {
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        border-width: 3px;
        border-radius: 50%;
        margin-right: 5px;
      }

      &.info::before {
        content: 'i';
        background: green;
        border-color: green;
      }

      &.warning::before {
        content: '!';
        background: orange;
        border-color: orange;
      }

      &.error::before {
        content: 'x';
        background: red;
        border-color: red;
      }
    }

    .buttons {
      font-size: 1.6em;
      display: flex;
      flex-flow: row-reverse;

      .btn {
        cursor: pointer;
        flex: 1;
        padding: 15px;
        text-align: center;
        border-top: 1px solid #ebebeb;

        &:active {
          background-color: #f4f4f4;
        }

        &.confirm-btn {
          color: #f2d985;
        }

        &.cancel-btn {
          color: #313131;
          border-right: 1px solid #ebebeb;
        }
      }
    }
  }
}

@keyframes slide-down {
  from {
    transform: translateY(-3em);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3em);
  }
}

@keyframes fade-in {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes scale-in {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

@keyframes scale-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.8);
  }
}
</style>