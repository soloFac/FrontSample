import { Typography } from "@mui/material";


export default function TitutloTabla({ titulo, nombre }) {
    return (
        <Typography variant="overlay" display="inline-block"
            sx={{ mt: 2, fontFamily: 'roboto', p: 3, fontSize: 17, color: "#5E5873" }}>
            Editar / {nombre}
        </Typography>
    )
}