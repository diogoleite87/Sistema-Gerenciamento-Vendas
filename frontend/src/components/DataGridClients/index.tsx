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
import { Button, IconButton, Stack } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MessageIcon from '@mui/icons-material/Message';
import EditClientDialog from '../EditClientDialog';
import DeleteConfirmDialog from '../DeleteConfirmDialog';
import { Alert, Snackbar } from '@mui/material';
import InfoClientDialog from '../InfoClientDialog';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HistorySoldsDialog from '../HistorySoldsDialog';

export default function DataGridClients() {

    const [clients, setClients] = useState<Client[]>([] as Client[]);
    const [openEditDialogClient, setOpenEditDialogClient] = useState<boolean>(false);
    const [clientCellEdit, setClientCellEdit] = useState<string>("")
    const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false)
    const [cellDelete, setCellDelete] = useState<string>("")
    const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
    const [deleteErr, setDeleteErr] = useState<boolean>(false);
    const [editClientSuccess, setEditClientSuccess] = useState<boolean>(false);
    const [editClientErr, setEditClientErr] = useState<boolean>(false);
    const [openInfoClientDialog, setOpenIndoClientDialog] = useState<boolean>(false);
    const [cellClient, setCellClient] = useState<string>("");
    const [openHistorySoldsDialog, setOpenHistorySoldsDialog] = useState<boolean>(false);

    useEffect(() => {

        ClientService.getAllClient().then(res => {
            setClients(res.data)
        })

    }, [deleteSuccess])

    const editClient = (cell: string) => {
        setClientCellEdit(cell)
        setOpenEditDialogClient(true)
    }

    const deleteClient = (cell: string) => {
        setCellDelete(cell)
        setDeleteConfirm(true)
    }

    const infoClient = (cell: string) => {
        setCellClient(cell)
        setOpenIndoClientDialog(true)
    }

    const historySolds = (cell: string) => {
        setCellClient(cell)
        setOpenHistorySoldsDialog(true)
    }

    return (
        <>
            <EditClientDialog state={openEditDialogClient} setState={setOpenEditDialogClient} cellClient={clientCellEdit} setEditClientSuccess={setEditClientSuccess} setEditClientErr={setEditClientErr} />
            <DeleteConfirmDialog state={deleteConfirm} setState={setDeleteConfirm} cell={cellDelete} setDeleteSuccess={setDeleteSuccess} setDeleteErr={setDeleteErr} />
            <InfoClientDialog state={openInfoClientDialog} setState={setOpenIndoClientDialog} cell={cellClient} />
            <HistorySoldsDialog state={openHistorySoldsDialog} setState={setOpenHistorySoldsDialog} cell={cellClient} />

            <Snackbar open={deleteSuccess} autoHideDuration={5000} onClose={() => setDeleteSuccess(false)}>
                <Alert onClose={() => setDeleteSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Cliente deletado com sucesso!
                </Alert>
            </Snackbar>

            <Snackbar open={deleteErr} autoHideDuration={5000} onClose={() => setDeleteErr(false)}>
                <Alert onClose={() => setDeleteErr(false)} severity="error" sx={{ width: '100%' }}>
                    Erro ao deletar o cliente!
                </Alert>
            </Snackbar>

            <Snackbar open={editClientSuccess} autoHideDuration={5000} onClose={() => setEditClientSuccess(false)}>
                <Alert onClose={() => setEditClientSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Cliente editado com sucesso!
                </Alert>
            </Snackbar>

            <Snackbar open={editClientErr} autoHideDuration={5000} onClose={() => setEditClientErr(false)}>
                <Alert onClose={() => setEditClientErr(false)} severity="error" sx={{ width: '100%' }}>
                    Erro ao editar o cliente!
                </Alert>
            </Snackbar>

            <TableContainer component={Paper} sx={{ marginTop: '5vh' }}>

                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Celular</TableCell>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="center">Informações</TableCell>
                            <TableCell align="center">Historico de Compras</TableCell>
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
                                    <IconButton
                                        sx={{}}
                                        color='primary'
                                        onClick={() => infoClient(clients.cell)}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        sx={{}}
                                        color='secondary'
                                        onClick={() => historySolds(clients.cell)}
                                    >
                                        <WorkHistoryIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">


                                    <IconButton
                                        sx={{}}
                                        color='primary'
                                        onClick={() => editClient(clients.cell)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        sx={{}}
                                        color='error'
                                        onClick={() => deleteClient(clients.cell)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton
                                        color='success'
                                        sx={{}}
                                        aria-label={`Ir para Whatsapp do cliente: ${clients.name}`}
                                        href={`https://api.whatsapp.com/send?phone=55${clients.cell}`}
                                        target={"_blank"}
                                    >
                                        <MessageIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
}

