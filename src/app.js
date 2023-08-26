import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import productsRoutes from './routes/products.routes.js'

// Create a new instance of express
const app = express()


app.set('pkg',pkg)

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req,res) => {
    res.json({
        name: app.get('pkg').name,
        aouthor: app.get('pkg').author,
        descripcion: app.get('pkg').description,
        version: app.get('pkg').version,
    })
})

// Define our routes
app.use('/products',productsRoutes)

export default app;