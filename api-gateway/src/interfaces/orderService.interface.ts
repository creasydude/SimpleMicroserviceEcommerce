interface createOrderInterface {
  UserID: string;
  productId: string;
}

interface showOrdersInterface {
    filter?: string;
}

interface showOrderInterface {
    orderId: string;
}

interface showOrderByUserInterface {
    filter?: string;
    UserID: string;
}

export { createOrderInterface , showOrdersInterface, showOrderInterface, showOrderByUserInterface};
