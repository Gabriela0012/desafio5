import express from 'express';
import productsRouter from './router/products.router.js';
import __dirname from './utils.js';
import viewsRouter from './router/views.router.js';


const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname+'/public'))

const server = app.listen(PORT,()=>{
  console.log(`listening port ${PORT}`);
});

app.get('/',(req, res)=>{
  res.render('welcome.pug',{
    message: 'Welcome to the new test'
  })
})


app.set('views',__dirname+'/views');
app.set('view engine','pug');

app.use('/api/products',productsRouter);
app.use('/',viewsRouter);
