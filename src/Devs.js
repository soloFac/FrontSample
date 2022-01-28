import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';


export default function Devs() {
  const columns = [
    { field: 'nombre', headerName: 'NOMBRE', width: 270 },
    { field: 'profesion', headerName: 'PROFESION', width: 270, },
    { field: 'puesto', headerName: 'PUESTO', width: 210, },
    { field: 'tecnologia', headerName: 'TECNOLOGIA', width: 210, },
    {
      field: 'actions', headerName: 'ACTIONS', width: 120, sortable: false, renderCell: (params) => {
        return <>
          <Link to={`/editar/${params.id}`} >
            <IconButton aria-label="Opciones" >
              <MoreVertIcon />
            </IconButton>
          </Link>
        </>
      }
    }
  ]

  const [usuarios, setUsuarios] = useState([])

  const url = 'https://localhost:44341/api/InfoDesarrolladores';
  const fetchAPI = async () => {
    const response = await fetch(url)
    const dataUsers = await response.json()
    setUsuarios(dataUsers)
    console.log(dataUsers)
  }


  useEffect(() => {
    fetchAPI();
  }, [])

  const rows = usuarios.map(item => {
    return { id: item.idDesarrollador, nombre: item.nombre, profesion: item.profesion, puesto: item.puesto, tecnologia: item.tecnologia , idAction: item.idDesarrollador }
  })

  return (
    <Container>
      <div style={{ height: 350, width: '100%', marginTop: 20 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={3}
          rowsPerPageOptions={[3]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Container>
  )
}