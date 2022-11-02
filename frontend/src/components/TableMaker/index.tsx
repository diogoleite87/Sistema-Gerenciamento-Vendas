import { Alert, Box, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react"
import { Maker } from "../../schemas";
import { MakerService } from "../../services/MakerService";
import DeleteIcon from '@mui/icons-material/Delete';


export default function TableMaker() {

    const [success, setSuccess] = useState<boolean>(false);
    const [err, setErr] = useState<boolean>(false)
    const [makers, setMakers] = useState<Maker[]>([{}] as Maker[]);

    const deleteMaker = async (name: string) => {

        await MakerService.deleteMaker(name).then(res => {
            setErr(false);
            setSuccess(true);
        }).catch(err => {
            setSuccess(false);
            setErr(true);
        })
    }

    useEffect(() => {

        MakerService.getAllMakers().then(res => {
            setMakers(res.data)
        })

    }, [success])

    return (
        <Box sx={{ width: '100%' }}>

            <Snackbar open={success} autoHideDuration={5000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Marca deletada com sucesso!
                </Alert>
            </Snackbar>

            <Snackbar open={err} autoHideDuration={5000} onClose={() => setErr(false)}>
                <Alert onClose={() => setErr(false)} severity="error" sx={{ width: '100%' }}>
                    Erro ao deletar a marca!
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
                        {makers.map((maker) => (
                            <TableRow key={maker.id}>
                                <TableCell component="th" scope="row">
                                    {maker.id}
                                </TableCell>
                                <TableCell align="left">{maker.name}</TableCell>
                                <TableCell align="center">

                                    <IconButton
                                        sx={{}}
                                        color='error'
                                        onClick={() => deleteMaker(maker.name)}
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