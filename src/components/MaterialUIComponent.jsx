import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import {useContext} from 'react';
import { AppThemeContext } from '@/contexts/AppThemeContext';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';



export default function MaterialUIComponent()
{
    const { mode, toggleTheme } = useContext(AppThemeContext);

    return(
        <>
        
        <h3>Material UI Component</h3>

        <Stack direction="row" spacing={2}>
            <Button color="secondary" startIcon={<SendIcon  />}>Secondary</Button>
            <Button variant="contained" color="success" startIcon={<SendIcon  />} >Success</Button>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon   />} >Error</Button>
        </Stack>

        <hr/>

        <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>




        </>

    );
}

