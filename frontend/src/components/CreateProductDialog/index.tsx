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
    Select,
    InputLabel,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material'
import { useEffect, useState } from 'react'

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { ClientService } from '../../services/ClientService'
import { Color, Maker, Variation } from '../../schemas';
import { MakerService } from '../../services/MakerService';
import { VariationService } from '../../services/VariationService';
import { ColorService } from '../../services/ColorService';
import { ProductService } from '../../services/ProductService';

export interface BasicDialogProps {
    state: boolean
    setState(state: boolean): void
}

export default function CreateProductDialog({
    state,
    setState,
}: BasicDialogProps) {

    const theme = useTheme()
    const [alertLoading, setAlertLoading] = useState<boolean>(false);
    const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
    const [saveError, setSaveError] = useState<boolean>(false);
    const [makers, setMakers] = useState<Maker[]>([{}] as Maker[]);
    const [variations, setVariations] = useState<Variation[]>([{}] as Variation[]);
    const [colors, setColors] = useState<Color[]>([{}] as Color[]);

    const [nameMaker, setNameMaker] = useState<string>("");
    const [variationName, setVariationName] = useState<string>("");
    const [colorName, setColorName] = useState<string>("");
    const [size, setSize] = useState<number>(40);
    const [amount, setAmount] = useState<number>(1);
    const [description, setDescription] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [messageErr, setMessageErr] = useState<string>("");


    const handleChangeMaker = async (event: SelectChangeEvent) => {
        setNameMaker(event.target.value as string);

        await VariationService.getVariation(event.target.value as string).then(res => {
            setVariations(res.data)
        })
    };

    const handleChangeVariation = async (event: SelectChangeEvent) => {
        setVariationName(event.target.value as string);

    };

    const handleChangeColor = async (event: SelectChangeEvent) => {
        setColorName(event.target.value as string);

    };

    useEffect(() => {
        MakerService.getAllMakers().then(res => {
            setMakers(res.data)
        })

        ColorService.getAllColors().then(res => {
            setColors(res.data)
        })

    }, [state])

    const createProduct = async () => {

        setAlertLoading(true);
        for (let i = 0; i < amount; i++) {

            await ProductService.createProduct({
                name: nameMaker,
                description: description,
                size: size,
                model: variationName,
                value: Number(value),
                color: colorName
            }).then(res => {
                setMessage(`${i + 1} produtos criado com sucesso!`)
                setSaveSuccess(true);
            }).catch(err => {
                setMessageErr(`Erro ao cadastrar o produto ${i + 1}!`);
                setSaveError(true);
            })
        }

        setAlertLoading(false);
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
                    <Grid item>Cadastrar Produto</Grid>
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

                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Marca</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={nameMaker}
                            onChange={handleChangeMaker}
                            fullWidth
                            label="Marca"
                        >
                            {makers.map((maker) => (
                                <MenuItem
                                    value={maker.name}
                                >
                                    {maker.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: '3vh' }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Modelo</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={variationName}
                            onChange={handleChangeVariation}
                            fullWidth
                            label="Modelo"
                        >
                            {variations.map((variation) => (
                                <MenuItem
                                    value={variation.name}
                                >
                                    {variation.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: '3vh' }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Cor</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={colorName}
                            onChange={handleChangeColor}
                            fullWidth
                            label="Cor"
                        >
                            {colors.map((color) => (
                                <MenuItem
                                    value={color.name}
                                >
                                    {color.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>


                    <TextField
                        helperText="Descrição do produto"
                        id="description"
                        label="Descrição"
                        type="text"
                        fullWidth
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ marginTop: '3vh' }}
                    />

                    <Stack direction={'row'} spacing={2} marginTop='3vh'>
                        <TextField
                            helperText="Valor do produto"
                            id="value"
                            label="Valor R$"
                            type="cpf"
                            fullWidth
                            onChange={(e) => setValue(e.target.value)}
                        />

                        <TextField
                            helperText="Tamanho do produto"
                            id="size"
                            label="Tamanho"
                            type="number"
                            fullWidth
                            onChange={(e) => setSize(Number(e.target.value))}
                            value={size}
                        />

                        <TextField
                            helperText="Quantidade do produto"
                            id="amount"
                            label="Quantidade"
                            type="number"
                            fullWidth
                            onChange={(e) => setAmount(Number(e.target.value))}
                            value={amount}
                        />
                    </Stack>

                </Box>

            </DialogContent>


            <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', marginBottom: '2vh' }}>
                {saveSuccess ?
                    <Alert severity="success">{message}</Alert>
                    : saveError ?
                        <Alert severity="error">{messageErr}</Alert>
                        : <Typography component="text" >Preencha os campus necessarios!</Typography>
                }

            </Box>


            <Divider />
            <Box sx={{ width: "100%" }}>
                <Stack spacing={2} sx={{ alignItems: "center", justifyContent: 'space-between', margin: '2vh' }} direction="row">
                    <Button variant="contained" component="label" color="error" onClick={() => setState(false)} disabled={alertLoading}>fechar</Button>

                    {alertLoading ? <LoadingButton loading variant="contained" color='success'>Cadastrar</LoadingButton>
                        :
                        <Button variant="contained" component="label" color="success" onClick={createProduct}>Cadastrar</Button>
                    }

                </Stack>
            </Box>
        </Dialog >
    )
}