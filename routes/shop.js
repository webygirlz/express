// const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("this data is coming form shop", adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  // rendering the html file using pug
  const products = adminData.products || [];
  res.render('shop',{prods:products,docTitle:'Shop',path:'/',hasProducts :products.length,activeShop:true,ProductCSS:true,layout:true}) 
});

module.exports = router;
