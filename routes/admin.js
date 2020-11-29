var express=require('express');
var router = express.Router();

/* GET users listing. */
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
  res.render('admin/view-products',{admin:true,products});
});

router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
})
module.exports = router;
