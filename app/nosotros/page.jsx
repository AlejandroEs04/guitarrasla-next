import Image from 'next/image'
import imagenNosotros from '../../public/img/nosotros.jpg'
import styles from '../../styles/nosotros.module.css'

function Nosotros() {
  return (
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>

          <Image src={imagenNosotros} width={1000} height={800} alt='Imagen sobre nosotros'/>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at elit mauris. Nullam non sapien mollis urna ultrices tempus. Cras mauris urna, aliquet in luctus in, molestie nec libero. 
            </p>

            <p>
              Sed scelerisque iaculis ex, ac malesuada dolor tincidunt ac. Pellentesque molestie velit vitae nisl ultrices elementum. Praesent urna odio, maximus a interdum at, congue a quam. Morbi dictum venenatis elit non faucibus. Donec iaculis dolor non turpis porta, at porttitor dui tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque feugiat lacus quis luctus. Curabitur fringilla maximus velit, quis viverra velit auctor molestie. 
            </p>
          </div>
        </div>
      </main>
  )
}

export default Nosotros