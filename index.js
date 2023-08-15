const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const userCartRoutes = require('./routes/userCartRoutes');
const userFavouriteRoutes = require('./routes/userFavouriteRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/user-cart', userCartRoutes);
app.use('/api/user-favourites', userFavouriteRoutes);
app.use('/api/order', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
