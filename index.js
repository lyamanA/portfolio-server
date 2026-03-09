const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors({ origin: ['http://localhost:3000', 'https://lyaman-new-portfolio-app.vercel.app'] }));
app.use(express.json());

// Отдаём загруженные файлы статически
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ Error:', err));

app.use('/api/projects', require('./routes/projects'));

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));