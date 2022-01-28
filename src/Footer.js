import { Box, Typography } from '@mui/material'


export default function Footer() {
    return (
        <Box mt={4} sx={{ position: 'absolute', bottom: 16, border: '1px solid white' }}>
            <Typography variant="overlay" display="inline-block"
                sx={{ fontFamily: 'roboto', ml: 14, fontSize: 14, color: "#6E6B7B" }}>
                COPYRIGHT © 2021
            </Typography>
            <Typography variant="overlay" display="inline-block"
                sx={{ fontFamily: 'roboto', ml: 2, fontSize: 14, fontWeight: 500, color: "#7367F0" }}>
                Sitenso by Tensolite
            </Typography>
        </Box>
    )
}