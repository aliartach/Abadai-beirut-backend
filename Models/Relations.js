import Orders from "./OrderModel.js"
import Product from "./productsModel.js";
import Users from "./UserModel.js";
import Reviews from "./ReviewsModel.js";
import Categories from "./categoriesModel.js";

Orders.belongsToMany(Product, {through: 'OrderProduct', foreignKey: 'orderId'});
Product.belongsToMany(Orders, {through: 'OrderProduct', foreignKey: 'productId'});


Users.hasMany(Orders);
Orders.belongsTo(Users);

Users.hasMany(Reviews);
Reviews.belongsTo(Users);

Product.hasMany(Reviews);
Reviews.belongsTo(Product);

Categories.hasMany(Product);
Product.belongsTo(Categories);

export {Orders, Product, Users, Reviews, Categories}