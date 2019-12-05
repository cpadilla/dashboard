// models
import msg from '../../models/Message.js'
import 'bootstrap'
import newOrderModal from '../NewOrderModal/NewOrderModal.vue'
import axios from 'axios'

export default {
  name: 'Navbar',
  components: {
    newOrderModal
  },
  methods: {
    addOrder() {
      console.log(this.$refs.modal.order)
      axios.post('/api/addOrder', this.$refs.modal.order)
      .then(res => {
        console.log("res: ", res);
      }).catch(err => {
        console.log("error: ", err);
      })
    }
  }
}
