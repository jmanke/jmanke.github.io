const EventEmitter = {
  events: {},
  dispatch: function(event, data) {
    if (event in this.events) this.events[event].forEach(callBack => callBack(data))
  },
  subscribe: function(event, callback) {
    if (!(event in this.events)) this.events[event] = []
    this.events[event].push(callback)
  },
  unsubscribe: function(event, callback) {
    if (event in this.events) {
      const index = this.events[event].indexOf(callback)
      if (index > -1) {
        this.events[event].splice(index, 1)
      } 
    }
  }
}

module.exports = { EventEmitter }