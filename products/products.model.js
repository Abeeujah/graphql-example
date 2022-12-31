// Root Products Model..
const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
        reviews: []
    },
    {
        id: 'bluejean',
        description: 'Blue Jean',
        price: 55.55,
        reviews: []
    },
];

// Get All Products Function..
function getAllProducts() {
    return products;
}

// Get Products by Price..
function getProductsByPrice(min, max) {
    return (
        products.filter(product => {
            return (product.price >= min && product.price <= max);
        })
    );
}

// Get Products by ID..
function getProductById(id) {
    return (
        products.find(product => {
            return (product.id === id);
        })
    );
}

// Create New Product..
function addNewProduct(id, description, price) {
    const newProduct = {
        id, description, price, reviews: []
    }
    // Save to memory..
    products.push(newProduct);
    // Return Created Product..
    return (newProduct);
}

// Review A Product..
function addNewProductReview(id, rating, comment) {
    const prototype = getProductById(id);
    if (prototype) {
        const review = {
            rating,
            comment
        };
        prototype.reviews.push(review);
        return (review);
    }
}

// Export getAllProducts..
module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
};