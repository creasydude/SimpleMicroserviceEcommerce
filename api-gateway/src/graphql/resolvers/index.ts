import { register, login, logout, resendOtp } from "./Mutation/authMutation";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "./Mutation/productMutation";
import { showProducts, showProduct, searchProduct } from "./Query/productQuery";
import { createOrder } from "./Mutation/orderMutation";
import { refreshToken } from "./Query/authQuery";
import { showOrders, showOrder, showOrderByUser } from "./Query/orderQuery";

const resolvers = {
  Mutation: {
    register,
    login,
    logout,
    resendOtp,
    createProduct,
    updateProduct,
    deleteProduct,
    createOrder,
  },
  Query: {
    refreshToken,
    showProducts,
    showProduct,
    searchProduct,
    showOrders,
    showOrder,
    showOrderByUser,
  },
};
export default resolvers;
