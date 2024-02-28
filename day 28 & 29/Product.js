const  mongoose  = require('mongoose');

const schema  = mongoose.Schema;


const ProductSchema = new schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min: [0, 'Price must be positive value'],
    },
    description:String,
    inStock : {
        type: Boolean,
        default : true
    },
    Category:String,
    isDeleted:{
        type : Boolean,
        default : false
    },
    expirationDate:Date
},
{
    timestamps : true
}
);

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;