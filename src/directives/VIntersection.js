export default {
  name: 'intersection', // имя необходимо для глобальной регистрации директив (церез цикл в main.js)

  mounted(el, binding) {
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      // if (entries[0].isIntersecting && page.value < totalPages.value) {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  }
}
