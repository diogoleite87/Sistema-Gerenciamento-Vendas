import { Box, Button } from "@mui/material"
import { useState } from "react";
import CreateClientDialog from "."


export default function ButtonCreateClientDialog() {

    const [openCreateClientDialog, setOpenCreateClientDialog] = useState<boolean>(false);

    return (
        <Box>
            <CreateClientDialog state={openCreateClientDialog} setState={setOpenCreateClientDialog} />
            <Button variant="contained" component="label" color="success" onClick={() => setOpenCreateClientDialog(true)}>Cadastrar Cliente</Button>
        </Box>

    )
}