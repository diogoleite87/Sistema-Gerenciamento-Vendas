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
    FormControl,
} from '@mui/material'
import { useEffect, useState } from 'react'

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { ClientService } from '../../services/ClientService'

export interface BasicDialogProps {
    state: boolean
    setState(state: boolean): void
}

export default function CreateClientDialog({
    state,
    setState,
}: BasicDialogProps) {

    const theme = useTheme()
    const [alertLoading, setAlertLoading] = useState<boolean>(false);
    const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
    const [saveError, setSaveError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [cell, setCell] = useState<string>("00000000000");
    const [cpf, setCpf] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [name, setName] = useState<string>("");

    async function createClient() {

        setAlertLoading(true)
        await ClientService.createClient({ cpf, email, name, cell, address }).then(res => {
            setSaveError(false)
            setSaveSuccess(true)
            setAlertLoading(false)
        }).catch(err => {
            setSaveSuccess(false)
            setSaveError(true)
            setAlertLoading(false)
        })

    }

    useEffect(() => {
        setSaveSuccess(false)
        setSaveError(false)
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
                    <Grid item>Cadastrar Cliente</Grid>
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
                                onChange={(e) => setCell(e.target.value)}
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

                            />
                        </Box>

                    </Stack>

                </Box>

            </DialogContent>


            <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', marginBottom: '2vh' }}>
                {saveSuccess ?
                    <Alert severity="success">Cliente cadastrado!</Alert>
                    : saveError ?
                        <Alert severity="error">Erro ao cadastrar o cliente! Verifique os campus!</Alert>
                        : <Typography component="text" >Preencha os campus necessarios!</Typography>
                }

            </Box>


            <Divider />
            <Box sx={{ width: "100%" }}>
                <Stack spacing={2} sx={{ alignItems: "center", justifyContent: 'space-between', margin: '2vh' }} direction="row">
                    <Button variant="contained" component="label" color="error" onClick={() => setState(false)} disabled={alertLoading}>fechar</Button>

                    {alertLoading ? <LoadingButton loading variant="contained" color='success'>Cadastrar</LoadingButton>
                        :
                        <Button variant="contained" component="label" color="success" onClick={createClient}>Cadastrar</Button>
                    }

                </Stack>
            </Box>
        </Dialog >
    )
}