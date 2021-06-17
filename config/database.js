const mongoose = require('mongoose')

exports.connect = () => {
  mongoose
    .connect('mongodb://localhost:27017/latstalk', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DATABASE CONNECTED ! Hurray !')
    })
    .catch((err) => {
      console.log('ERROR CONNECTING DATABASE : ')
    })
}
