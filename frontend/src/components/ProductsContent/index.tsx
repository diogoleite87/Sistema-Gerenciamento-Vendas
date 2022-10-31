import { Accordion, AccordionDetails, AccordionSummary, Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useState } from "react";
import GroupProductsAvaiable from "../GroupProductsAvaiable";
import TableProducts from "../TableProducts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProductsContent() {

    const [type, setType] = useState<string>("allProductsAvaiable");


    return (
        <Box sx={{ width: '100%' }}>

            <Accordion sx={{ marginTop: '5vh' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Estoque Disponivel</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <GroupProductsAvaiable state={false} />
                </AccordionDetails>
            </Accordion>

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