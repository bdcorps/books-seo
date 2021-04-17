import Link from 'next/Link'
import styles from '../styles/Nav.module.css'

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
