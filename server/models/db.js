const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://perumal:perumal@cluster0.empx7np.mongodb.net/tasks?retryWrites=true&w=majority',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
}, err => {
    if(err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})