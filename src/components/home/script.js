
export default{
  methods: {
    changeActive (index) {
      var as = document.querySelectorAll('.home-bottom a')
      console.log(index)
      as.forEach(function (item) {
        // console.log(item.children[0])
        item.children[0].classList.remove('active')
      })
      as[index].firstElementChild.classList.add('active')
      // console.log(route)
      // this.$router.push(`/${route}`)
    }

  }

}
