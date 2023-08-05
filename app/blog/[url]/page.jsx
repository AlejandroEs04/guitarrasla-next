import Image from "next/image";
import { formatearFecha } from "@/utils/helpers";
import styles from '../../../styles/blog.module.css'

const fetchSinglePost = (url) => {
    return fetch(`http://127.0.0.1:1337/api/posts?filters[url]=${url}&populate=imagen`, {
        next: {
            revalidate: 30
        }
    })
        .then(res => res.json())
}

export default async function PostPage({params}) {
    const { url } = params
    const {data: post} = await fetchSinglePost(url);

    const { titulo, contenido, publishedAt, imagen } = post[0].attributes
    return (
        <article className={`${styles.post} ${styles["mt-3"]}`}>
            <Image src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} width={2000} height={1000} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto  }>{contenido}</p>
            </div>
        </article>
    )
}
