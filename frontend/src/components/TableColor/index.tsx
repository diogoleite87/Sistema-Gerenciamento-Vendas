import { Alert, Box, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react"
import { Color } from "../../schemas";
import { ColorService } from "../../services/ColorService"
import DeleteIcon from '@mui/icons-material/Delete';


export default function TableColor() {

    const [success, setSuccess] = useState<boolean>(false);
    const [err, setErr] = useState<boolean>(false)
    const [colors, setColors] = useState<Color[]>([{}] as Color[]);

    const deleteColor = async (name: string) => {

        await ColorService.deleteColor(name).then(res => {
            setErr(false);
            setSuccess(true);
        }).catch(err => {
            setSuccess(false);
            setErr(true);
        })
    }

    useEffect(() => {

        ColorService.getAllColors().then(res => {
            setColors(res.data)
        })

    }, [success])

    return (
        <Box sx={{ width: '100%' }}>

            <Snackbar open={success} autoHideDuration={5000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Cor deletada com sucesso!
                </Alert>
            </Snackbar>

            <Snackbar open={err} autoHideDuration={5000} onClose={() => setErr(false)}>
                <Alert onClose={() => setErr(false)} severity="error" sx={{ width: '100%' }}>
                    Erro ao deletar a cor!
                </Alert>
            </Snackbar>

            <TableContainer component={Paper} sx={{ marginTop: '5vh' }}>

                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {colors.map((color) => (
                            <TableRow key={color.id}>
                                <TableCell component="th" scope="row">
                                    {color.id}
                                </TableCell>
                                <TableCell align="left">{color.name}</TableCell>
                                <TableCell align="center">

                                    <IconButton
                                        sx={{}}
                                        color='error'
                                        onClick={() => deleteColor(color.name)}
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