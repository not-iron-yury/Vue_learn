export default {
  name: 'focus', // имя необходимо для глобальной регистрации директив (церез цикл в main.js)

  mounted(el) {
    el.focus()
  }
}
