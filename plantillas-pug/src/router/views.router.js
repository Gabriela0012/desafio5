import {Router} from 'express';
import productContainer from '../container/productContainer.js';
import { uploader } from '../utils.js';

const router = Router();
const productService = new productContainer();


router.get('/', (req, res) => {

  res.render('welcome', {})
})

router.get('/newProduct',(req, res) => {
  res.render('newProduct');
})
router.get('/products',async(req, res) => {
  let products = await productService.getAllProducts();
  res.render('products',{products});
})


router.post('/products',async(req, res)=>{
  const {title,price}=req.body;
  console.log(title,price);
  
  if(!title||!price) return res.status(400).send({status:'error', error:'Incomplete values'})
  let product = {
    title, 
    price,
    image: req.body.image
  }
  console.log(product)
  await productService.saveProduct(product);
  res.redirect('/products');
})

export default router; 