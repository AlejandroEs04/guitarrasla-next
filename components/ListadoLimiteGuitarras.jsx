import Guitarra from "./Guitarra";

const fetchGuitarras = () => {
    return fetch('https://guitarraslastrapi.onrender.com/api/guitarras?populate=imagen', {
        next: {
            revalidate: 30
        }
    })
        .then(res => res.json())
}

export default async function ListadoLimiteGuitarras() {
    const {data: guitarras} = await fetchGuitarras();

    return guitarras.slice(0, 3).map(guitarra => (
        <Guitarra 
            key={guitarra.attributes.id}
            guitarra={guitarra}
        />
    ))
}
