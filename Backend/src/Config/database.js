const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = () => {
  const URL = process.env.MONGODB_URL;

  if (!URL) {
    console.error("❌ MONGODB_URL is missing in .env file");
    process.exit(1);
  }

  console.log("🔗 Connecting to MongoDB...");

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
