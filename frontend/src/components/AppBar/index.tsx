import { styled, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

interface AppBarProps {
    open?: boolean
    toggleDrawer(): void
}

interface AppBarSetup {
    open?: boolean
}

const AppBarSetup = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open'
})<AppBarSetup>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}))

export function AppBar({ open, toggleDrawer }: AppBarProps) {

    return (
        <AppBarSetup position="absolute" open={open}>


            <Toolbar sx={{ pr: '24px' }}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open-drawer"
                    onClick={toggleDrawer}
                    sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    {'PK STORE'}
                </Typography>

            </Toolbar>
        </AppBarSetup>
    )
}