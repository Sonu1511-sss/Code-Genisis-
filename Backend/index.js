const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./src/Config/database').dbConnect();

const aiRoutes = require('./src/routes/ai.route');
const AuthRoutes = require('./src/routes/authRoutes');
const UserRoutes = require('./src/routes/user');
const meRoutes = require('./src/routes/meRoutes');
const userProfileRoutes = require('./src/routes/userProfileRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

const allowedOrigins = [
  'http://localhost:5173',
  'https://codegenesis.vercel.app', // change if needed
];

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
