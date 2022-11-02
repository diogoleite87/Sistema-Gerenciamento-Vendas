import { Accordion, AccordionDetails, AccordionSummary, Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useState } from "react";
import GroupProductsAvaiable from "../GroupProductsAvaiable";
import TableProducts from "../TableProducts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableColor from "../TableColor";
import TableMaker from "../TableMaker";
import TableVariation from "../TableVariation";

export default function ProductsContent() {

    const [type, setType] = useState<string>("allProductsAvaiable");


    return (
        <Box sx={{ width: '100%' }}>

            <Accordion sx={{ marginTop: '6vh' }}>
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

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Estoque Detalhado</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid alignItems='center' justifyContent='center' display='flex'>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{}}>
                            <Button onClick={() => setType("allProductsAvaiable")}>Disponiveis</Button>
                            <Button onClick={() => setType("allProducts")}>Todos</Button>
                            <Button onClick={() => setType("allProductsSold")}>Vendidos</Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid marginTop='3vh'>
                        <TableProducts type={type} />
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Cores Cadastradas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableColor />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Marcas Cadastradas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableMaker />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Modelos Cadastrados</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableVariation />
                </AccordionDetails>
            </Accordion>

        </Box >
    )
}