import { Alert, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useState } from 'react'
import { Maker } from '../../schemas'
import { ColorService } from '../../services/ColorService'
import { MakerService } from '../../services/MakerService'
import { VariationService } from '../../services/VariationService'

interface ICreateMakerAndVariationDialog {
    state: boolean
    setState(state: boolean): void
}

export default function CreateMakerAndVariationDialog({
    state: openCreateMakerAndVariationDialog,
    setState: setOpenCreateMakerAndVariationDialog,
}: ICreateMakerAndVariationDialog) {

    const [success, setSuccess] = useState<boolean>(false);
    const [err, setErr] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [makerName, setMakerName] = useState<string>("");
    const [colorName, setColorName] = useState<string>("");
    const [makerNameVariation, setMakerNameVariation] = useState<string>("");
    const [variationName, setVariationName] = useState<string>("");
    const [makers, setMakers] = useState<Maker[]>([{}] as Maker[]);

    const handleClose = () => {
        setOpenCreateMakerAndVariationDialog(!openCreateMakerAndVariationDialog);
    };

    useEffect(() => {
        MakerService.getAllMakers().then(res => {
            setMakers(res.data)
        })

    }, [success])

    const createMaker = async () => {

        await MakerService.createMaker(makerName).then(res => {
            setMessage("Marca registrada com sucesso!")
            setErr(false)
            setSuccess(true)
        }).catch(err => {
            setMessage("Erro ao registrar a marca!")
            setSuccess(false)
            setErr(true)
        })
    }

    const createVariation = async () => {

        console.log(makerNameVariation);
        console.log(variationName);

        await VariationService.createVariation(makerNameVariation, variationName).then(res => {
            setMessage("Modelo registrado com sucesso!")
            setErr(false)
            setSuccess(true)
        }).catch(err => {
            setMessage("Erro ao registrar o modelo!")
            setSuccess(false)
            setErr(true)
        })

        setVariationName("");
    }

    const createColor = async () => {

        await ColorService.createColor(colorName).then(res => {
            setMessage("Cor registrada com sucesso!")
            setErr(false)
            setSuccess(true)
        }).catch(err => {
            setSuccess(false)
            setMessage("Erro ao registrar a cor!")
            setErr(true)
        })
    }

    const handleChangeMaker = async (event: SelectChangeEvent) => {
        setMakerNameVariation(event.target.value as string);
    };


    return (

        <Dialog
            open={openCreateMakerAndVariationDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">
                {`Gerenciador de marcas, modelos e cores.`}
            </DialogTitle>
            <DialogContent>
                <Box width='100%'>
                    <Stack direction='row' spacing={2} marginTop='3vh'>

                        <Box width='33%'>
                            <TextField
                                helperText="Nome da marca"
                                id="maker"
                                label="Marca"
                                type="text"
                                fullWidth
                                onChange={(e) => setMakerName(e.target.value)}
                            />

                            <Button sx={{ marginTop: '2vh' }} variant="contained" component="label" color="secondary" onClick={createMaker} fullWidth>Cadastrar</Button>

                        </Box>

                        <Box width='33%'>
                            <TextField
                                helperText="Nome da cor"
                                id="maker"
                                label="Cor"
                                type="text"
                                fullWidth
                                onChange={(e) => setColorName(e.target.value)}
                            />
                            <Button sx={{ marginTop: '2vh' }} variant="contained" component="label" color="secondary" onClick={createColor} fullWidth>Cadastrar</Button>

                        </Box>

                        <Box width='34%'>

                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-autowidth-label">Marca</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={makerNameVariation}
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

                            <TextField
                                helperText="Nome do modelo"
                                id="maker"
                                label="Modelo"
                                type="text"
                                fullWidth
                                value={variationName}
                                onChange={(e) => setVariationName(e.target.value)}
                                sx={{ marginTop: '2vh' }}
                            />
                            <Button sx={{ marginTop: '2vh' }} variant="contained" component="label" color="secondary" onClick={createVariation} fullWidth>Cadastrar</Button>
                        </Box>

                    </Stack>

                    <Box sx={{ width: '100%', marginTop: '2vh' }}>
                        {success ?
                            <Alert severity="success">{message}</Alert>
                            : err ?
                                <Alert severity="error">{message}</Alert>
                                : <Typography component="text" >Cadastre marcas, modelos de marcas e cores!</Typography>
                        }

                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Ok!
                </Button>
            </DialogActions>
        </Dialog>

    );
}