import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Product } from '../../schemas';
import { formatDate } from '../../utils/formatter'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, IconButton, Snackbar } from '@mui/material';
import { ProductService } from '../../services/ProductService'
import { useEffect, useState } from 'react';
import { SoldService } from "../../services/SoldService";

interface Column {
    id: 'id' | 'name' | 'model' | 'size' | 'color' | 'value' | 'description' | 'created_at' | 'actions';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'id', label: 'ID', minWidth: 50 },
    {
        id: 'name',
        label: 'Marca',
        minWidth: 100,
    },
    {
        id: 'model',
        label: 'Modelo',
        minWidth: 100,
    },
    {
        id: 'size',
        label: 'Tamanho',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'color',
        label: 'Cor',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'value',
        label: 'Valor',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'description',
        label: 'Descrição',
        minWidth: 120,
    },
    {
        id: 'created_at',
        label: 'Adicionado',
        minWidth: 100,
    },

    {
        id: 'actions',
        label: 'Ações',
        minWidth: 100,
        align: 'center'
    },
];

interface ITableProducts {
    type: string
}

export default function TableProducts({ type }: ITableProducts) {

    const [products, setProducts] = useState<Product[]>([{}] as Product[]);
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [deleteProductSuccess, setDeleteProductSuccess] = useState<boolean>(false);
    const [deleteProductErr, setDeleteProductErr] = useState<boolean>(false);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteProduct = async (id: number) => {

        await ProductService.deleteProduct(id).then(res => {
            setDeleteProductSuccess(true)
        }).catch(err => {
            setDeleteProductErr(true)
        })
    }

    useEffect(() => {

        {
            type == 'allProducts' ? ProductService.getAllProducts().then(res => {
                setProducts(res.data)
            }) : type == 'allProductsSold' ? SoldService.getAllProductSold().then(res => {
                setProducts(res.data)
            }) : ProductService.getAllProductsAvaiable().then(res => {
                setProducts(res.data)
            })
        }
    }, [deleteProductSuccess, type])

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            <Snackbar open={deleteProductSuccess} autoHideDuration={5000} onClose={() => setDeleteProductSuccess(false)}>
                <Alert onClose={() => setDeleteProductSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Produto deletado com sucesso!
                </Alert>
            </Snackbar>

            <Snackbar open={deleteProductErr} autoHideDuration={5000} onClose={() => setDeleteProductErr(false)}>
                <Alert onClose={() => setDeleteProductErr(false)} severity="error" sx={{ width: '100%' }}>
                    Erro ao deletar o produto!
                </Alert>
            </Snackbar>

            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((product) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={product.id}>
                                        <TableCell key={product.id}>
                                            {product.id}
                                        </TableCell>
                                        <TableCell>
                                            {product.name}
                                        </TableCell>
                                        <TableCell>
                                            {product.model}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {product.size}
                                        </TableCell >
                                        <TableCell align='center'>
                                            {product.color}
                                        </TableCell>
                                        <TableCell align='center'>
                                            R${product.value.toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            {product.description}
                                        </TableCell>
                                        <TableCell>
                                            {formatDate(product.created_at)}
                                        </TableCell>
                                        <TableCell align='center'>
                                            <IconButton
                                                sx={{}}
                                                color='primary'
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                sx={{}}
                                                color='error'
                                                disabled={type == 'allProductsSold'}
                                                onClick={() => deleteProduct(product.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}