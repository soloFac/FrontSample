import { Typography } from '@mui/material'
import Devs from './Devs'
import { Button, Box } from '@mui/material'
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function TablaDesarrolladores() {
    return (
        <>
            <Box mt={4} sx={{
                position: "relative", left: "50%",
                transform: "translateX(-50%)", width: "90vw",
                border: '1px solid white', boxShadow: 24
            }}>
                <Typography variant="overlay" display="inline-block"
                    sx={{ fontFamily: 'roboto', p: 3, fontSize: 17, color: "#5E5873" }}>
                    Tabla de desarrolladores
                </Typography>
                <Link to="/agregar">
                    <Button sx={{ ml: 86 }} variant="contained" color="secondary">
                        + Agregar
                    </Button>
                </Link>
                <Divider variant="middle" />
                <Devs></Devs>
            </Box>
            <Footer></Footer>
        </>
    )
}