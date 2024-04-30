// Import required modules
import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
// Create an Express application
import productsRoute from './src/routes/productsRoute.js';
import userRoutes from './src/routes/user.js';
import cartRoutes from './src/routes/cart.js';
import connectDB from './src/config/db.js';
import requireAuth from './src/middleware/requireAuth.js';

const app = express();
env.config();

//Connect to MongoDB
connectDB();

// Use middleware to parse JSON and handle URL-encoded data
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/products', productsRoute);
app.use('/api/user', userRoutes);
app.use('/api/cart', requireAuth, cartRoutes);

// Set up server to listen on a port
// const PORT = process.env.PORT || 3003;
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
