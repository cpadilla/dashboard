// models
import msg from '../../models/Message.js'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  data () {
      return {
        isBusy: false,
        error: null,
        greeting: '',
        fields: [
          {
            key: 'Status',
            sortable: true
          },
          {
            key: 'Order ID',
            sortable: true
          },
          {
            key: 'Description',
            sortable: true
          },
          {
            key: 'Create Date',
            sortable: true
          },
          {
            key: 'Shipped Date',
            sortable: true
          },
          {
            key: 'shippingAddressId',
            label: 'Address',
            sortable: true
          }
        ],
        orders: [
        ]
      }
  },
  created () {
    // get orders on load
    this.getOrders();
    // watch for state change
    this.$store.watch(
          (count, getters) => getters.count,
          (newValue, oldValue) => {
              this.getOrders();
          }
    )
  },
  props: {
    msg: String
  },
  watch: {
      // call again the method if the route changes
      '$route': 'getOrders()'
  },
  methods: {
    getOrders () {
      this.error = null
      this.isBusy = true
      return msg.getOrders()
        .then(msg => {
            this.isBusy = false
            this.orders = msg.orders
            console.log(msg.orders);
        }).catch(err => {
            console.log("error received: ")
            console.log(err);
            this.isBusy = false
            this.error = err
        })
    }
  }
}
