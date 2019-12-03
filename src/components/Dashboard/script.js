// models
import msg from '../../models/Message.js'

export default {
  name: 'Dashboard',
  data () {
      return {
        loading: false,
        error: null,
        greeting: '',
        fields: [
          {
            key: 'orderId',
            sortable: true
          },
          {
            key: 'orderStatusId',
            sortable: true
          },
          {
            key: 'orderDescription',
            sortable: true
          },
          {
            key: 'createDate',
            sortable: true
          },
          {
            key: 'shippedDate',
            sortable: true
          },
          {
            key: 'shippingAddressId',
            sortable: true
          }
        ],
        orders: [
        ]
      }
  },
  created () {
    this.getOrders()
  },
  props: {
    msg: String
  },
  /*
  watch: {
      // call again the method if the route changes
      '$route': 'getMsg()'
  },
  */
  methods: {
    getOrders () {
      this.error = null
      this.loading = true
      return msg.getOrders()
        .then(msg => {
            this.loading = false
            this.orders = msg.orders
        }).catch(err => {
            console.log("error received: ")
            console.log(err);
            this.loading = false
            this.error = err
        })
    }
  }
}
