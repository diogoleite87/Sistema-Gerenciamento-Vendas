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
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    SelectChangeEvent,
    Theme,
} from '@mui/material'
import { useEffect, useState } from 'react'

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { ClientService } from '../../services/ClientService'
import { Client, CreateProductSoldDTO, Product } from '../../schemas';
import { ProductService } from '../../services/ProductService';
import { SoldService } from '../../services/SoldService';

export interface BasicDialogProps {
    state: boolean
    setState(state: boolean): void
}


export default function SoldProductDialog({
    state,
    setState,
}: BasicDialogProps) {

    const theme = useTheme()
    const [alertLoading, setAlertLoading] = useState<boolean>(false);
    const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
    const [saveError, setSaveError] = useState<boolean>(false);
    const [clients, setClients] = useState<Client[]>([{}] as Client[]);
    const [avaiableProducts, setAvaiableProducts] = useState<Product[]>([{}] as Product[]);

    const [valueSold, setValueSold] = useState<string>("");
    const [clientCell, setClientCell] = useState<string>("");
    const [productId, setProductId] = useState<string>("");

    useEffect(() => {

        ClientService.getAllClient().then(res => {
            setClients(res.data)
        })

        ProductService.getAllProductsAvaiable().then(res => {
            setAvaiableProducts(res.data)
        })

    }, [state, saveSuccess]);

    const handleChangeClient = (event: SelectChangeEvent) => {
        setClientCell(event.target.value);
    };

    const handleChangeProduct = (event: SelectChangeEvent) => {
        setProductId(event.target.value);
    };

    const createProductSold = async () => {

        setAlertLoading(true)

        SoldService.createProductSold({ product_id: Number(productId), client_cell: clientCell, value_sold: Number(valueSold) }).then(res => {
            setAlertLoading(false)
            setSaveSuccess(true)
        }).catch(err => {
            setAlertLoading(false)
            setSaveError(true)
        })

    }

    return (

        <Dialog
            TransitionProps={{ unmountOnExit: true }}
            open={state}
            scroll="body"
            fullWidth
        >
            <DialogTitle color={theme.palette.grey[400]}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>Nova Venda</Grid>
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

                    <Box sx={{ width: '100%' }}>
                        <FormControl sx={{ width: '100%', marginBottom: '3vh' }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Cliente</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={clientCell}
                                onChange={handleChangeClient}
                                fullWidth
                                label="Cliente"
                            >
                                {clients.map((client) => (
                                    <MenuItem
                                        key={client.cell}
                                        value={client.cell}
                                    >
                                        {client.cell} / {client.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ width: '100%' }}>
                        <FormControl sx={{ width: '100%', marginBottom: '3vh' }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Produto</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={productId}
                                onChange={handleChangeProduct}
                                fullWidth
                                label="Cliente"
                            >
                                {avaiableProducts.map((product) => (
                                    <MenuItem
                                        key={product.id}
                                        value={product.id}
                                    >
                                        {product.id} / {product.name} / {product.model} / {product.color} / {product.size}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ width: '100%' }}>
                        <TextField
                            helperText="Valor da venda em R$"
                            id="value"
                            label="Valor"
                            type="number"
                            fullWidth
                            onChange={(e) => setValueSold(e.target.value)}
                            value={valueSold}
                        />
                    </Box>
                </Box>

            </DialogContent>


            <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', marginBottom: '2vh' }}>
                {saveSuccess ?
                    <Alert severity="success">Venda efetuada com sucesso!</Alert>
                    : saveError ?
                        <Alert severity="error">Erro ao efetuar a venda! Verifique os campus!</Alert>
                        : <Typography component="text" >Preencha os campus necessarios!</Typography>
                }

            </Box>


            <Divider />
            <Box sx={{ width: "100%" }}>
                <Stack spacing={2} sx={{ alignItems: "center", justifyContent: 'space-between', margin: '2vh' }} direction="row">
                    <Button variant="contained" component="label" color="error" onClick={() => setState(false)} disabled={alertLoading}>fechar</Button>

                    {alertLoading ? <LoadingButton loading variant="contained" color='success'>Concluido</LoadingButton>
                        :
                        <Button variant="contained" component="label" color="success" onClick={createProductSold}>Concluido</Button>
                    }

                </Stack>
            </Box>
        </Dialog >
    )
}