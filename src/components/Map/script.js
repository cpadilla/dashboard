// models
import msg from '../../models/Message.js'
import router from 'vue-router'

export default {
  name: 'Map',
  data () {
      return {
        isBusy: false,
        error: null,
        address: null,
        city: null,
        state: null,
        zip: null
      }
  },
  created () {
    console.log(this.$route);
    this.locateOrder(this.$route.params.addressId)
  },
  props: {
    msg: String
  },
  methods: {
    goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    locateOrder(addressId) {
        console.log("locating order: " + addressId);
        this.isBusy = true
        return msg.getAddress(addressId)
            .then (res => {
                // pass address to google map
                console.log("address received: ", res.address);
                this.address = res.address.address
                this.city = res.address.city
                this.state = res.address.state
                this.zip = res.address.zip
            }).catch(err => {
                console.log("error received: ");
                console.log(err);
                this.isBusy = false;
                this.error = err;
            })
    }
  }
}
