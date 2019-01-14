// 引入 numBox组件
import numberBox from '@/components/numberBox/NumberBox'
export default {
  data () {
    return {
      productList: []
    }
  },
  created () {
    // console.log(this.$store.getters.getIds)
    // const productArr = this.getSelectedProduct()
    // console.log(productArr)
    const {getIds, id2Data} = this.$store.getters
    console.log(id2Data)

    this.$http
      .get(
        `/aaa/home?_r=${Math.random()}&cart_pids=${encodeURIComponent(
          getIds
        )}&location=121.5721941391567%2C31.21168025925351`
      )
      // .get(`http://m.beequick.cn/data/home?_r=0.10487448529559651&cart_pids=${encodeURIComponent(ids)}&location=121.5721941391567%2C31.21168025925351`)
      .then(res => {
        console.log(res.data.data.cart_ids)
        this.productList = res.data.data.cart_ids.map(item => {
          return {
            ...item,
            count: id2Data[item.id].count,
            isSelected: id2Data[item.id].isSelected
          }
        })
      })
  },
  methods: {

  },
  watch: {
    productList: {
      deep: true,

      handler (curList) {
        curList.forEach((item, index) => {
          if (item.count <= 0) {
            curList.splice(index, 1)
          }
        })
        const cartList = curList.map(item => {
          return {
            id: item.id,
            count: item.count,
            isSelected: item.isSelected
          }
        })
        this.$store.commit('updateCartList', cartList)
      }

    }

  },
  computed: {
    totalPrice () {
      return this.productList.reduce((price, item) => {
        if (item.isSelected) {
          price += item.count * item.partner_price
        }

        return price
      }, 0)
      // console.log(price)
    }
  },
  components: {
    numberBox
  }
}
