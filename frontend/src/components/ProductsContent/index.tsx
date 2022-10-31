import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { useState } from "react";
import TableProducts from "../TableProducts";


export default function ProductsContent() {

    const [type, setType] = useState<string>("allProductsAvaiable");


    return (
        <Box sx={{ width: '100%' }}>
            <Grid alignItems='center' justifyContent='center' display='flex' marginTop='4vh'>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{}}>
                    <Button onClick={() => setType("allProductsAvaiable")}>Disponiveis</Button>
                    <Button onClick={() => setType("allProducts")}>Todos</Button>
                    <Button onClick={() => setType("allProductsSold")}>Vendidos</Button>
                </ButtonGroup>
            </Grid>

            <Grid marginTop='3vh'>
                <TableProducts type={type} />
            </Grid>
        </Box >
    )
}