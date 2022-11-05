import { Typography } from "@material-ui/core";
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { SoldService } from "../../services/SoldService";


export default function HomeInfo() {

    const [totalValueSold, setTotalValueSold] = useState<number>(0);
    const [totalSold, setTotalSold] = useState<number>(0);


    useEffect(() => {

        SoldService.getInfoSolds().then(res => {
            setTotalValueSold(res.data.totalSumValueSolds)
            setTotalSold(res.data.totalCountSolds)
        })

    }, [])

    return (
        <Box sx={{ width: '100%', marginTop: '5vh' }}>

            <Typography variant="h4">Vendas nos últimos 7 dias</Typography>
            <Stack direction='column' spacing={2} marginTop='3vh'>
                <Typography variant="h5">
                    Total de Vendas: {totalSold}
                </Typography>
                <Typography variant="h5">
                    Total de Vendas em Reais: R$ {totalValueSold}
                </Typography>
            </Stack>
        </Box>
    )
}