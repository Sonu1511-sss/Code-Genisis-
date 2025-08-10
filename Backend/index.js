const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // Load .env first
require('./src/Config/database').dbConnect(); // Connect DB

const aiRoutes = require('./src/routes/ai.route');
const AuthRoutes = require('./src/routes/authRoutes');
const UserRoutes = require('./src/routes/user');
const meRoutes = require('./src/routes/meRoutes');
const userProfileRoutes = require('./src/routes/userProfileRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Define allowed origins for CORS
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  // Add your frontend/deployed URL here if needed
];

// Middleware
app.use(express.json());

// ✅ CORS setup
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(cookieParser());

// ✅ Sanitize Authorization header (fix Postman newline/space issues)
app.use((req, res, next) => {
  if (req.headers.authorization) {
    req.headers.authorization = req.headers.authorization
      .toString()
      .trim()
      .replace(/[\r\n]+/g, ''); // remove hidden newlines
  }
  next();
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello World from CodeGenesis!');
});

// Routes
app.use('/ai', aiRoutes);
app.use('/auth', AuthRoutes);
app.use('/user', UserRoutes);
app.use('/check', meRoutes);
app.use('/profile', userProfileRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});

module.exports = app;
