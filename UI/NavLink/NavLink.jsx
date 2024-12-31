'use client'
import Link from 'next/link'
import styles from './NavLink.module.css'
import { usePathname } from "next/navigation"

export default function NavLink({href, children}) {
    const path = usePathname()
    let linkClassName = styles['link']
    if (path.startsWith(href)) {
        linkClassName += ' ' + styles['active']
    }
    return (
        <Link 
            href={href}
            className={linkClassName}>
            {children}
        </Link>
    )
}