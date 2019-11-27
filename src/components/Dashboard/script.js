// models
import msg from '../../models/Message.js'

export default {
  name: 'Dashboard',
  data () {
      return {
          loading: false,
          error: null,
          greeting: ''
      }
  },
  created () {
    this.getMsg()
  },
  props: {
    msg: String,
    orders: []
  },
  /*
  watch: {
      // call again the method if the route changes
      '$route': 'getMsg()'
  },
  */
  methods: {
    getMsg () {
      this.error = null
      this.loading = true
      return msg.getInitMsg()
        .then(msg => {
            console.log("message received: ")
            console.log(msg);
            this.loading = false
            this.greeting = msg
        }).catch(err => {
            console.log("error received: ")
            console.log(err);
            this.loading = false
            this.error = err
        })
    }
  }
}
