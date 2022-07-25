import { gqlInterface } from "../interfaces/schema.interface";

export default function makeSchema({ gql }: gqlInterface) {
  return gql`
    input RegisterInput {
      email: String!
    }
    input LoginInput {
      email: String!
      otp: String!
    }
    type Register {
      status: String!
      userId: ID!
      email: String!
      otp: String!
      otpExpireDate: String!
    }
    type Login {
      status: String!
      accessToken: String!
    }
    type Logout {
      status: String!
      message: String!
    }
    type RefreshToken {
      status: String!
      accessToken: String!
    }
    input ResendOtpInput {
      email: String!
    }
    type ResendOtp {
      status: String!
      userId: ID!
      email: String!
      otp: String!
      otpExpireDate: String!
    }

    input CreateProductInput {
      productName: String!
      productDescription: String!
      productPrice: String!
    }
    input UpdateProductInput {
      _id: String!
      productName: String
      productDescription: String
      productPrice: String

    }
    input DeleteProductInput {
      _id: String!
    }
    input ShowProductsInput {
      sort: String
    }
    input ShowProductInput {
      _id: String!
    }
    input SearchProductInput {
      keyword: String!
    }
    type CreateProduct {
      status: String!
      _id: String!
      productId: String!
      productName: String!
      productDescription: String!
      productPrice: String!
    }
    type UpdateProduct {
      status: String!
      _id: String!
      productId: String!
      productName: String!
      productDescription: String!
      productPrice: String!
    }
    type DeleteProduct {
      status: String!
      _id: String!
      productId: String!
      productName: String!
      productDescription: String!
      productPrice: String!
    }
    type Products {
      _id: String!
      productId: String!
      productName: String!
      productDescription: String!
      productPrice: String!
    }
    type ShowProducts {
      status: String!
      products: [Products]
    }
    type ShowProduct {
      status: String!
      _id: String!
      productId: String!
      productName: String!
      productDescription: String!
      productPrice: String!
    }
    type SearchProduct {
      status: String!
      products: [Products]
    }
    input CreateOrderInput {
      productId: String!
    }
    input ShowOrdersInput {
      filter: String
    }
    input ShowOrderInput {
      orderId: String!
    }
    input ShowOrderByUserInput {
      filter: String
    }
    type Order {
      _id: String!
      productId: String!
      userId: String!
      orderId: String!
      date: String!
    }
    type CreateOrder {
      status: String!
      _id: String!
      productId: String!
      userId: String!
      orderId: String!
      date: String!
    }
    type ShowOrders {
      status: String!
      orders: [Order]

    }
    type ShowOrder {
      status: String!
      _id: String!
      productId: String!
      userId: String!
      orderId: String!
      date: String!
    }
    type ShowOrderByUser {
      status: String!
      orders: [Order]
    }

    type Mutation {
      register(input: RegisterInput!): Register!
      login(input: LoginInput!): Login!
      resendOtp(input: ResendOtpInput!): ResendOtp!
      logout: Logout!
      createProduct(input: CreateProductInput!): CreateProduct!
      updateProduct(input: UpdateProductInput!): UpdateProduct!
      deleteProduct(input: DeleteProductInput!): DeleteProduct!
      createOrder(input: CreateOrderInput!): CreateOrder!
    }
    type Query {
      refreshToken: RefreshToken!
      showProducts(input: ShowProductsInput): ShowProducts
      showProduct(input: ShowProductInput!): ShowProduct
      searchProduct(input: SearchProductInput!): SearchProduct!

      showOrders(input: ShowOrdersInput): ShowOrders
      showOrder(input: ShowOrderInput!): ShowOrder!
      showOrderByUser(input: ShowOrderByUserInput): ShowOrderByUser
    }
  `;
}
