// 引入 numBox组件
import numberBox from '@/components/numberBox/NumberBox'
export default{
  data () {
    return {
      productList: {},
      categoryList: [],
      activeId: -1,
      productArr: []

    }
  },
  created () {
    this.getProductList()
  },
  methods: {
    // 获取所有商品
    async getProductList () {
      const res = await this.$http('/api')
      // console.log(res)
      if (res.status === 200) {
        // console.log(res.data.data)
        // console.log(res.data.data.products)
        const { products, categories } = res.data.data
        // for (const key in products) {
        //   // console.log(products[key])
        //   products[key].forEach(item => {
        //     item.count = 0
        //   })
        // }

        this.categoryList = categories
        this.productList = products

        // vuex

        const id2Data = this.$store.getters.id2Data

        this.productArr = this.productList[categories[0].id].map(item => {
          return {
            ...item,
            // count: (id2Data[item.id] && id2Data.count) || 0
            count: (id2Data[item.id] && id2Data[item.id].count) || 0,
            isSelected: item.isSelected
          }
        })

        // console.log(this.productArr)

        // item.count 设置
        // const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
        // console.log(cartProducts)

        // if (cartProducts) {
        //   cartProducts.forEach(item => {
        //     let items = this.productList[item.cateId].find(v => v.id === item.id)
        //     items.count = item.count
        //   })
        // }
      }
    },
    // 切换分类
    selectCate (cateId) {
      this.activeId = cateId
      // console.log(cateId)
      const id2Data = this.$store.getters.id2Data

      this.productArr = this.productList[cateId].map(item => {
        return {
          ...item,
          count: (id2Data[item.id] && id2Data[item.id].count) || 0,
          isSelected: item.isSelected
        }
      })
    },

    // 添加商品
    addProducts (categoryId, productId) {
      const temp = this.productArr.find(item => item.id === productId)
      // console.log(temp)
      // console.log(temp.category_id)

      this.$store.commit('addProducts', {
        cateId: temp.category_id,
        id: temp.id,
        count: temp.count

      })
    }

  },
  components: {
    numberBox
  }
}
