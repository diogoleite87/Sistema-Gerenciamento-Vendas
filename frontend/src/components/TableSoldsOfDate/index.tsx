import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import { useEffect, useState } from "react";
import { SoldService } from "../../services/SoldService";
import { ProductSoldByDate } from "../../schemas";
import { formatDate } from "../../utils/formatter";
import moment, { Moment } from 'moment'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Box } from "@material-ui/core";


export default function TableSoldsOfDate() {

    const [solds, setSolds] = useState<ProductSoldByDate[]>([] as ProductSoldByDate[])
    const [date, setDate] = useState<Moment | null>(moment());

    useEffect(() => {
        SoldService.getProductsSoldsByDate(date ? date.format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')).then(res => {
            setSolds(res.data)
        })
    }, [date])

    const handleChange = (newValue: Moment | null) => {
        setDate(newValue);
    };

    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="DD-MM-YYYY"
                        value={date}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>

            <TableContainer component={Paper} sx={{ marginTop: '5vh' }}>

                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Celular</TableCell>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="left">Marca</TableCell>
                            <TableCell align="left">Modelo</TableCell>
                            <TableCell align="left">Cor</TableCell>
                            <TableCell align="left">Valor</TableCell>
                            <TableCell align="left">Data</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {solds.map((sold) => (
                            <TableRow key={sold.cellclient}>
                                <TableCell component="th" scope="row">{sold.cellclient}</TableCell>
                                <TableCell align="left">{sold.client}</TableCell>
                                <TableCell align="left">{sold.productname}</TableCell>
                                <TableCell align="left">{sold.productmodel}</TableCell>
                                <TableCell align="left">{sold.productcolor}</TableCell>
                                <TableCell align="left">R$ {sold.valuesold}</TableCell>
                                <TableCell align="left">{formatDate(new Date(sold.date))}</TableCell>
                                <TableCell align="center">

                                    <IconButton
                                        color='success'
                                        sx={{}}
                                        aria-label={`Ir para Whatsapp do cliente: ${sold.client}`}
                                        href={`https://api.whatsapp.com/send?phone=55${sold.cellclient}`}
                                        target={"_blank"}
                                    >
                                        <MessageIcon />
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