import Guitarra from "./Guitarra";

const fetchGuitarras = () => {
    return fetch('http://127.0.0.1:1337/api/guitarras?populate=imagen', {
        next: {
            revalidate: 30
        }
    })
        .then(res => res.json())
}

export default async function ListadoGuitarras() {
    const {data: guitarras} = await fetchGuitarras();

    return guitarras.map(guitarra => (
        <Guitarra 
            key={guitarra.attributes.id}
            guitarra={guitarra}
        />
    ))
}
