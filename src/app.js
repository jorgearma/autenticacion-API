import express from "express";
import morgan from "morgan";
import usersrutes from "./routes/user.routes";  

import pkg from "../package.json";
import { createRoles } from "./libs/initialSetup.js";
import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'

// Create a new instance of express
const app = express()
createRoles()


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
app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users', usersrutes)


export default app;