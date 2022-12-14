import { Api } from "../providers";
import { Product, CreateProductSoldDTO, SoldsOfWeek, InfoSolds, ProductSoldByDate } from "../schemas";

const createProductSold = (productSold: CreateProductSoldDTO) => Api.post(`/solds`, productSold);
const deleteProductSold = (id: number, cell: string) => Api.delete(`/solds/${id}/${cell}`);
const getAllProductSold = () => Api.get<Product[]>(`/solds`);
const getSoldsOfWeek = (date: string, count: number) => Api.get<SoldsOfWeek[]>(`/solds/week/${date}/${count}`)
const getInfoSolds = () => Api.get<InfoSolds>('/solds/info');
const getProductsSoldsByDate = (date: string) => Api.get<ProductSoldByDate[]>(`/solds/date/${date}`)

export const SoldService = {
    createProductSold,
    deleteProductSold,
    getAllProductSold,
    getSoldsOfWeek,
    getInfoSolds,
    getProductsSoldsByDate
}