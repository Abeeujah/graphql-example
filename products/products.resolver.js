// Require Products Model..
const productModel = require('./products.model');

// Define and Export Resolver..
module.exports = {
    Query: {
        products: (parent, args, context, info) => {
            return (productModel.getAllProducts());
        },
        productsByPrice: (_, args) => {
            return (productModel.getProductsByPrice(args.min, args.max));
        },
        productById: (_, args) => {
            return (productModel.getProductById(args.id));
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return (productModel.addNewProduct(args.id, args.description, args.price));
        },
        addNewProductReview: (_, args) => {
            return (productModel.addNewProductReview(args.id, args.rating, args.comment))
        }
    }
};