import React, { useEffect , useState  } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button , Typography, Divider , Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Menu from './Menu'
import Footer from './Footer';
import TituloTabla from './TituloTabla'
import FormDev from './FormDev'
import BtnCancelar from './BtnCancelar';
import BtnConfirm from './BtnConfirm'


export default function Editar(){
    const params = useParams();
    console.log(params.id)

    const [tecnologias, setTecnologias] = React.useState([]);
    const [puestos, setPuestos] = React.useState([])

    const [puesto, setPuesto] = React.useState(2)
    const [tecnologia, setTecnologia] = React.useState(4)

    const [data, setData] = useState({
        nombre: "", 
        profesion: "",
    });

    const urlPuestos = 'https://localhost:44341/api/Puestos';
    const fetchAPIPuestos = async () => {
        const response = await fetch(urlPuestos)
        const dataPuestos = await response.json()
        setPuestos(dataPuestos)
    }

    const urlTecnologias = 'https://localhost:44341/api/Tecnologias'
    const fetchAPITecnologias = async () => {
        const response = await fetch(urlTecnologias)
        const dataTecnologias = await response.json()
        setTecnologias(dataTecnologias)
    }



    const handleChangeTecnologia = (event) => {
        setTecnologia(event.target.value);
    };

    const handleChangePuesto = (event) => {
        setPuesto(event.target.value);
    };

    const [leyendaNom, setLeyendaNom] = useState("")
    const [errorTituloNom, setErrorTituloNom] = useState(false)

    const [leyendaProf, setLeyendaProf] = useState("")
    const [errorTituloProf, setErrorTituloProf] = useState(false)

    const handleChange = (event) => {
        const regex = /^[A-Z]+$/i;
        let texto = event.target.value;
        let tipo = event.target.name;
        
        if(tipo === "nombre"){
            if(texto.length > 60){
                setLeyendaNom("no puede ser mayor a 60")
                setErrorTituloNom(true)
            }
            else if(!regex.test(texto) && texto !== "")
            {
                setLeyendaNom("No puede contener numeros")
                setErrorTituloNom(true)
            }
            else{
                setLeyendaNom("")
                setErrorTituloNom(false)
            }
        }else if(tipo === "profesion"){
            if(texto.length > 50){
                setLeyendaProf("no puede ser mayor a 50")
                setErrorTituloProf(true)
            }
            else if(!regex.test(texto) && texto !== "")
            {
                setLeyendaProf("No puede contener numeros")
                setErrorTituloProf(true)
            }    
            else{
                setLeyendaProf("")
                setErrorTituloProf(false)
            }
        }

        setData(() => {
            return {
                ...data,
                [event.target.name]: event.target.value
            }
        })
    }
    
    const datosDesarrollador = async () => {
        const url = `https://localhost:44341/api/Desarrolladores/${params.id}`;

        try {
            const respuesta = await fetch(url);
            const datos = await respuesta.json();
            setData({
                nombre: datos.nombre,
                profesion: datos.profesion
            })
            setTecnologia(datos.idTecnologia)
            setPuesto(datos.idPuesto)
        }
        catch (e) {
            console.log(e)
        }
    }

    const enviarDatos = async (event) => {
        event.preventDefault();
        const url = "https://localhost:44341/api/Desarrolladores";
        const desarrollador = JSON.stringify({
            idDesarrollador: params.id,
            nombre: data.nombre,
            profesion: data.profesion,
            idPuesto: puesto,
            idTecnologia: tecnologia,
        })

        try {
            if(errorTituloNom === false && errorTituloProf === false){
                const resultado = await fetch(url, {
                    method: 'PUT',
                    body: desarrollador,
                    headers:{
                        //Esto informa a la API que estamos enviando un objeto en formato JSON
                        "Content-type": "application/json",
                    }
                })
                setData({
                    nombre: "",
                    profesion: ""
                })
                setTecnologia(4)
                setPuesto(2)
            }else{
                alert("los campos deben ser correctos")
            }
        }
        catch (e) {
            console.log(e)
        }
    }



    useEffect(() => {
        // fetchAPIPuestos();
        fetchAPITecnologias();
        fetchAPIPuestos();
        datosDesarrollador();
    }, [])


    return(
        <Container>
            <Menu></Menu>
            <TituloTabla titulo="Editar" nombre={data.nombre}></TituloTabla>
            <Divider variant="middle" sx={{mb:4}}/>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2},
                }}
                noValidate
                autoComplete="off"
                onSubmit={enviarDatos}
            >
                <FormDev
                    data={data}
                    tecnologia={tecnologia}
                    puesto={puesto}
                    tecnologias={tecnologias}
                    puestos={puestos}
                    handleChange={handleChange}
                    handleChangePuesto={handleChangePuesto}
                    handleChangeTecnologia={handleChangeTecnologia}
                    leyendaNom={leyendaNom}
                    errorTituloNom={errorTituloNom}
                    leyendaProf={leyendaProf}
                    errorTituloProf={errorTituloProf}
                ></FormDev>
                <BtnCancelar></BtnCancelar>
                <BtnConfirm nombre="Editar"></BtnConfirm>
            </Box>
            <Footer/>
        </Container>
    )
}