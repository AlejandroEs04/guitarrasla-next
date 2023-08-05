import styles from '../styles/grid.module.css'
import Link from 'next/link'
import ListadoPosts from "@/components/ListadoPosts"
import Curso from "@/components/Curso"
import ListadoLimiteGuitarras from "@/components/ListadoLimiteGuitarras"

const fetchUrlCurso = () => {
  return fetch(`http://127.0.0.1:1337/api/curso?populate=imagen`).then(res => res.json())
}

export default async function page() {
  const {data: curso} = await fetchUrlCurso()
  
  return (
    <>
      <main className="contenedor">
        <h1 className="heading">Conoce Nuestra Coleccion</h1>
        <div className={styles.grid}>
          <ListadoLimiteGuitarras />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <Link 
              href='/tienda'
              className={styles.enlace}
            >Conoce toda nuestra coleccion</Link>
          </div>
      </main>

      <Curso 
        curso={curso.attributes}
      />

      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <ListadoPosts />
      </section>
    </>
  )
}
