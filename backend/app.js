import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import productRouter from './routers/product.js'

const app = express();

dotenv.config();

app.use(bodyParser.json());

// connection
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useCreateIndex: true
}).then(  () =>{
    console.log('DB connected');
}).catch( () =>{
    console.log('DB it not connect');
});
mongoose.connection.on('error', err =>{
    console.log('object'. ${err});
});


app.use(morgan('dev'));

//router

app.use('/api', productRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(` run Port : ${port} `)
})