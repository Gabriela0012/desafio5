import {Router} from 'express';
import productContainer from '../container/productContainer.js';


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



export default router; 