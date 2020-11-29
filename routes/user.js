var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Nokia",
      category:"mobile",
      description:"This is good phone1",
      image:"images/1.png"
    },
    {
      name:"Samsung",
      category:"mobile",
      description:"This is good phone2",
      image:"images/1.png"
    },
    {
      name:"iPhone",
      category:"mobile",
      description:"This is good phone3",
      image:"images/1.png"
    },
    {
      name:"Mi",
      category:"mobile",
      description:"This is good phone4",
      image:"images/1.png"
    }
  ]
  res.render('user/index', { products,admin:false});
});

module.exports = router;
