import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

interface MyListItemProps {
    icon: JSX.Element
    url: string
    iconText: string
}

function MyListItem({ icon, url, iconText }: MyListItemProps) {
    const navigate = useNavigate()
    const handleNavigate = () => navigate(url)

    return (
        <ListItemButton onClick={handleNavigate}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={iconText} />
        </ListItemButton>
    )
}

export function DrawerListItem() {
    return (
        <List>
            <MyListItem
                icon={<HomeIcon />}
                url="/"
                iconText="Ínicio"
            />
        </List>
    )
}