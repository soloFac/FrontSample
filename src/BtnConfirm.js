import { Button } from "@mui/material";

export default function BtnEditar({ nombre }){
    return (
        <Button
            sx={{ ml: 86, display: "inline-block", mt: 6 }}
            variant="contained" color="secondary"
            type="submit"
        >
            {nombre}
        </Button>
    )
}