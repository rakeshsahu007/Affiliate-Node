const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const products = [
        {
            productId : 1,
            name : "Happilo 100% Natural Premium Californian Almonds Value Pack Pouch,Dried,500g",
            uri : "https://amzn.to/2YgKBng",
            imageUrl: "https://m.media-amazon.com/images/I/713D1eLsaqL._SL1500_.jpg",
            price : 437.00
        },
        {
            productId : 1,
            name : "Happilo 100% Natural Premium Californian Almonds Value Pack Pouch,Dried,500g 2",
            uri : "https://amzn.to/2YgKBng",
            imageUrl: "https://m.media-amazon.com/images/I/713D1eLsaqL._SL1500_.jpg",
            price : 437.00
        }
    ];
    res.render('index',{title: "Affiliate Home", products : products})
})

module.exports = router;