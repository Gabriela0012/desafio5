import express from 'express';
import productsRouter from './router/products.router.js';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './router/views.router.js';

const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname+'/public'))

const server = app.listen(PORT,()=>{
  console.log(`holaaaaaddddda ${PORT}`);
});

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');


app.use('/api/products',productsRouter);
app.use('/',viewsRouter);

