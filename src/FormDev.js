import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useState from 'react'

export default function FormDev( {data, handleChange, handleChangeTecnologia, handleChangePuesto, tecnologia, puesto, tecnologias, puestos, leyendaNom, errorTituloNom, leyendaProf, errorTituloProf} ) {

    return (
        <>
        <div>
                    <TextField
                        name="nombre"
                        required
                        error={errorTituloNom}
                        helperText={leyendaNom}
                        id="outlined-required"
                        label="Nombre"
                        style = {{width: 500}}
                        value={data.nombre}
                        onChange={handleChange}
                    />
                    <TextField
                        name="profesion"
                        required
                        error={errorTituloProf}
                        helperText={leyendaProf}
                        id="outlined-required"
                        label="Profesión"
                        style = {{width: 500}}
                        value={data.profesion}
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <TextField
                        id="outlined-select-tecnologia"
                        name="tecnologia"
                        select
                        required
                        label="Tecnologia"
                        value={tecnologia}
                        style = {{width: 500}}
                        onChange={handleChangeTecnologia}
                    >
                        {tecnologias.map((option) => (
                            <MenuItem key={option.idTecnologia} value={option.idTecnologia}>
                                {option.tecnologia}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-puesto"
                        name="puesto"
                        required
                        select
                        label="Puesto"
                        value={puesto}
                        style = {{width: 500 , pb:2}}
                        onChange={handleChangePuesto}
                    >
                        {puestos.map((option) => (
                            <MenuItem key={option.idPuesto} value={option.idPuesto}>
                                {option.puesto}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                </>
    )
}