const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todo', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
  console.log('MongoDB Connection Succeeded...');
}).on('error', (error) => {
  console.log('Error in DB Connection:', error);
});
