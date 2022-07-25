import makeAuthService from "./AuthService";
import makeProductService from "./ProductService";
import makeOrderService from "./OrderService";
import axios from "axios";
//TODO: You can use any http request library instead axios

const AuthService = makeAuthService({ httpLibrary: axios });
const ProductService = makeProductService({ httpLibrary: axios });
const OrderService = makeOrderService({ httpLibrary: axios });

export { AuthService, ProductService, OrderService };
