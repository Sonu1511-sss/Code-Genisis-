const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = () => {
  const URL = process.env.MONGODB_URL;

  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('✅ Database Connected Successfully'))
    .catch((error) => {
      console.error('❌ Database Connection Error:', error);
      process.exit(1);
    });
};
