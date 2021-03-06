// models
import msg from '../../models/Message.js'
import Orders from '../../components/Orders/Orders.vue'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
      Orders
  },
  data () {
      return {
        isBusy: false,
        error: null,
        greeting: '',
        filter: 1,
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
    this.getOrders(this.$route.params.filter);
    // watch for state change
    this.$store.watch(
          (count, getters) => getters.count,
          (newValue, oldValue) => {
              this.getOrders(this.$route.params.filter);
          }
    )
  },
  props: {
    msg: String
  },
  watch: {
      // call again the method if the route changes
      '$route': 'getOrders(filter)'
  },
  methods: {
    getOrders (filter) {
      this.error = null
      this.isBusy = true
      return msg.getOrders(filter)
        .then(msg => {
            this.isBusy = false
            this.orders = msg.orders
        }).catch(err => {
            console.log("error received: ")
            console.log(err);
            this.isBusy = false
            this.error = err
        })
    }
  }
}
