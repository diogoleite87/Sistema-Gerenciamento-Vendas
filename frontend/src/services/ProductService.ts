import { Api } from "../providers";
import { Product, CreateProductDTO, GroupProducts } from "../schemas";

const createProduct = (product: CreateProductDTO) => Api.post(`/products`, product);
const deleteProduct = (id: number) => Api.delete(`/products/${id}`);
const getAllProducts = () => Api.get<Product[]>(`/products`);
const getAllProductsAvaiable = () => Api.get<Product[]>(`/products/avaiable`)
const getGroupProductsAvaiable = () => Api.get<GroupProducts[]>(`/products/group/avaiable`);

export const ProductService = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getAllProductsAvaiable,
    getGroupProductsAvaiable
}