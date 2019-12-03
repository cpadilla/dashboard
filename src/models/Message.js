const tag = '[MessageModel]'

export default {
  // get Initial Msg from Server
  getOrders () {
    console.log(tag, 'getOrders()')
    if (window.fetch) {
      return new Promise((resolve, reject) => {
        fetch('/api/orders', {
          method: 'get',
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          res.json().then(orders => {
            resolve(orders);
          });
        })
        .catch(err => {
          reject(err);
        });
      });
    }
    // for IE
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('get', '/api/orders', true)
      xhr.setRequestHeader('Content-type', 'application/json')
      xhr.onload = function () {
        let msg = JSON.parse(this.responseText).msg
        resolve(msg)
      }
      xhr.send()
    })
  }
}
