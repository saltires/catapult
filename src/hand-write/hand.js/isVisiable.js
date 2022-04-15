function isVisable(el) {
  const viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  const scrollTop = document.documentElement.scrollTop
  const offsetTop = el.offsetTop

  return offsetTop - scrollTop > viewHeight ? true : false
}