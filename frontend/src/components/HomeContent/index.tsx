import { Typography } from "@material-ui/core";
import { Box, Stack } from "@mui/material";
import GraphicSoldsOfWeek from "../GraphicSoldsOfWeek";
import GraphicValueSoldsOfWeek from "../GraphicValueSoldsOfWeek";

export default function HomeContent() {

    return (
        <Stack direction='row' spacing={2} width='100%' marginTop='4vh'>
            <Box sx={{ width: '50%' }}>
                <Typography variant="h5">Total de Vendas</Typography>
                <GraphicSoldsOfWeek />
            </Box>

            <Box sx={{ width: '50%' }}>
                <Typography variant="h5">Total em R$</Typography>
                <GraphicValueSoldsOfWeek />
            </Box>
        </Stack >
    )
}