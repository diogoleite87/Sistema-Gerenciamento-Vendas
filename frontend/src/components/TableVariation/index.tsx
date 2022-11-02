import { Alert, Box, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react"
import { Variation } from "../../schemas";
import { VariationService } from "../../services/VariationService";
import DeleteIcon from '@mui/icons-material/Delete';


export default function TableVariation() {

    const [success, setSuccess] = useState<boolean>(false);
    const [err, setErr] = useState<boolean>(false)
    const [variations, setVariations] = useState<Variation[]>([{}] as Variation[]);

    const deleteVariation = async (name: string) => {

        await VariationService.deleteVariation(name).then(res => {
            setErr(false);
            setSuccess(true);
        }).catch(err => {
            setSuccess(false);
            setErr(true);
        })
    }

    useEffect(() => {

        VariationService.getAllVariation().then(res => {
            setVariations(res.data)
        })

    }, [success])

    return (
        <Box sx={{ width: '100%' }}>

            <Snackbar open={success} autoHideDuration={5000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Modelo deletado com sucesso!
                </Alert>
            </Snackbar>

            <Snackbar open={err} autoHideDuration={5000} onClose={() => setErr(false)}>
                <Alert onClose={() => setErr(false)} severity="error" sx={{ width: '100%' }}>
                    Erro ao deletar o modelo!
                </Alert>
            </Snackbar>

            <TableContainer component={Paper} sx={{ marginTop: '5vh' }}>

                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Marca</TableCell>
                            <TableCell align="left">Modelo</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {variations.map((variation) => (
                            <TableRow key={variation.id}>
                                <TableCell component="th" scope="row">
                                    {variation.id}
                                </TableCell>
                                <TableCell align="left">{variation.maker_name}</TableCell>
                                <TableCell align="left">{variation.name}</TableCell>
                                <TableCell align="center">

                                    <IconButton
                                        sx={{}}
                                        color='error'
                                        onClick={() => deleteVariation(variation.name)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Box>
    )
}