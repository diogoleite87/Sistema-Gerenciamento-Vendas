import { Box, Button } from "@mui/material"
import { useState } from "react";
import CreateMakerAndVariationDialog from "."

interface IButtonCreateMakerAndVariationDialog {
    nameButton: string
}

export default function ButtonCreateMakerAndVariationDialog({ nameButton }: IButtonCreateMakerAndVariationDialog) {

    const [openCreateMakerAndVariationDialog, setOpenCreateMakerAndVariationDialog] = useState<boolean>(false);

    return (
        <Box>
            <CreateMakerAndVariationDialog state={openCreateMakerAndVariationDialog} setState={setOpenCreateMakerAndVariationDialog} />
            <Button variant="contained" component="label" color="secondary" onClick={() => setOpenCreateMakerAndVariationDialog(true)}>{nameButton}</Button>
        </Box >

    )
}