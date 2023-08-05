import styles from '../styles/header.module.css'
import logo from '../public/img/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import carritoIcon from '../public/img/carrito.png'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link href='/' >
                <Image src={logo.src} alt="imagen del logotipo" width={300} height={40} />
            </Link>
            
            <nav className={styles.navegacion}>
                <Link href="/">
                    Inicio
                </Link>
                <Link href="/nosotros">
                    Nosotros
                </Link>
                <Link href="/tienda">
                    Tienda
                </Link>
                <Link href="/blog">
                    Blog
                </Link>

                <Link href="/carrito">
                    <Image width={30} height={25} src={carritoIcon} alt='imagen carrito' />
                </Link>
            </nav>
        </div>
    </header>
  )
}
