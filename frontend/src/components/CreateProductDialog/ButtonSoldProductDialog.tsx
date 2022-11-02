import { Box, Button } from "@mui/material"
import { useState } from "react";
import CreateProductDialog from "."


export default function ButtonCreateProductDialog() {

    const [openCreateProductDialog, setOpenCreateProductDialog] = useState<boolean>(false);

    return (
        <Box>
            <CreateProductDialog state={openCreateProductDialog} setState={setOpenCreateProductDialog} />
            <Button variant="contained" component="label" color="warning" onClick={() => setOpenCreateProductDialog(true)}>Cadastrar Produto</Button>
        </Box>

    )
}