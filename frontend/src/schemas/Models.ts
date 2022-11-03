export type Product = {
    name: string;
    description: string;
    id: number;
    size: number;
    model: string;
    value: number;
    color: string;
    created_at: Date;
    updated_at: Date;
}

export type Client = {
    id: number
    cpf: string;
    email: string;
    cell: string;
    name: string;
    address: string;
    created_at: Date;
    updated_at: Date;
}

export type GroupProducts = {
    name: string
    model: string
    color: string
    size: number
    valuesum: number
    count: number
}

export type Variation = {
    id: number;
    name: string;
    maker_name: string;
}

export type Maker = {
    id: number;
    name: string;
}

export type Color = {
    id: number;
    name: string;
}

export interface SoldsProductsDAO {
    name_product: string
    model_product: string
    color: string
    size_product: string
    value_sold: number
    name_client: string
    cell_client: string
    id_sold: number
    id_product: number
    created_sold: Date
}

export type SoldsOfWeek = {

    sumSolds: number
    countSolds: number
    currentDate: string
}