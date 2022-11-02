import { Box, Button } from "@mui/material"
import { useState } from "react";
import SoldProductDialog from "."


export default function ButtonSoldProductDialog() {

    const [openSoldProductDialog, setOpenSoldProductDialog] = useState<boolean>(false);

    return (
        <Box>
            <SoldProductDialog state={openSoldProductDialog} setState={setOpenSoldProductDialog} />
            <Button variant="contained" component="label" color="secondary" onClick={() => setOpenSoldProductDialog(true)}>Nova Venda</Button>
        </Box>

    )
}