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