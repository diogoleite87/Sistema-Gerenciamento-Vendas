import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Client } from '../../schemas';
import { ClientService } from '../../services/ClientService';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function DataGridClients() {

    const [clients, setClients] = useState<Client[]>([] as Client[]);

    useEffect(() => {

        ClientService.getAllClient().then(res => {
            setClients(res.data)
        })

    }, [])

    return (
        <TableContainer component={Paper} sx={{ marginTop: '5vh' }}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Celular</TableCell>
                        <TableCell align="left">Nome</TableCell>
                        <TableCell align="center">Informações</TableCell>
                        <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map((clients) => (
                        <TableRow key={clients.id}>
                            <TableCell component="th" scope="row">
                                {clients.id}
                            </TableCell>
                            <TableCell align="left">{clients.cell}</TableCell>
                            <TableCell align="left">{clients.name}</TableCell>
                            <TableCell align="center">
                                <Button variant="contained" component="label" color="primary"><InfoIcon /></Button>
                            </TableCell>
                            <TableCell align="center">
                                <Button variant="contained" component="label" color="primary" sx={{ marginRight: '1vh' }}><EditIcon /></Button>
                                <Button variant="contained" component="label" color="error" sx={{ marginLeft: '1vh' }}><DeleteIcon /></Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

