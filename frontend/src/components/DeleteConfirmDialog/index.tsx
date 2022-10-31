import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { Client } from '../../schemas';
import { ClientService } from '../../services/ClientService';


interface IDeleteConfirmDialog {
    state: boolean
    setState(state: boolean): void
    cell: string
    setDeleteSuccess(state: boolean): void
    setDeleteErr(state: boolean): void
}

export default function DeleteConfirmDialog({
    state,
    setState,
    cell,
    setDeleteSuccess,
    setDeleteErr
}: IDeleteConfirmDialog) {

    const [client, setClient] = useState<Client>({} as Client);

    const handleClose = () => {
        setState(false);
    };

    const deleteCLient = async () => {

        await ClientService.deleteClient(cell).then(res => {
            setDeleteSuccess(true)
            setState(false)
        }).catch(err => {
            setDeleteErr(true)
            setState(false)
        })
    }

    useEffect(() => {

        ClientService.getClient(cell).then(res => {
            setClient(res.data)
        })
    }, [state])

    return (

        <Dialog
            open={state}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"ATENÇÃO!"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Ao deleter o cliente, essa operação não poderá ser revertida,
                    se o cliente em questão possuir alguma venda vinculado ao seu celular,
                    todas elas passarão para o cliene 'AAA Anônimo'.
                    Tem certeza que deseja deletar o cliente de número {client.cell} e nome {client.name}?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={deleteCLient} autoFocus>
                    Deletar
                </Button>
            </DialogActions>

        </Dialog >

    );
}