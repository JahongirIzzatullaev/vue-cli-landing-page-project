<template>
  <div v-once></div>
</template>
<script>


import {pleaseWait} from 'please-wait'
import 'please-wait/build/please-wait.css'


export default {
  name: "Loader",
  props: ['isLoading'],
  watch: {
    isLoading: {
      handler(isLoading) {
        if (isLoading) {
          this.open()
        } else {
          this.close()
        }
      },
      immediate: true,
    }
  },
  methods: {
    open() {
      if (!this.pleaseWaitInstance) {
        this.pleaseWaitInstance = pleaseWait({
          loadingHtml: '<div class="loader">\n' +
              '  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">\n' +
              '\n' +
              '<div class="content">\n' +
              '  <div class="content__container">\n' +
              '    <p class="content__container__text">\n' +
              '      Hello\n' +
              '    </p>\n' +
              '    \n' +
              '    <ul class="content__container__list">\n' +
              '      <li class="content__container__list__item">world !</li>\n' +
              '      <li class="content__container__list__item">bro !</li>\n' +
              '      <li class="content__container__list__item">users !</li>\n' +
              '      <li class="content__container__list__item">everybody !</li>\n' +
              '    </ul>\n' +
              '  </div>\n' +
              '</div>\n' +
              '</div>',
          backgroundColor: '#2d2d2d',
        })
      }
    },
    close() {
      if (this.pleaseWaitInstance != null) {
        this.pleaseWaitInstance.finish()
        this.pleaseWaitInstance = null
      }
    }
  }
}
</script>
