import { Api } from "../providers";
import { Product, CreateProductSoldDTO } from "../schemas";

const createProductSold = (productSold: CreateProductSoldDTO) => Api.post(`/solds`, productSold);
const deleteProductSold = (id: number, cell: string) => Api.delete(`/solds/${id}/${cell}`);
const getAllProductSold = () => Api.get<Product[]>(`/solds`);

export const SoldService = {
    createProductSold,
    deleteProductSold,
    getAllProductSold
}