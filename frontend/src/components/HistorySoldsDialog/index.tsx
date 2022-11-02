import { Alert, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useState } from 'react'
import { Client, SoldsProductsDAO } from '../../schemas'
import { ClientService } from '../../services/ClientService'
import { formatDate } from '../../utils/formatter'
import DeleteIcon from '@mui/icons-material/Delete';
import { SoldService } from '../../services/SoldService'


interface IHistorySoldsClientDialog {
    state: boolean
    setState(state: boolean): void
    cell: string
}

interface Column {
    id: 'id_sold' | 'id_product' | 'name_product' | 'model_product' | 'color' | 'size_product' | 'value_sold' | 'created_sold' | 'actions';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'id_sold', label: 'ID Venda', minWidth: 50 },
    { id: 'id_product', label: 'ID Produto', minWidth: 50 },

    {
        id: 'name_product',
        label: 'Marca',
        minWidth: 100,
    },
    {
        id: 'model_product',
        label: 'Modelo',
        minWidth: 100,
    },
    {
        id: 'size_product',
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
        id: 'value_sold',
        label: 'Valor',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'created_sold',
        label: 'Data da Venda',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'actions',
        label: 'Ações',
        minWidth: 100,
        align: 'center'
    },
];

export default function HistorySoldsDialog({
    state: openInfoClientDialog,
    setState: setOpenInfoClientDialog,
    cell
}: IHistorySoldsClientDialog) {

    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [client, setClient] = useState<Client>({} as Client)
    const [allSoldsProducts, setAllSoldsProducts] = useState<SoldsProductsDAO[]>([{}] as SoldsProductsDAO[])
    const [deleteProductSuccess, setDeleteProductSuccess] = useState<boolean>(false);
    const [deleteProductErr, setDeleteProductErr] = useState<boolean>(false);

    const handleClose = () => {
        setOpenInfoClientDialog(!openInfoClientDialog);
    };

    useEffect(() => {
        ClientService.getClient(cell).then(res => {
            setClient(res.data)
        })

        ClientService.getAllClientProductsSolds(cell).then(res => {
            setAllSoldsProducts(res.data)
        })
    }, [openInfoClientDialog, deleteProductSuccess])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteSold = async (productId: number, cell: string) => {

        await SoldService.deleteProductSold(productId, cell).then(res => {
            setDeleteProductSuccess(true)
        }).catch(err => {
            setDeleteProductErr(true)
        })
    }

    return (

        <Dialog
            open={openInfoClientDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth='xl'
        >
            <DialogTitle id="alert-dialog-title">
                {`Historico do cliente: ${client.name}.`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">

                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>

                        <Snackbar open={deleteProductSuccess} autoHideDuration={5000} onClose={() => setDeleteProductSuccess(false)}>
                            <Alert onClose={() => setDeleteProductSuccess(false)} severity="success" sx={{ width: '100%' }}>
                                Venda deletada com sucesso!
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
                                    {allSoldsProducts
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((product) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={product.id_sold}>
                                                    <TableCell key={product.id_sold}>
                                                        {product.id_sold}
                                                    </TableCell>
                                                    <TableCell>
                                                        {product.id_product}
                                                    </TableCell>
                                                    <TableCell>
                                                        {product.name_product}
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        {product.model_product}
                                                    </TableCell >
                                                    <TableCell align='center'>
                                                        {product.size_product}
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        {product.color}
                                                    </TableCell>
                                                    <TableCell>
                                                        R$ {product.value_sold}
                                                    </TableCell>
                                                    <TableCell>
                                                        {formatDate(product.created_sold)}
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        <IconButton
                                                            sx={{}}
                                                            color='error'
                                                            onClick={() => deleteSold(product.id_product, product.cell_client)}
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
                            count={allSoldsProducts.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Fechar
                </Button>
            </DialogActions>
        </Dialog>

    );
}
