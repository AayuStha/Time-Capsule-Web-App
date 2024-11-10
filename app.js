const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const timeCapsuleRoutes = require('./routes/timeCapsuleRoutes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', timeCapsuleRoutes);


mongoose.connect('mongodb://localhost:27017/timeCapsuleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => console.log('Server running on port 3000'));
