
import User from "./UsersModules.js";
import Reviews from "./ReviewsModules.js";
import Products from "./productsModel.js";
import Orders from "./OrderModules.js";
import Categories from "./categoriesModel.js";

User.hasMany(Reviews, {
  foreignKey: "userId",
  as: "Reviews",
});

Reviews.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Products.hasMany(Reviews, {
  foreignKey: "productId",
  as: "Reviews",
});

Reviews.belongsTo(Products, {
  foreignKey: "productId",
  as: "products",
});

User.hasMany(Orders, {
  foreignKey: "userId",
  as: "Orders",
});

Orders.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Categories.hasMany(Products, {
  foreignKey: "CategoryId",
  as: "Products",
});

Products.belongsTo(Categories, {
  foreignKey: "CategoryId",
  as: "Categories",
});

export default { User, Reviews, Products, Orders, Categories };
