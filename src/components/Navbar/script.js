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
      axios.post('/api/addOrder', this.$refs.modal.order)
      .then(res => {
        console.log("successfully added order");
        // commit changes to the state
        this.$store.commit('increment');
      }).catch(err => {
        console.log("error: ", err);
      })
    }
  }
}
