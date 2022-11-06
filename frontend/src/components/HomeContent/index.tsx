import { Typography } from "@material-ui/core";
import { Box, Stack } from "@mui/material";
import GraphicSoldsOfWeek from "../GraphicSoldsOfWeek";
import GraphicValueSoldsOfWeek from "../GraphicValueSoldsOfWeek";
import HomeInfo from "../HomeInfo";

export default function HomeContent() {

    return (
        <Box sx={{ width: '100%' }}>

            <Stack direction='row' spacing={2} width='100%' marginTop='4vh'>
                <Box sx={{ width: '50%' }}>
                    <Typography variant="h4">Total de Vendas</Typography>
                    <GraphicSoldsOfWeek />
                </Box>

                <Box sx={{ width: '50%' }}>
                    <Typography variant="h4">Total em R$</Typography>
                    <GraphicValueSoldsOfWeek />
                </Box>

            </Stack >

            <Stack direction='row' spacing={2} width='100%'>
                <Box sx={{ width: '50%' }}>
                    <HomeInfo />
                </Box>
            </Stack>
        </Box>
    )
}