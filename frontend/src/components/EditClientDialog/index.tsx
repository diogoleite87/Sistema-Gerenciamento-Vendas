import { Dialog, DialogTitle } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Button,
    DialogContent,
    Divider,
    Grid,
    IconButton,
    Stack,
    useTheme,
    Box,
} from '@mui/material'
import { useEffect, useState } from 'react'

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ClientService } from '../../services/ClientService'
import { formatDate } from '../../utils/formatter'

export interface BasicDialogProps {
    state: boolean
    setState(state: boolean): void
    cellClient: string
    setEditClientSuccess(state: boolean): void
    setEditClientErr(state: boolean): void
}

export default function EditClientDialog({
    state,
    setState,
    cellClient,
    setEditClientSuccess,
    setEditClientErr
}: BasicDialogProps) {

    const theme = useTheme()
    const [alertLoading, setAlertLoading] = useState<boolean>(false);
    const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
    const [saveError, setSaveError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [cell, setCell] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [createdAt, setCreatedAt] = useState<Date>(new Date());
    const [updatedAt, setUpdatedAt] = useState<Date>(new Date());

    async function updateClient() {

        setAlertLoading(true)
        await ClientService.updateClient(cellClient, { cpf, email, name, cell, address }).then(res => {
            setSaveError(false)
            setSaveSuccess(true)
            setAlertLoading(false)
            setEditClientSuccess(true)
            setState(false)
        }).catch(err => {
            setSaveSuccess(false)
            setSaveError(true)
            setAlertLoading(false)
            setEditClientErr(true)
            setState(false)
        })

    }

    useEffect(() => {
        setSaveSuccess(false)
        setSaveError(false)

        ClientService.getClient(cellClient).then(res => {
            setCell(res.data.cell)
            setAddress(res.data.address)
            setCpf(res.data.cpf)
            setName(res.data.name)
            setEmail(res.data.email)
            setCreatedAt(res.data.created_at)
            setUpdatedAt(res.data.updated_at)
        })
    }, [state])

    return (

        <Dialog
            TransitionProps={{ unmountOnExit: true }}
            open={state}
            scroll="body"
            fullWidth
        >
            <DialogTitle color={theme.palette.grey[400]}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>Editar Cliente</Grid>
                    <Grid item>
                        <IconButton sx={{ size: 'small' }} onClick={() => setState(false)}>
                            <Close />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>
            <Divider />

            <DialogContent>

                <Box sx={{ width: '100%' }}>

                    <Stack spacing={2} direction="row" sx={{ marginBottom: '3vh' }}>
                        <Box sx={{ width: '50%' }}>
                            <TextField
                                helperText="Celular do cliente"
                                id="cell"
                                label="Celular"
                                required
                                type="tel"
                                fullWidth
                                disabled
                                value={cell}
                            />
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <TextField
                                helperText="Nome do cliente"
                                id="name"
                                label="Nome"
                                type="name"
                                required
                                fullWidth
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                disabled={name == 'AAA Anônimo' ? true : false}
                            />
                        </Box>
                    </Stack>

                    <Stack spacing={2} direction="row" sx={{ marginBottom: '3vh' }}>
                        <Box sx={{ width: '50%' }}>
                            <TextField
                                helperText="Email do cliente"
                                id="email"
                                label="Email"
                                type="email"
                                fullWidth
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <TextField
                                helperText="Endereço do cliente"
                                id="address"
                                label="Endereço"
                                type="text"
                                fullWidth
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                            />
                        </Box>
                    </Stack>

                    <Stack spacing={2} direction="row" sx={{ marginBottom: '3vh' }}>
                        <Box sx={{ width: '50%' }}>
                            <TextField
                                helperText="CPF do cliente"
                                id="cpf"
                                label="CPF"
                                type="cpf"
                                fullWidth
                                onChange={(e) => setCpf(e.target.value)}
                                value={cpf}
                            />
                        </Box>

                        <Box sx={{ width: '50%' }}>
                            <Typography>
                                Data Criação: {formatDate(createdAt)}
                            </Typography>
                            <Typography>
                                Ultima Modificação: {formatDate(updatedAt)}
                            </Typography>
                        </Box>

                    </Stack>

                </Box>

            </DialogContent>


            {/* <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', marginBottom: '2vh' }}>
                {saveSuccess ?
                    <Alert severity="success">Cadastro Atualizado!</Alert>
                    : saveError ?
                        <Alert severity="error">Erro editar o cliente! Verifique os campus!</Alert>
                        : <Typography component="text" >Edite ou preencha os campus necessarios!</Typography>
                }

            </Box> */}


            <Divider />
            <Box sx={{ width: "100%" }}>
                <Stack spacing={2} sx={{ alignItems: "center", justifyContent: 'space-between', margin: '2vh' }} direction="row">
                    <Button variant="contained" component="label" color="error" onClick={() => setState(false)} disabled={alertLoading}>Fechar</Button>

                    {alertLoading ? <LoadingButton loading variant="contained" color='success'>Cadastrar</LoadingButton>
                        :
                        <Button variant="contained" component="label" color="primary" onClick={updateClient}>Salvar</Button>
                    }

                </Stack>
            </Box>
        </Dialog >
    )
}