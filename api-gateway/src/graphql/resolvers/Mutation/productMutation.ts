import { ResolverContext } from "../../../interfaces/express.interface";
import {
  createProductArgsInterface,
  deleteProductArgsInterface,
  updateProductArgsInterface,
} from "../../../interfaces/schema.interface";
import { ProductService } from "../../../services";

const createProduct = async (
  parent: any,
  args: createProductArgsInterface,
  context: ResolverContext
) => {
  try {
    const productInfo = args.input;
    const { data, status } = await ProductService.createProduct({
      ...productInfo,
    });
    const createdProduct = data.createdProduct;
    return {
      status,
      ...createdProduct,
    };
  } catch (err) {
    throw err;
  }
};

const updateProduct = async (
  parent: any,
  args: updateProductArgsInterface,
  context: ResolverContext
) => {
  try {
    const productInfo = args.input;
    const { data, status } = await ProductService.updateProduct({
      ...productInfo,
    });
    const updatedProduct = data.updatedProduct;
    return {
      status,
      ...updatedProduct,
    };
  } catch (err) {
    throw err;
  }
};

const deleteProduct =async (parent : any , args : deleteProductArgsInterface, context : ResolverContext) => {
    try {
      const {_id} = args.input;
      const {data, status} = await ProductService.deleteProduct({_id});
      const deletedProduct = data.deletedProduct;
      return {
        status,
        ...deletedProduct
      }
    } catch (err) {
      throw err;
    }
}

export { createProduct, updateProduct , deleteProduct};
