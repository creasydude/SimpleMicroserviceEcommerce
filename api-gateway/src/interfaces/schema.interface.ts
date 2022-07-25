import { gql } from "apollo-server-express";

interface gqlInterface {
  gql: typeof gql;
}

interface registerArgsInterface {
  input: {
    email: string;
  };
}

interface loginArgsInterface {
  input: {
    email: string;
    otp: string;
  };
}

interface resendOtpArgsInterface {
  input: {
    email: string;
  };
}

interface createProductArgsInterface {
  input: {
    productName: string;
    productDescription: string;
    productPrice: string;
  };
}

interface updateProductArgsInterface {
  input: {
    _id: string;
    productName?: string;
    productDescription?: string;
    productPrice?: string;
  };
}

interface deleteProductArgsInterface {
  input: {
    _id: string;
  };
}

interface showProductsArgsInterface {
  input: {
    sort?: string;
  };
}

interface showProductArgsInterface {
  input: {
    _id: string;
  };
}

interface searchProductArgsInterface {
  input: {
    keyword: string;
  }
}

interface createOrderArgsInterface {
  input: {
    productId: string;
  }
}

interface showOrdersArgsInterface {
  input: {
    filter: string;
  }
}

interface showOrderArgsInterface {
  input: {
    orderId: string;
  }
}

interface showOrderByUserArgsInterface {
  input: {
    filter?: string;
  }
}

export {
  gqlInterface,
  registerArgsInterface,
  loginArgsInterface,
  resendOtpArgsInterface,
  createProductArgsInterface,
  updateProductArgsInterface,
  deleteProductArgsInterface,
  showProductsArgsInterface,
  showProductArgsInterface,
  searchProductArgsInterface,
  createOrderArgsInterface,
  showOrdersArgsInterface,
  showOrderArgsInterface,
  showOrderByUserArgsInterface
};
