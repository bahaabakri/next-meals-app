import Link from "next/link"
import styles from './Header.module.css'
import logoImg from '@/assets/logo.png'
import Image from 'next/image'
import HeaderBackground from './HeaderBackground'
export default function Header() {
    return (
        <>
        <HeaderBackground />
        <header className={styles['header']}>
            <Link className={styles['logo']} href="/">
                <Image src={logoImg} alt="NextLevel Food Logo" priority placeholder="blur" />
                NextLevel Food
            </Link>
            <nav className={styles['nav']}>
                <ul>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>

    )
}