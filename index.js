const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./app/routes/userRoutes');
const productRoutes = require('./app/routes/productRoutes');
const userCartRoutes = require('./app/routes/userCartRoutes');
const orderRoutes = require('./app/routes/orderRoutes');


app.use(express.json());
// Use the cors middleware to enable CORS
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', userCartRoutes);
app.use('/api', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
