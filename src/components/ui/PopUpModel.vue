<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <h3 class="modal-title">{{title}}</h3>
        <button
            type="button"
            class="btn-close" @click="close">
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <div v-html="data"></div>
        </slot>
      </section>

      <footer class="modal-footer">

        <button
            type="button"
            class="btn-blue" @click="close">
          Close Me
        </button>
      </footer>
    </div>
  </div>
</template>
<script>

export default {
  data () {

  },
  props:["data", "title"],

  methods: {
    close(){
      this.$emit("close-me");
    }
  },

}
</script>
<style scoped>

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #0088cc;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #0088cc;
  background: transparent;
}

.btn-blue {
  color: white;
  background: #0088cc;
  border: 1px solid #0088cc;
  border-radius: 2px;
}
</style>
