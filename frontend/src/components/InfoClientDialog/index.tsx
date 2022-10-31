import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useState } from 'react'
import { Client } from '../../schemas'
import { ClientService } from '../../services/ClientService'
import { formatDate } from '../../utils/formatter'

interface IInfoClientDialog {
    state: boolean
    setState(state: boolean): void
    cell: string
}

export default function InfoClientDialog({
    state: openInfoClientDialog,
    setState: setOpenInfoClientDialog,
    cell
}: IInfoClientDialog) {

    const [client, setClient] = useState<Client>({} as Client)

    const handleClose = () => {
        setOpenInfoClientDialog(!openInfoClientDialog);
    };

    useEffect(() => {
        ClientService.getClient(cell).then(res => {
            setClient(res.data)
        })
    }, [openInfoClientDialog])



    return (

        <Dialog
            open={openInfoClientDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {`Informações do cliente: ${client.name}.`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>
                        ID: {client.id}
                    </Typography>
                    <Typography>
                        Celular: {client.cell}
                    </Typography>
                    <Typography>
                        Nome: {client.name}
                    </Typography>
                    <Typography>
                        CPF: {client.cpf}
                    </Typography>
                    <Typography>
                        Email: {client.email}
                    </Typography>
                    <Typography>
                        Endereço: {client.address}
                    </Typography>
                    <Typography>
                        Criado: {formatDate(client.created_at)}
                    </Typography>
                    <Typography>
                        Atualizado: {formatDate(client.updated_at)}
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Ok!
                </Button>
            </DialogActions>
        </Dialog>

    );
}
