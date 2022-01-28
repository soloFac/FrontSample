import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cancelar() {
    return(
        <Link to="/desarrolladores">
        <Button
            sx={{ display: "inline-block", mt: 6 }}
            variant="outlined" color="secondary"
        >
            Cancelar
        </Button>
    </Link>
    )
}