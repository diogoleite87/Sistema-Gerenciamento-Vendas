export interface CreateProductDTO {
    name: string
    description: string
    size: number
    model: string
}

export interface CreateProductSoldDTO {
    product_id: number
    client_cell: string
    value_sold: number
}

export interface CreateClientDTO {
    cpf: string
    email: string
    name: string
    cell: string
    address: string
}