import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GroupProducts } from '../../schemas';
import { useEffect, useState } from 'react';
import { ProductService } from '../../services/ProductService'

interface IGroupProductsAvaiable {
    state: boolean
}

export default function GroupProductsAvaiable({ state }: IGroupProductsAvaiable) {

    const [groupProducts, setGroupProducts] = useState<GroupProducts[]>([{}] as GroupProducts[])

    useEffect(() => {

        ProductService.getGroupProductsAvaiable().then(res => {
            setGroupProducts(res.data)
        })
    }, [state])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell align="center">Modelo</TableCell>
                        <TableCell align="center">Cor</TableCell>
                        <TableCell align="center">Tamanho</TableCell>
                        <TableCell align="center">Reais</TableCell>
                        <TableCell align="center">Quantidade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {groupProducts.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.model}</TableCell>
                            <TableCell align="center">{row.color}</TableCell>
                            <TableCell align="center">{row.size}</TableCell>
                            <TableCell align="center">R$ {row.valuesum}</TableCell>
                            <TableCell align="center">{row.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}