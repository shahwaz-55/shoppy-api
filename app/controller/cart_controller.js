const { request, response } = require('express');
const Cart = require('../model/cart_model');
const http_formatter = require('../util/http_formatter');

const getCartItem = async (request, response) => {
    try {
        const carts = await Cart.find({}).populate('user products.product')
        // .populate({
            // path: 'products.product'
        // });
        // if you want to select and do multiple populate
        //. populate ({
            // path: 'user',    
        //}).
        // populate({
             // path: 'products',
             // select : 'name price description' 
       // });
       return response.status(200).json(http_formatter(carts));
    } catch (error) {

    }

}

const getUserCart = (request, response) => {

}

const createNewCart = async (request, response) =>{
    try {
        const newCart = new Cart(request.body);
        const cart = await Cart.create(newCart);
        return response.status(200).json(http_formatter(cart, "Cart created successfully"));
    } catch (error) {
        return response.status(400).json(http_formatter(error, "something went wrong", false));
    }

}

const updateCart = (request, response) =>{

}

const addProductToCart = async (request, response) => {
    const {user_id} = request.params;
    const {products} = request.body;
    try {

        // const  doesUserExist = await User.findById(user_id);
        const original_cart = await Cart.findOne({user: user_id});
        if(!original_cart) {
          return response.status(400).json(http_formatter({}, "No cart found", false));
        }

          // adding item to cart;
        // things to be careful - 
        /**
         * complete card will be shared from the FE
        */
        
        // const isInvalidCart = products.some(el => !el.product || !el.quantity);
        // for(const el of products) {
        //     if(!el.product || !el.quantity) {
        //         return response.status(400).json(http_formatter({}, "Invalid cart, please check", false));
        //     }
        // }

        // product = [{quality:0, product: 'something'}, {quality: 0}]

        if (!Array.isArray(products) || products.some(e1 => !e1.product || !e1.quantity)) {

        }
    }
}



