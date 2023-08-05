import Image from 'next/image'
import styles from '../../../styles/guitarras.module.css'
import CantidadSelect from '@/components/CantidadSelect'

const fetchGuitarra = (ruta) => {
    return fetch(`http://127.0.0.1:1337/api/guitarras?filters[url]=${ruta}&populate=imagen`, {
        next: {
            revalidate: 30
        }
    })
        .then(res => res.json())
}

export default async function GuitarraPage({params}) {
    const { id } = params
    const {data: guitarra} = await fetchGuitarra(id)
    const { descripcion, nombre, precio, imagen } = guitarra[0].attributes

    return (
        <div className={styles.guitarra}>
            <Image src={imagen ? imagen.data.attributes.formats.medium.url : ''} alt={`Imagen Guitarra ${nombre}`} width={600} height={400}/>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <CantidadSelect 
                    id={guitarra[0].id}
                    imagen={imagen.data.attributes.url}
                    nombre={nombre}
                    precio={precio}
                />
            </div>
        </div>
    )
}
