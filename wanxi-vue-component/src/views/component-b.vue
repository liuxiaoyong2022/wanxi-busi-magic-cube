<template>
  <div class="component">
    <h2 class="title">组件B</h2>
    <a-input
      type="textarea"
      :rows="2"
      placeholder="请输入组件B10内容 组件来自wanxi-vue-componet"
      v-model="textareaValue">
    </a-input>
  </div>
</template>

<script>
export default {
  name: 'ComponentB',
  props: {
    url: String,
    textarea: {
      type: String,
      default: ''
    }
  },
  computed: {
    textareaValue: {
      get() {
        return this.textarea;
      },
      set(val) {
        this.$emit('update:textarea', val);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .component {
    .title {
      line-height: 2;
      color: red;
    }
  }
</style>
