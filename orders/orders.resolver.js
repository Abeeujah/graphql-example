// Import Orders Model..
const orderModel = require('./orders.model');

// Define and Export Resolver..
module.exports = {
    Query: {
        orders: (parent, args, context, info) => {
            return (orderModel.getAllOrders());
        }
    }
};