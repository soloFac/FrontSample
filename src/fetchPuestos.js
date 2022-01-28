
export const fetchPuestos = async () => {
    const url = 'https://localhost:44341/api/Puestos';

    const response = await fetch(url)
    const dataPuestos = await response.json()
    return dataPuestos
}