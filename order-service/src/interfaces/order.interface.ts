interface makeOrderInterface {
  userId?: string;
  productId?: string;
}
interface makeOrderReturnInterface {
  generateOrderId: () => string;
  getUserId: () => string | undefined;
  getProductId: () => string | undefined;
}

interface buildMakeOrderInterface {
  orderIdGenerator : (num : number) => string;
}

export { makeOrderInterface, makeOrderReturnInterface, buildMakeOrderInterface };