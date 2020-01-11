<template>
  <!-- 最外层 -->
  <transition name="dialog-wrapper" enter-active-class="fadeIn" leave-active-class="fadeOut">
    <div class="dialog-wrapper fadeIn">
      <!-- 居中主要层 -->
      <transition name="dialog" enter-active-class="scaleIn" leave-active-class="scaleOut">
        <div class="dialog scaleIn">
          <!-- 标题 -->
          <div class="title">{{title}}</div>
          <!-- 主要内容 -->
          <div class="content">{{message}}</div>
          <!-- 按钮组 -->
          <div class="buttons">
            <div class="btn cancel-btn" @click="hide">取消</div>
            <div class="btn confirm-btn" @click="hide">确认</div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    message: {
      type: String
    }
  },
  data() {
    return {
      isShow: true,
      duration: 1000
    }
  },
  methods: {
    show() {
      this.isShow = true
      setTimeout(() => {
        //this.hide()
      }, this.duration)
    },
    hide() {
      this.isShow = false
      this.remove()
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

  &.fadeIn {
    animation: fadeIn 0.2s ease;
  }

  &.fadeOut {
    animation: fadeOut 0.2s ease forwards;
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

    &.slideDown {
      animation: slideDown 0.2s ease;
    }

    &.slideUp {
      animation: slideUp 0.2s ease forwards;
    }

    &.scaleIn {
      animation: scaleIn 0.2s cubic-bezier(0.07, 0.89, 0.95, 1.4);
    }

    &.scaleOut {
      animation: scaleOut 0.2s cubic-bezier(0.07, 0.89, 0.95, 1.4) forwards;
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

@keyframes slideDown {
  from {
    transform: translateY(-3em);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3em);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

@keyframes scaleOut {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.8);
  }
}
</style>