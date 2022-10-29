import { Api } from "../providers";
import { Product, CreateProductDTO } from "../schemas";

const createProduct = (product: CreateProductDTO) => Api.post(`/products`, product);
const deleteProduct = (id: number) => Api.delete(`/products/${id}`);
const getAllProducts = () => Api.get<Product[]>(`/products`);
const getAllProductsAvaiable = () => Api.get<Product[]>(`/products/avaiable`)

export const ProductService = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getAllProductsAvaiable
}