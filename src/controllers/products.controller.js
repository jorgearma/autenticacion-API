import Product from "../models/product"

export const  createProduct = async (req,res) =>{

    const {name,category,price,imgURL} = req.body

    const newProduct = new Product({name,category,price,imgURL})

    const  productSavee = await newProduct.save()

    res.status(201).json(productSavee)
}

export const  getProducs = async (req,res) =>{
    const products = await Product.find()
    res.json(products)
    
}

export const  getProducById = async (req,res) =>{
    const product = await Product.findById(req.params.producId)
    res.status(200).json(product)
    
}

export const  updateProducByid = async (req,res) =>{
    const updateproduct = await Product.findByIdAndUpdate(req.params.producId , req.body,{
        new: true
    })
    res.status(200).json(updateproduct)

    
}

export const  deletePraducById = async (req,res) =>{
    await Product.findByIdAndDelete(req.params.producId)
    res.status(204).json()
    
}